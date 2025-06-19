import dayjs from "dayjs";

export function formatVND(value) {
    return value.toLocaleString('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,  // lần min xuất hiện 0 sau phẩy
        maximumFractionDigits: 0,    //số lần min xuất hiện 0 sau phẩy
    }) + ' VNĐ';
}

export function formatDateTime(value) {
    return dayjs(value).format('DD/MM/YYYY HH:mm:ss');
}

export function formatYear(value) {
    return dayjs(value).format('YYYY');
}

export function formatDate(value) {
    return dayjs(value).format('DD/MM/YYYY');
}