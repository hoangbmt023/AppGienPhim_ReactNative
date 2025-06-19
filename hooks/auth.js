import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode";

// Lấy token
export async function getToken() {
    return await AsyncStorage.getItem('token');
}

// Dịch token
export async function decodeToken() {
    const token = await getToken();

    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.log("Giải mã token thất bại");
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
