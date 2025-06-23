import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'; // Thêm Alert và TouchableOpacity
import { useNavigation } from '@react-navigation/native'; // Thêm useNavigation

import logouser from '../../../assets/img/myavatar.png'; 
import { formatDateTime, formatVND } from '../../../utils/Format';

function ProfileSidebar({dataU}) {
    const navigation = useNavigation();

    return (
        <View style={styles.sidebar}>
            <TouchableOpacity onPress={() => Alert.alert("Thông báo", "Ảnh đại diện được nhấn")}>
                <Image
                    style={styles.avatar}
                    source={dataU?.avatarND ? { uri: dataU.avatarND } : logouser}
                    onError={(e) => console.log('Lỗi tải ảnh avatar:', e.nativeEvent.error)} // Log lỗi tải ảnh
                />
            </TouchableOpacity>
            <Text style={styles.username}>{dataU?.nameND ? dataU.nameND : "Chưa có tên"}</Text>
            <Text style={styles.accountBalance}>Số dư: {dataU ? formatVND(dataU.soDuTaiKhoan) : "Đang tải..."}</Text> {/* Sửa thành số dư tài khoản nếu formatVND của bạn có */}
            <Text style={styles.joinDate}>Tham gia: {dataU?.thoiGianTao ? formatDateTime(dataU.thoiGianTao) : "Chưa rõ"}</Text>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate("Account")}
            >
                <Text style={styles.logoutButtonText}>Trở Về</Text>
            </TouchableOpacity>
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
        backgroundColor: '#555', // Màu nền cho avatar khi chưa tải được ảnh
    },
    username: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    accountBalance: {
        color: '#0f0', // Màu xanh lá cây cho số dư
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