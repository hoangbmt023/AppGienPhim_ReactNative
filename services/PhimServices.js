// Bạn có thể tạo file `mockPhimServices.js` hoặc tạm mock trực tiếp trong `phimServices`:
export const phim = async (id) => {
    return {
        idPhim: id,
        tenPhim: "Giải Cứu Thế Giới",
        tapCuaPhim: [
            {
                tapPhimId: 1,
                slugTap: "tap-01",
                tenTap: "Tập 1",
                linkChinh: "https://www.example.com/video1",
                linkPhu: "https://www.example.com/backup1"
            },
            {
                tapPhimId: 2,
                slugTap: "tap-02",
                tenTap: "Tập 2",
                linkChinh: "https://www.example.com/video2",
                linkPhu: "https://www.example.com/backup2"
            },
            {
                tapPhimId: 3,
                slugTap: "tap-03",
                tenTap: "Tập 3",
                linkChinh: "https://www.example.com/video3",
                linkPhu: "https://www.example.com/backup3"
            }
        ]
    };
};
