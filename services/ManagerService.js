import * as request from '../utils/request.js';

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