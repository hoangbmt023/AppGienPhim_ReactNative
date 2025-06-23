import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    banner: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 350,
    },
    bgImg: {
        width: "100%",
        height: 350,
        borderRadius: 5
    },
    overlayBanner: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    contentBanner: {
        position: "absolute",
        zIndex: 2,
        maxWidth: 700,
        width: "100%",
        height: "100%",
        padding: 16,
    },
    titleBanner: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'white',
    },
    infoBanner: {
        display: "flex",
        gap: 10,
        flexDirection: "row",
        marginVertical: 0,

    },
    tagBanner: {
        color: "white",
        backgroundColor: "green",
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: "auto",
        textAlign: "center",
        borderRadius: 5,
        fontSize: 12,
        fontWeight: "bold"
    },
    thoiLuongBanner: {
        color: "white",
        backgroundColor: "rgb(30, 92, 63)",
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: "auto",
        textAlign: "center",
        borderRadius: 5,
        fontSize: 12,
        fontWeight: "bold"
    },
    ngayPhatHanh: {
        color: "white",
        backgroundColor: "rgb(114, 55, 26)",
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: "auto",
        textAlign: "center",
        borderRadius: 5,
        fontSize: 12,
        fontWeight: "bold"
    },
    studioBanner: {
        marginVertical: 1,
        fontSize: 14,
        color: "rgb(2, 230, 219)",
        fontWeight: "600"
    },

    genresRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        gap: 8, // nếu gap không hoạt động thì dùng marginRight bên từng phần tử
    },

    genresBanner: {
        color: 'white',
        fontSize: 14,
    },

    itemGenresBannerWrapper: {
        marginLeft: 0,
    },

    itemGenresBanner: {
        fontSize: 12,
        paddingHorizontal: 5,
        paddingVertical: 5,
        color: 'white',
        backgroundColor: 'rgb(41, 132, 139)',
        borderRadius: 4,
    },
    moTaBanner:{
        height: "30%"
    },
    moTaBannerText: {
        fontSize: 17,
        color: "white",
        textAlign: 'left',
        marginVertical: 8,
        fontWeight: 400,
    },
    watchBTN: {
        backgroundColor: "red",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 10,
        alignSelf: "flex-start", // nếu không muốn full width
    },

    watchBTNText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    }
})

export default styles;