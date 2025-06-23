import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native"; // Bỏ Linking tạm thời

// Import ảnh (đảm bảo đường dẫn đúng)
import bankingVNPAYImg from '../../../assets/img/vnpay.jpg'; // Sửa lại đường dẫn nếu cần
import bankingVIBImg from '../../../assets/img/banking.png';
import momoImg from '../../../assets/img/momo.png';

import { useNavigation, useRoute } from "@react-navigation/native";

function PhuongThucThanhToan() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Chọn Phương Thức Thanh Toán
                    </Text>
                </View>
                <View style={styles.paymentMethodsContainer}>
                    <PhuongThuc
                        onPress={() => {
                            navigation.navigate("ThanhToan", { phuongthuc: "vnpay" });
                        }}
                        img={bankingVNPAYImg}
                    >
                        Tài khoản ví điện tử VNPAY
                    </PhuongThuc>
                    <PhuongThuc
                        onPress={() => {
                            navigation.navigate("ThanhToan", { phuongthuc: "vib" });
                        }}
                        img={bankingVIBImg}
                    >
                        Tài khoản ngân hàng VIB
                    </PhuongThuc>
                    <PhuongThuc
                        onPress={() => {
                            navigation.navigate("ThanhToan", { phuongthuc: "momo" });
                        }}
                        img={momoImg}
                    >
                        Tài khoản ví điện tử Momo
                    </PhuongThuc>
                </View>
                <View style={styles.backLinkContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("LichSuGiaoDich");
                    }} style={styles.backLink}>
                        <Text style={styles.backLinkText}>
                            Xem lịch sử giao dịch
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.backLinkContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Home");
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

function PhuongThuc({ children, onPress, img }) {
    return (
        <TouchableOpacity style={styles.paymentMethod} onPress={onPress}>
            <View style={styles.paymentMethodCard}>
                <Image
                    alt="Phương thức thanh toán"
                    style={styles.paymentMethodIcon}
                    source={img}
                />
                <View style={styles.paymentMethodDetails}>
                    <Text style={styles.paymentMethodName}>{children}</Text>
                    <View style={styles.paymentMethodDescription}>
                        <Text style={styles.noFee}>Không mất phí</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PhuongThucThanhToan;

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
    paymentMethodsContainer: {
        marginBottom: 20,
    },
    paymentMethod: {
        marginBottom: 10,
    },
    paymentMethodCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',
    },
    paymentMethodIcon: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 25,
    },
    paymentMethodDetails: {
        flex: 1,
    },
    paymentMethodName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentMethodDescription: {
        marginTop: 5,
    },
    noFee: {
        color: '#ccc',
        fontSize: 14,
    },
    backLinkContainer: {
        marginTop: 15,
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
    // Styles for Mock ThongBao
    mockThongBaoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    mockThongBaoBox: {
        backgroundColor: '#1f1f1f',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    mockThongBaoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    mockThongBaoMessage: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 20,
    },
    mockThongBaoButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    mockThongBaoButtonText: {
        color: 'white',
        fontSize: 16,
    },
});