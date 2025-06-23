import * as request from '../utils/request.js';
import * as authHooks from '../hooks/auth.js'
export const getListGoiThanhVien = async () => {
    try {
        const res = await request.get('/GoiThanhVien/GetAllGoiThanhVien');
        return res;

    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

export const getAllLuaChonGoiTV = async () => {
    try {
        const res = await request.get('/LuaChonGoiTV/GetAllLuaChonGoiTV');
        return res;

    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

export const GetLuaChonGTVByGoiTVIdAndNgayAsync = async (goiTVId, ngay) => {
    try {
        const res = await request.get('/LuaChonGoiTV/GetLuaChonGoiTVByIdAndNgay', {
            params: {
                goiTVId,
                ngay
            }
        });
        return res;

    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

export const XuLyChiTietMuaGoiTVUser = async (luaChonGoiTVId, userId) => {
    try {
        const res = await request.post('/ChiTietGoiThanhVien/XuLyChiTietMuaGoiTVUser', {
            luaChonGoiTVId,
            userId
        });

        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}


export const CheckXuLyGoiHetHanUser = async (userId) => {
    try {
        const res = await request.get('/ChiTietGoiThanhVien/CheckXuLyGoiTVHetHan', {
            params: {
                userId
            }
        });

        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

export const GetChiTietGoiTVByUser = async (userId) => {
    try {
        const res = await request.get('/ChiTietGoiThanhVien/GetChiTietGoiTVByUser', {
            params: {
                userId
            }
        });

        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Lấy danh sách phim mới
export const GetNewPhim = async (topphim,page,limit) => {
    try {
        const res = await request.get('/Phim/TopPhim/NewPhim', {
            params: {
                topphim,
                page,
                limit
            }
        });
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Lấy phim theo id
export const Phim = async (phimId) => {
    try {
        const res = await request.get(`/Phim/${phimId}`);
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Lấy all phim
export const GetAllPhim = async (page,limit) => {
    try {
        const res = await request.get('/Phim',{
            params:{
                page,
                limit
            }
        });
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Lấy Danh Sách Top Phim Theo Lượt Xem
export const GetTopPhimByLuotXem = async (page,limit) => {
    try {
        const res = await request.get('/Phim/TopPhim',{
            params:{
                page,
                limit
            }
        });
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Add lượt xem phim
export const addLuotXem = async(phimId,nguoiDungId) => {
    try {
        const res = await request.post('/LuotXem/AddLuotXem',{
            phimId,
            nguoiDungId
        });
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

// Gọi api xử lý Lưu lịch sử người dùng xem
export const XuLyLichXuXem = async (phimId,userId,tapPhim) => {
    try {
        const res = await request.post('/LichSuXem/XuLyLichSuXem',{
            phimId,
            userId,
            tapPhim
        });

        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}

//PHẢN HỒI NGƯỜI DÙNG
// Gọi Api xử lý like dislike
export const XuLyLuotLikeDislike = async(phimId,nguoiDungId,luotThichP,luotDislikeP) => {
    try {
        const res = await request.post('/PhanHoiNguoiDung/XuLyLikeDislike',{
            phimId,
            nguoiDungId,
            luotThichP,
            luotDislikeP
        });
        
        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error)
    }
}

// Gọi api để check người dùng đã like, dislike chưa
export const CheckLikeDislikeUser = async (phimId,nguoiDungId) => {
    try {
        const res = await request.get('/PhanHoiNguoiDung/CheckLikeDislikeUser',{
            params: {
                phimId,
                nguoiDungId
            }
        });

        return res;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}


export const LichSuXemUser = async (Userid,page,limit) => {
    try {
        const response = await request.get(`/LichSuXem/LichSuXem`,{
            params: {
                Userid,
                page,
                limit
            }
        });
        return response;
    } catch (error) {
        handleError(error);
    }
}

// api nap tien qua VnPay
export const CreatePaymentVnPay = async (userId, soTien, motaDH) => {
    try {
        const res = await request.post('/Payments/CreateVnPay', {
            userId,
            soTien,
            motaDH,
            kieuDH: "oder"
        });

        return res;
    } catch (error) {
        console.error("Lỗi khi huỷ giao dịch:", error);
    }
}

// Tạo giao dịch MoMo
export const TaoGiaoDichMomo = async (napTienDto, userId) => {
    try {
        const token = authHooks.getToken();
        if (!token) throw new Error("Chưa đăng nhập");

        const response = await request.post('/Payments/CreatePaymentUrl',
            napTienDto,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response;
    } catch (error) {
        // Bổ sung thông tin lỗi
        error.customMessage = "Lỗi khi gọi API MoMo";
        throw error;
    }
};

//Tạo giao dịch vib
export const TaoGiaoDich = async (napTienDto) => {
    try {
        const token = authHook.getToken();

        if (!token) {
            throw new Error("Token không có, người dùng chưa đăng nhập!");
        }

        const response = await request.post('/Payments/TaoGiaoDich', napTienDto, {
            headers: {
                Authorization: `Bearer ${token}`  // Thêm token vào header
            }
        });
        // Kiểm tra response để chắc chắn nó có dữ liệu
        console.log("Response từ API:", response);
        return response;

    } catch (error) {
        console.error("Lỗi khi tạo giao dịch nạp tiền:", error);
        throw error; // Ném lỗi lên để xử lý ở nơi gọi
    }
};

export const searchphim = async (tenp,page,limit) => {
    try {
        const res = await request.get('/Search', {
            params: {
                tenp,
                page,
                limit, 

            }
        });
        return res;

    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    }
}
