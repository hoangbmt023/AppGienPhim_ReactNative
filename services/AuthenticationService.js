import * as request from '../utils/request.js';

// Đảm bảo handle lỗi đúng cách
const handleError = (error) => {
    console.error('API Error:', error);
    throw error; // Hoặc trả về thông báo lỗi thân thiện
};

// API Đăng ký
export const register = async (userData) => {
    try {
        const response = await request.post('/User/register', userData);
        return response;  // Thường có token trả về
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
}

// API Đăng nhập
export const login = async (credentials) => {
    try {
        const response = await request.post('/User/login', credentials);
        return response;  // Thường có token trả về
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
}

// API Đăng xuất
export const logout = () => {
    try {
        authHook.deleteToken();  // Sử dụng hàm xóa token đã custom
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
}

// Các API khác cũng tương tự
export const forgotPassword = async (email) => {
    try {
        const response = await request.post('/User/forgot-password', { email });
        return response;
    } catch (error) {
        handleError(error);
    }
}

//app phim
export const verifyOtp = async (email, otp) => {
    try {
        const response = await request.post('/User/verify-otp', { email, otp });
        return response;
    } catch (error) {
        handleError(error); // hàm xử lý lỗi bạn đã có
    }
};

export const resetPassword = async (token, email, newPassword) => {
    try {
        const response = await request.post('/User/reset-password', { token, email, newPassword });
        return response;
    } catch (error) {
        handleError(error);
    }
}

export const changePassword = async (userId, currentPassword, newPassword) => {
    try {
        const response = await request.post('/User/change-password', { userId, currentPassword, newPassword });
        return response;
    } catch (error) {
        handleError(error);
    }
}

export const GetUserById = async (userId) => {
    try {
        const response = await request.get(`/User/${userId}`);
        return response;
    } catch (error) {
        handleError(error);
    }
}

//update user info
export const UpdateUserInfo = async (formData) => {
    try {
        const res = await request.put('/User/UserInfoUpdate', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Lịch sử giao dịch người dùng
export const fetchLichSuGiaoDichs = async (nguoiDungId, page, limit) => {
    try {
        const response = await request.get(`/User/LichSuGiaoDich/${nguoiDungId}`, {
            params: { page, limit },
        });

        return response;  // <-- Đây là điểm quan trọng

    } catch (error) {
        console.error("Lỗi khi tải lịch sử giao dịch:", error);
        return {
            status: false,
            data: [],
            pagination: null,
            msg: error.message || 'Lỗi không xác định'
        };
    }
};