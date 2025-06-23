import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import logouser from '../../../assets/img/myavatar.png'; 
import * as authHooks from '../../../hooks/auth';
import * as authServices from '../../../services/AuthenticationService';
import { formatDateTime, formatVND } from '../../../utils/Format';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ProfileSidebar({ dataU }) {
    const [nguoiDung, setNguoiDung] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 👈 trạng thái đăng nhập
    const navigation = useNavigation();

    useEffect(() => {
        setNguoiDung(dataU);
        setIsLoggedIn(!!dataU); // 👈 nếu có dữ liệu thì đang đăng nhập
    }, [dataU]);

    const handleLogout = () => {
        AsyncStorage.removeItem('token'); // hoặc AsyncStorage nếu không phải web
        setNguoiDung(null);
        setIsLoggedIn(false);
        Alert.alert("Thông báo", "Bạn đã đăng xuất.");
    };

    const handleLogin = () => {
        navigation.navigate("Login"); // hoặc tên màn login của bạn
    };

    return (
        <View style={styles.sidebar}>
            <TouchableOpacity onPress={() => Alert.alert("Thông báo", "Ảnh đại diện được nhấn")}>
                <Image
                    style={styles.avatar}
                    source={nguoiDung?.avatarND ? { uri: nguoiDung.avatarND } : logouser}
                    onError={(e) =>
                        console.log('Lỗi tải ảnh avatar:', e.nativeEvent?.error || 'Không xác định')
                    }
                />
            </TouchableOpacity>

            <Text style={styles.username}>
                {nguoiDung?.nameND || "Chưa có tên"}
            </Text>

            {isLoggedIn && (
                <>
                    <Text style={styles.accountBalance}>
                        Số dư: {formatVND(nguoiDung?.soDuTaiKhoan || 0)}
                    </Text>
                    <Text style={styles.joinDate}>
                        Tham gia: {nguoiDung?.thoiGianTao ? formatDateTime(nguoiDung.thoiGianTao) : "Chưa rõ"}
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("InfoAccount")}
                    >
                        <Text style={styles.buttonText}>Hồ sơ người dùng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("History")}
                    >
                        <Text style={styles.buttonText}>Lịch Sử Xem</Text>
                    </TouchableOpacity>
                </>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Contact")}
            >
                <Text style={styles.buttonText}>Liên hệ</Text>
            </TouchableOpacity>

            {isLoggedIn ? (
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}
                >
                    <Text style={styles.logoutButtonText}>Đăng xuất</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.logoutButtonText}>Đăng nhập</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}


export default ProfileSidebar;

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: '#1f1f1f',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
        backgroundColor: '#555',
    },
    username: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    accountBalance: {
        color: '#0f0',
        fontSize: 16,
        marginBottom: 4,
    },
    joinDate: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#555',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: 'darkred',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
