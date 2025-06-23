import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as authHooks from "../../../hooks/auth"
import * as managerServices from "../../../services/ManagerService"

// --- BẮT ĐẦU MOCKING CÁC HÀM/SERVICE CHO GIAO DIỆN ---

// Hàm giả cho NotePayMent component
const NotePayMent = () => (
  <View style={styles.notePaymentContainer}>
    <Text style={styles.notePaymentText}>
      Lưu ý: Số tiền nạp tối thiểu là 5.000 VNĐ.
    </Text>
    <Text style={styles.notePaymentText}>
      Bạn sẽ được chuyển hướng đến trang thanh toán của cổng thanh toán.
    </Text>
  </View>
);



function ThanhToan() {
    const navigation = useNavigation();
    const route = useRoute();

    const { phuongthuc } = route.params || {};

    const [soTienNap, setSoTienNap] = useState("");
    const [moTaNap, setMoTaNap] = useState("");
    const [error, setError] = useState('');
    const [userId,setUserId] = useState();
    
    useEffect(() => {
      const fetchUserId = async () => {
        const userId = await authHooks.getUserIdFromToken(); // Lấy ID giả
        setUserId(userId);
      }
      fetchUserId();
    },[])

    const handleSubmit = async () => {
        setError(''); // Xóa lỗi cũ

        // Chỉ kiểm tra UI, không thực hiện logic API thật
        if (Number(soTienNap) < 5000) {
            Alert.alert("Thông báo", "Số tiền không được nhỏ hơn 5.000 VNĐ (kiểm tra UI).");
            return;
        }
        if (!userId) {
            Alert.alert("Lỗi", "Không tìm thấy ID người dùng. Vui lòng đăng nhập lại.");
            return;
        }

        try {
            let paymentResult;
            if (phuongthuc === "vnpay") {
              console.log("🔍 userId:", userId);
              console.log("🔍 soTienNap:", soTienNap);
              console.log("🔍 moTaNap:", moTaNap);
                paymentResult = await managerServices.CreatePaymentVnPay(userId, soTienNap, moTaNap);
                if (paymentResult?.data) {
                    Alert.alert("Thông báo", `Mở URL VNPAY`);
                    Linking.openURL(paymentResult.data).catch(err => Alert.alert("Lỗi", "Không thể mở URL."));
                } else {
                    setError("Không nhận được URL thanh toán VNPAY .");
                }
            } else if (phuongthuc === "vib") {
                const napTienDto = { SoTien: Number(soTienNap) };
                paymentResult = await managerServices.TaoGiaoDich(napTienDto);

                if (paymentResult && paymentResult.giaoDichId) {
                    Alert.alert("Thành công", `Giao dịch VIB thành công với ID: ${paymentResult.giaoDichId}.`);
                } else {
                    setError("Không nhận được thông tin giao dịch VIB.");
                }
            } else if (phuongthuc === "momo") {
                const napTienDto = {
                    soTien: Number(soTienNap),
                    userId: userId
                };
                paymentResult = await managerServices.TaoGiaoDichMomo(napTienDto);
                if (paymentResult?.payUrl) {
                    Alert.alert("Thông báo", `Mở URL Momo: ${paymentResult.payUrl}`);
                    Linking.openURL(paymentResult.payUrl).catch(err => Alert.alert("Lỗi", "Không thể mở URL ."));
                } else {
                    setError("Không nhận được URL thanh toán MoMo .");
                }
            } else {
                Alert.alert("Thông báo", "Vui lòng chọn phương thức thanh toán.");
            }
        } catch (err) {
            console.error("Lỗi khi tạo giao dịch:", err);
            setError(err.message || "Có lỗi xảy ra khi tạo giao dịch .");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {phuongthuc === "vnpay" && "Nạp Tiền Qua VNPAY"}
                        {phuongthuc === "vib" && "Nạp Tiền Qua VIB "}
                        {phuongthuc === "momo" && "Nạp Tiền Qua MoMo "}
                        {!phuongthuc && "Nạp Tiền (Chọn Phương Thức)"}
                    </Text>
                </View>
                <NotePayMent />

                <View style={styles.paymentForm}>
                    {(phuongthuc === "vnpay" || phuongthuc === "vib" || phuongthuc === "momo") && (
                        <>
                            <InPutInfoPaymMent
                                type={"numeric"}
                                onChange={(value) => setSoTienNap(value)}
                                goiy={"Nhập số tiền cần nạp"}
                                isrequired={true}
                                value={soTienNap}
                            >
                                VNĐ
                            </InPutInfoPaymMent>
                            {phuongthuc === "vnpay" && (
                                <InPutInfoPaymMent
                                    type={"default"}
                                    onChange={(value) => setMoTaNap(value)}
                                    goiy={"Bạn hãy nhập mô tả đơn hàng"}
                                    isrequired={false}
                                    value={moTaNap}
                                >
                                </InPutInfoPaymMent>
                            )}
                        </>
                    )}

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                        <Text style={styles.submitBtnText}>NẠP TIỀN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.backLinkContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }} style={styles.backLink}>
                        <Text style={styles.backLinkText}>
                            Trở về
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

function InPutInfoPaymMent({ type, goiy, onChange, children, isrequired, value }) {
    return (
        <View style={styles.inputGroup}>
            <TextInput
                keyboardType={type}
                style={styles.amountInput}
                placeholder={goiy}
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={onChange}
            />
            {children && <Text style={styles.currency}>{children}</Text>}
        </View>
    );
}

export default ThanhToan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434242',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    width: '90%',
    maxWidth: 400,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  notePaymentContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#3a3a3a',
    borderRadius: 5,
  },
  notePaymentText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
  },
  paymentForm: {
    marginTop: 24,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#444',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#555',
    paddingRight: 10,
  },
  amountInput: {
    flex: 1,
    color: '#eee',
    fontSize: 16,
    padding: 10,
  },
  currency: {
    color: '#eee',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  submitBtn: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backLinkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  backLink: {
    paddingVertical: 10,
  },
  backLinkText: {
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});