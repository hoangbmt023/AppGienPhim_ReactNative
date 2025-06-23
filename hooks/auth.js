import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


// Lấy token
export async function getToken() {
    const token = await AsyncStorage.getItem('token');
    console.log("✅ Token lưu trong AsyncStorage:");
    return token;
}

// Dịch token
export async function decodeToken() {
    const token = await AsyncStorage.getItem('token');
    
    if (!token || typeof token !== 'string' || !token.includes(".")) {
        console.log("❌ Token không hợp lệ hoặc thiếu:", token);
        return null;
    }

    try {
        const decoded = jwtDecode(token);
        console.log("✅ Token giải mã thành công:");
        return decoded;
    } catch (error) {
        console.log("❌ Giải mã token thất bại:", error.message);
        return null;
    }
}

// Lấy userId từ token
export async function getUserIdFromToken() {
    const decode = await decodeToken();
    return decode?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
}

// Lấy role từ token
export async function getRolesUserFromToken() {
    const decode = await decodeToken();
    return decode?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
}

// Xóa token khi logout
export async function deleteToken() {
    await AsyncStorage.removeItem('token');
}
