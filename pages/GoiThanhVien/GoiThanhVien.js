import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

import LoginContainer from '../../components/Login-container/LoginContainer';
import Plan from '../../components/Layouts/Plan/Plan';
import ThongBao from '../../components/Layouts/ThongBao/ThongBao';
import LoginBody from '../../components/Login-container/LoginBody';

import * as authHooks from '../../hooks/auth';
import * as authServices from '../../services/AuthenticationService';
import * as managerServices from '../../services/ManagerService';
import { formatDate, formatVND } from '../../utils/Format';

import { styles } from './GoiThanhVienStyle';

export default function GoiThanhVien({ navigation }) {
    const [dataUser, setDataUser] = useState({});
    const [dataListGoi, setDataListGoi] = useState([]);
    const [dataCTGoiTVUser, setDataCTGoiTVUser] = useState({});
    const [dataGoiThang, setDataGoiThang] = useState({});
    const [dataGoiNam, setDataGoiNam] = useState({});
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);

    const colorSchemes = ['green', 'yellow', 'red', 'blue'];

    // Đơn giản hóa formThongBao để tránh lỗi
    const [formThongBao, setFormThongBao] = useState({
        show: false,
        type: 'warning',
        title: '',
        message: '',
        soNgayOptions: [],
        btnLabel: '',
        onBTNClick: null,
        showButton: false,
    });

    const soNgayMuaGoiRef = useRef(null);

    // Lấy userId async
    useEffect(() => {
        async function getUserId() {
            try {
                console.log('Getting userId from token...');
                const id = await authHooks.getUserIdFromToken();
                if (id) {
                    console.log('UserId retrieved:', id);
                    setUserId(id);
                } else {
                    console.log("Không thể lấy userId từ token");
                }
            } catch (error) {
                console.log("Lỗi khi lấy userId:", error);
            } finally {
                setLoading(false);
            }
        }

        getUserId();
    }, []);

    useEffect(() => {
        if (!userId) return;

        async function fetchApiUser() {
            try {
                console.log('Fetching user data for userId:', userId);

                const resultU = await authServices.getUserById(userId);
                setDataUser(resultU || {});

                const resultLGTV = await managerServices.getListGoiThanhVien();
                setDataListGoi(resultLGTV?.data || []);

                const resultCTGoiTVUser = await managerServices.GetChiTietGoiTVByUser(userId);
                setDataCTGoiTVUser(resultCTGoiTVUser || {});

                console.log('Data fetched successfully');
            } catch (error) {
                console.log("Lỗi khi fetch thông tin người dùng:", error);
                // Set default values để tránh lỗi
                setDataUser({});
                setDataListGoi([]);
                setDataCTGoiTVUser({});
            }
        }

        fetchApiUser();
    }, [userId]);

    const handleSelect = useCallback((planId) => {
        console.log('Plan selected:', planId);
        setSelectedPlan(planId);
        soNgayMuaGoiRef.current = null;
    }, []);

    // Đơn giản hóa closeThongBao
    const closeThongBao = useCallback(() => {
        console.log('Closing ThongBao');
        setFormThongBao({
            show: false,
            type: 'warning',
            title: '',
            message: '',
            soNgayOptions: [],
            btnLabel: '',
            onBTNClick: null,
            showButton: false,
        });
        setIsProcessing(false);
    }, []);

    const handleThongBao = useCallback(() => {
        console.log('handleThongBao called, isProcessing:', isProcessing);

        if (isProcessing) {
            console.log('Already processing, returning...');
            return;
        }

        if (!selectedPlan) {
            Alert.alert("Thông báo", "Vui lòng chọn gói trước khi mua");
            return;
        }

        console.log('Setting processing to true');
        setIsProcessing(true);

        try {
            const selectedGoiName = dataListGoi.find(g => g.goiTVId === selectedPlan)?.tenGoiTV || '';
            console.log('Selected goi name:', selectedGoiName);

            // Reset soNgayMuaGoiRef
            soNgayMuaGoiRef.current = null;

            console.log('Setting formThongBao...');
            setFormThongBao({
                show: true,
                type: 'warning',
                title: `Hãy chọn số ngày bạn muốn mua cho gói "${selectedGoiName}"`,
                message: 'Các gói đều có giá ưu đãi đặc biệt',
                soNgayOptions: [30, 365],
                btnLabel: 'Mua',
                onBTNClick: handleCheckGoiDaMua,
                showButton: true,
            });

            console.log('formThongBao set successfully');
        } catch (error) {
            console.log("Lỗi khi hiển thị thông báo:", error);
            setIsProcessing(false);
        }
    }, [selectedPlan, dataListGoi, isProcessing]);

    const handleCheckGoiDaMua = useCallback(() => {
        console.log('handleCheckGoiDaMua called');

        try {
            const selectedNgay = soNgayMuaGoiRef.current;
            console.log('Selected ngay:', selectedNgay);

            if (!selectedNgay) {
                Alert.alert("Thông báo", "Vui lòng chọn số ngày mua");
                return;
            }

            const goi = selectedNgay === 30 ? dataGoiThang[selectedPlan] : dataGoiNam[selectedPlan];
            console.log('Goi data:', goi);

            if (!goi || !goi[0]) {
                Alert.alert("Thông báo", "Gói chưa có dữ liệu");
                closeThongBao();
                return;
            }

            const hasExistingPlan = dataCTGoiTVUser?.luaChonGoiTV?.luaChonGoiTVId !== goi[0]?.luaChonGoiTVId && dataCTGoiTVUser.status === true;

            if (hasExistingPlan) {
                setFormThongBao({
                    show: true,
                    type: 'warning',
                    title: `Bạn đã có gói ${dataCTGoiTVUser?.goiThanhVien?.tenGoiTV}.`,
                    message: `Bạn có muốn mua gói ${goi[0]?.goiThanhVien?.tenGoiTV} này thay gói ${dataCTGoiTVUser?.goiThanhVien?.tenGoiTV} kia không`,
                    btnLabel: 'Vẫn mua',
                    onBTNClick: HandleMuaGoi,
                    showButton: true,
                    soNgayOptions: [],
                });
            } else {
                HandleMuaGoi();
            }
        } catch (error) {
            console.log("Lỗi trong handleCheckGoiDaMua:", error);
            closeThongBao();
        }
    }, [selectedPlan, dataGoiThang, dataGoiNam, dataCTGoiTVUser, closeThongBao]);

    const HandleMuaGoi = useCallback(async () => {
        console.log('HandleMuaGoi called');

        try {
            const selectedNgay = soNgayMuaGoiRef.current;

            if (!selectedPlan || !selectedNgay) {
                Alert.alert("Thông báo", "Bạn chưa chọn gói hoặc số ngày mua");
                closeThongBao();
                return;
            }

            const goi = selectedNgay === 30 ? dataGoiThang[selectedPlan] : dataGoiNam[selectedPlan];
            if (!goi || !goi[0]) {
                Alert.alert("Thông báo", "Gói chưa có dữ liệu");
                closeThongBao();
                return;
            }

            // Hiển thị loading
            setFormThongBao(prev => ({
                ...prev,
                title: 'Đang xử lý...',
                message: 'Vui lòng đợi',
                showButton: false,
                soNgayOptions: [],
            }));

            const fetchApiXuLyGoiTV = await managerServices.XuLyChiTietMuaGoiTVUser(
                goi[0]?.luaChonGoiTVId || "",
                dataUser.id
            );

            const updatedUser = await authServices.getUserById(dataUser.id);
            setDataUser(updatedUser || {});

            const updatedCTGoiTVUser = await managerServices.GetChiTietGoiTVByUser(userId);
            setDataCTGoiTVUser(updatedCTGoiTVUser || {});

            if (fetchApiXuLyGoiTV?.status === true) {
                setFormThongBao({
                    show: true,
                    type: 'success',
                    title: `Bạn đã mua gói ${goi[0]?.goiThanhVien?.tenGoiTV || ""} thành công.`,
                    message: `Cảm ơn bạn đã mua gói với số tiền ${formatVND(goi[0]?.giaGoiTV || "")}. Tài khoản bạn còn ${formatVND(Number(updatedUser?.soDuTaiKhoan || 0))}`,
                    showButton: false,
                    soNgayOptions: [],
                    btnLabel: '',
                    onBTNClick: null,
                });
            } else {
                setFormThongBao({
                    show: true,
                    type: 'fail',
                    title: `Bạn đã mua gói ${goi[0]?.goiThanhVien?.tenGoiTV || ""} thất bại.`,
                    message: `${fetchApiXuLyGoiTV?.msg || 'Có lỗi xảy ra'}. Tài khoản bạn còn ${formatVND(Number(updatedUser?.soDuTaiKhoan || 0))}`,
                    showButton: false,
                    soNgayOptions: [],
                    btnLabel: '',
                    onBTNClick: null,
                });
            }
        } catch (error) {
            console.log("Lỗi khi mua gói:", error);
            setFormThongBao({
                show: true,
                type: 'fail',
                title: 'Lỗi',
                message: 'Có lỗi xảy ra khi mua gói. Vui lòng thử lại.',
                showButton: false,
                soNgayOptions: [],
                btnLabel: '',
                onBTNClick: null,
            });
        }

        soNgayMuaGoiRef.current = null;
    }, [selectedPlan, dataGoiThang, dataGoiNam, dataUser.id, userId, closeThongBao]);

    const handleChonSoNgay = useCallback((soNgay) => {
        console.log('Selected so ngay:', soNgay);
        soNgayMuaGoiRef.current = soNgay;
    }, []);

    // Hiển thị loading nếu đang lấy userId
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                <Text style={{ color: 'white' }}>Đang tải...</Text>
            </View>
        );
    }

    // Hiển thị thông báo nếu không có userId
    if (!userId) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    Không thể lấy thông tin người dùng.{'\n'}
                    Vui lòng đăng nhập lại.
                </Text>
                <TouchableOpacity
                    style={{ marginTop: 20, padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ color: 'white' }}>Trở về</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>GÓI THÀNH VIÊN</Text>

                        <View style={styles.userInfo}>
                            <View style={styles.userInfoItem}>
                                <Text style={styles.userName}>
                                    Tên người dùng: <Text style={styles.userNameStrong}>{dataUser?.userName || 'N/A'}</Text>
                                </Text>
                            </View>
                            <View style={styles.userInfoItem}>
                                <Text style={styles.balance}>
                                    Số dư tài khoản: <Text style={styles.balanceStrong}>{formatVND(Number(dataUser?.soDuTaiKhoan || 0))}</Text>
                                </Text>
                            </View>
                            <View style={styles.userInfoItem}>
                                <Text style={styles.currentPlan}>
                                    Loại gói hiện tại:{' '}
                                    <Text style={styles.currentPlanStrong}>
                                        {dataCTGoiTVUser?.status ? dataCTGoiTVUser?.goiThanhVien?.tenGoiTV : "Chưa có gói"}{' '}
                                        {dataCTGoiTVUser?.status ? `${dataCTGoiTVUser?.luaChonGoiTV?.thoiGianSuDung} ngày` : ""}
                                    </Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.userInfo}>
                            <View style={styles.userInfoItem}>
                                <Text style={styles.userName}>
                                    Thời gian bắt đầu: <Text style={styles.userNameStrong}>{formatDate(dataCTGoiTVUser?.ngayBatDau)}</Text>
                                </Text>
                            </View>
                            <View style={styles.userInfoItem}>
                                <Text style={styles.userName}>
                                    Thời gian kết thúc: <Text style={styles.userNameStrong}>{formatDate(dataCTGoiTVUser?.ngayKetThuc)}</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.plans}>
                            {dataListGoi.map((goi, index) => (
                                <Plan
                                    key={goi.goiTVId}
                                    data={goi}
                                    color={colorSchemes[index % colorSchemes.length]}
                                    selectedPlanId={selectedPlan}
                                    onSelect={handleSelect}
                                    deXuat={goi.tenGoiTV?.toLowerCase().includes('vip')}
                                    onDataGoiThang={(data) =>
                                        setDataGoiThang(prev => ({ ...prev, [goi.goiTVId]: data }))
                                    }
                                    onDataGoiNam={(data) =>
                                        setDataGoiNam(prev => ({ ...prev, [goi.goiTVId]: data }))
                                    }
                                >
                                    {goi.tenGoiTV}
                                </Plan>
                            ))}
                        </View>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.backBtn}
                                onPress={() => navigation.goBack()}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.backBtnText}>Trở về</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.buyBtn, isProcessing && { opacity: 0.5 }]}
                                onPress={handleThongBao}
                                activeOpacity={0.7}
                                disabled={isProcessing}
                            >
                                <Text style={styles.buyBtnText}>
                                    {isProcessing ? 'Đang xử lý...' : 'Mua'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Simplified ThongBao rendering */}
                    <ThongBao
                        show={formThongBao.show}
                        type={formThongBao.type}
                        title={formThongBao.title}
                        message={formThongBao.message}
                        soNgayOptions={formThongBao.soNgayOptions}
                        onChonSoNgay={handleChonSoNgay}
                        onBTNClick={formThongBao.onBTNClick}
                        btnLabel={formThongBao.btnLabel}
                        showButton={formThongBao.showButton}
                        onclose={closeThongBao}
                    />
                </View>
            </LoginBody>
        </>
    );
}