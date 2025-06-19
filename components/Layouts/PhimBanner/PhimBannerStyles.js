import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    bannerPhim: {
        position: 'relative',
        paddingVertical: 20,
        minHeight: 600,  
        borderRadius: 5,
        marginHorizontal: 2,
        marginBottom: 10,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    bannerImage:{
        position: 'absolute',
        width: "100%",
        height: "100%",
        borderRadius: 5
    },
    backgroundOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '110%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
    },
    containerPhim: {
        position: 'relative',
        flexDirection: 'column',
        padding: 30,
        zIndex: 2
    },
    PhimInfoBanner: {
        flexDirection: 'column',      // chuyển layout từ hàng sang cột
        alignItems: 'center',         // căn giữa ngang
        justifyContent: 'center',     // căn giữa dọc nếu cần
        gap: 10
    },
    phimPoster: {
        position: 'relative',
        alignItems: "center"
        
    },
    imagePoster: {
        width: 180,
        height: 260,
        borderRadius: 15
    },
    phimWatch: {
        marginTop: 20,                 // ✅ Tạo khoảng cách dưới poster
        backgroundColor: 'red',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        opacity: 0.8,
        alignItems: 'center'
    },
    phimWathText:{
        color: "white",
        fontSize: 14,
        fontWeight: "700"
    },
    phimDetails: {
        marginTop: 20,
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'flex-start'
    },  
    phimTitle: {
        fontSize: 36,
        color: 'lawngreen',
        fontWeight: 'bold'
    },
    phimSubTitle: {
        color: '#ccc',
        fontSize: 18,
        marginBottom: 6
    },
    phimDescription: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
        marginTop: 10
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 8
    },
    ratingScore: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'yellow'
    },
    starts: {
        color: 'gold'
    },
    reviews: {
        color: 'white',
        fontSize: 14
    },
    phimStats: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 8,

    },
    thoiLuongP: {
        color: '#ddd',
        marginRight: 15,
        fontSize: 16,
        marginTop: 6,
        
    },
    ngayPhatHanh: {
        color: '#ddd',
        marginRight: 15,
        fontSize: 16,
        marginTop: 6,
    },
    luotXem: {
        color: '#ddd',
        fontSize: 16,
        marginTop: 6,
    }
});

export default styles;