import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

import LoginContainer from '../../components/Login-container/LoginContainer';
import Plan from '../../components/Layouts/Plan/Plan';
import ThongBao from '../../components/Layouts/ThongBao/ThongBao';
import LoginBody from '../../components/Login-container/LoginBody';

import * as authHooks from '../../hooks/auth';
import * as authServices from '../../services/AuthenticationService';
import * as managerServices from '../../services/ManagerService';
import { formatDate, formatVND } from '../../utils/Format';

import { styles } from './GoiThanhVienStyle';  // file styles bên trên

export default function GoiThanhVien({ navigation }) {
    const [dataUser, setDataUser] = useState({});
    const [dataListGoi, setDataListGoi] = useState([]);
    const [dataCTGoiTVUser, setDataCTGoiTVUser] = useState({});
    const [dataGoiThang, setDataGoiThang] = useState({});
    const [dataGoiNam, setDataGoiNam] = useState({});
    const [selectedPlan, setSelectedPlan] = useState(null);
    const colorSchemes = ['green', 'yellow', 'red', 'blue'];
    const [formThongBao, setFormThongBao] = useState({
        show: false,
        type: null,
        title: '',
        message: '',
        soNgayOptions: null,
        btnLabel: '',
        onBTNClick: null,
        showButton: false,
        onclose: null,
    });

    const soNgayMuaGoiRef = useRef(null);

    const userId = authHooks.getUserIdFromToken();

    useEffect(() => {
        if (!userId) return;

        async function fetchApiUser() {
            const resultU = await authServices.getUserById(userId);
            setDataUser(resultU);
            const resultLGTV = await managerServices.getListGoiThanhVien();
            setDataListGoi(resultLGTV.data);
            const resultCTGoiTVUser = await managerServices.GetChiTietGoiTVByUser(userId);
            setDataCTGoiTVUser(resultCTGoiTVUser);
        }

        fetchApiUser();
    }, [userId]);

    const handleSelect = (planId) => {
        setSelectedPlan(planId);
        soNgayMuaGoiRef.current = null;
    };

    const handleThongBao = () => {
        if (!selectedPlan) {
            Alert.alert("Thông báo", "Vui lòng chọn gói trước khi mua");
            return;
        }

        setFormThongBao({
            show: true,
            type: 'warning',
            title: `Hãy chọn số ngày bạn muốn mua cho gói "${dataListGoi.find(g => g.goiTVId === selectedPlan)?.tenGoiTV || ''}"`,
            message: 'Các gói đều có giá ưu đãi đặc biệt',
            soNgayOptions: [30, 365],
            btnLabel: 'Mua',
            onBTNClick: handleCheckGoiDaMua,
            showButton: true,
        });
    };

    const handleCheckGoiDaMua = () => {
        const selectedNgay = soNgayMuaGoiRef.current;
        const goi = selectedNgay === 30 ? dataGoiThang[selectedPlan] : dataGoiNam[selectedPlan];

        if (dataCTGoiTVUser?.luaChonGoiTV?.luaChonGoiTVId !== goi?.[0]?.luaChonGoiTVId && dataCTGoiTVUser.status === true) {
            setFormThongBao({
                show: true,
                type: 'warning',
                title: `Bạn đã có gói ${dataCTGoiTVUser?.goiThanhVien?.tenGoiTV}.`,
                message: `Bạn có muốn mua gói ${goi?.[0]?.goiThanhVien?.tenGoiTV} này thay gói ${dataCTGoiTVUser?.goiThanhVien?.tenGoiTV} kia không `,
                btnLabel: 'Vẫn mua',
                onBTNClick: HandleMuaGoi,
                showButton: true,
            });
        } else {
            HandleMuaGoi();
        }
    };

    const HandleMuaGoi = async () => {
        const selectedNgay = soNgayMuaGoiRef.current;

        if (!selectedPlan || !selectedNgay) {
            Alert.alert("Thông báo", "Bạn chưa chọn gói hoặc số ngày mua");
            return;
        }

        const goi = selectedNgay === 30 ? dataGoiThang[selectedPlan] : dataGoiNam[selectedPlan];
        if (!goi || !goi[0]) {
            Alert.alert("Thông báo", "Gói chưa có dữ liệu");
            return;
        }

        const fetchApiXuLyGoiTV = await managerServices.XuLyChiTietMuaGoiTVUser(goi[0]?.luaChonGoiTVId || "", dataUser.id);
        const updatedUser = await authServices.getUserById(dataUser.id);
        setDataUser(updatedUser);
        const updatrCTGoiTVUser = await managerServices.GetChiTietGoiTVByUser(userId);
        setDataCTGoiTVUser(updatrCTGoiTVUser);

        if (fetchApiXuLyGoiTV.status === true) {
            setFormThongBao({
                show: true,
                type: 'success',
                title: `Bạn đã mua gói ${goi[0].goiThanhVien.tenGoiTV || ""} thành công.`,
                message: `Cảm ơn bạn đã mua gói với số tiền ${formatVND(goi[0].giaGoiTV || "")} .Tài khoản bạn còn ${formatVND(Number(updatedUser.soDuTaiKhoan))} `,
                buttons: null,
            });
        } else {
            setFormThongBao({
                show: true,
                type: 'fail',
                title: `Bạn đã mua gói ${goi[0].goiThanhVien.tenGoiTV || ""} thất bại.`,
                message: `${fetchApiXuLyGoiTV.msg} .Tài khoản bạn còn ${formatVND(Number(updatedUser.soDuTaiKhoan))} `,
                buttons: null,
            });
        }
        soNgayMuaGoiRef.current = null;
    };

    const handleChonSoNgay = (soNgay) => {
        soNgayMuaGoiRef.current = soNgay;
    };

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <ScrollView style={{ backgroundColor: '#000' }} contentContainerStyle={{ padding: 20 }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 28, color: 'white', marginBottom: 20 }}>
                            GÓI THÀNH VIÊN
                        </Text>

                        <View style={styles.userInfo}>
                            <View style={styles.userInfoDiv}>
                                <Text style={styles.userName}>
                                    Tên người dùng: <Text style={styles.userNameStrong}>{dataUser.userName}</Text>
                                </Text>
                            </View>
                            <View style={styles.userInfoDiv}>
                                <Text style={styles.balance}>
                                    Số dư tài khoản: <Text style={styles.balanceStrong}>{formatVND(Number(dataUser.soDuTaiKhoan))}</Text>
                                </Text>
                            </View>
                            <View style={styles.userInfoDiv}>
                                <Text style={styles.currentPlan}>
                                    Loại gói hiện tại:{' '}
                                    <Text style={styles.currentPlanStrong}>
                                        {dataCTGoiTVUser.status ? dataCTGoiTVUser?.goiThanhVien?.tenGoiTV : "Chưa có gói"}{' '}
                                        {dataCTGoiTVUser.status ? dataCTGoiTVUser?.luaChonGoiTV?.thoiGianSuDung : ""} Ngày
                                    </Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.userInfo}>
                            <View style={styles.userInfoDiv}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                    Thời gian bắt đầu:{' '}
                                    <Text style={styles.userNameStrong}>{formatDate(dataCTGoiTVUser?.ngayBatDau)}</Text>
                                </Text>
                            </View>
                            <View style={styles.userInfoDiv}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                    Thời gian kết thúc:{' '}
                                    <Text style={styles.userNameStrong}>{formatDate(dataCTGoiTVUser?.ngayKetThuc)}</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.plans}>
                            {dataListGoi.map((goi, index) => (
                                <Plan
                                    key={goi.goiTVId}
                                    dataGoi={goi}
                                    color={colorSchemes[index % colorSchemes.length]}
                                    onSelect={handleSelect}
                                    selectedPlan={selectedPlan}
                                    setDataGoiThang={setDataGoiThang}
                                    setDataGoiNam={setDataGoiNam}
                                />
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
                                style={styles.buyBtn}
                                onPress={handleThongBao}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.buyBtnText}>Mua</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {formThongBao.show && (
                        <ThongBao
                            show={formThongBao.show}
                            type={formThongBao.type}
                            title={formThongBao.title}
                            message={formThongBao.message}
                            soNgayOptions={formThongBao.soNgayOptions}
                            onSoNgayChange={handleChonSoNgay}
                            onBTNClick={formThongBao.onBTNClick}
                            btnLabel={formThongBao.btnLabel}
                            showButton={formThongBao.showButton}
                            onclose={() => setFormThongBao({ ...formThongBao, show: false })}
                        />
                    )}
                </ScrollView>
            </LoginBody>
        </>
    );
}
