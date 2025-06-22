import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode"; // Cập nhật import

// Lấy token
export async function getToken() {
    try {
        return await AsyncStorage.getItem('token');
    } catch (error) {
        console.log("Lỗi khi lấy token:", error);
        return null;
    }
}

// Dịch token
export async function decodeToken() {
    try {
        const token = await getToken();

        if (!token || typeof token !== 'string' || !token.includes('.')) {
            console.log("Token không hợp lệ hoặc không tồn tại:", token);
            return null;
        }

        // Sử dụng jwtDecode thay vì jwt_decode
        return jwtDecode(token);
    } catch (error) {
        console.log("Giải mã token thất bại:", error.message);
        return null;
    }
}

// Lấy userId từ token
export async function getUserIdFromToken() {
    try {
        const decode = await decodeToken();
        if (!decode) return null;

        return decode?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || null;
    } catch (error) {
        console.log("Lỗi khi lấy userId từ token:", error);
        return null;
    }
}

// Lấy role từ token
export async function getRolesUserFromToken() {
    try {
        const decode = await decodeToken();
        if (!decode) return null;

        return decode?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
    } catch (error) {
        console.log("Lỗi khi lấy role từ token:", error);
        return null;
    }
}

// Xóa token khi logout
export async function deleteToken() {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.log("Lỗi khi xóa token:", error);
    }
}