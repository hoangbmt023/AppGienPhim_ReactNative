import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16,
        textAlign: 'left',
    },
    userInfoItem: {
        marginBottom: 10,
        marginHorizontal: 15,            // margin-inline: 15px
    },
    userName: {
        fontWeight: '500',
    },
    balance: {
        fontWeight: '500',
    },
    currentPlan: {
        fontWeight: '500',
    },

    userNameStrong: {
        color: '#03fd24',
        backgroundColor: 'rgba(219, 232, 253, 0.4)',
        padding: 7,
        borderRadius: 5,
    },
    balanceStrong: {
        color: 'yellow',
        backgroundColor: 'rgba(68, 202, 255, 0.4)',
        padding: 7,
        borderRadius: 5,
    },
    currentPlanStrong: {
        color: 'red',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 7,
        borderRadius: 5,
    },

    plans: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,               // **Lưu ý: React Native chưa hỗ trợ gap. Có thể dùng margin bên trong item**
        fontFamily: 'Arial',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,              // React Native chưa hỗ trợ gap, dùng margin bên trong buttons
        marginTop: 10,
        paddingRight: 40,
    },

    backBtn: {
        backgroundColor: 'rgb(101, 109, 117)',
        borderWidth: 1,
        borderColor: 'rgb(101, 109, 117)',
        paddingVertical: 11,
        paddingHorizontal: 30,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 14,
        // cursor: 'pointer' -> không có trên RN
    },

    buyBtn: {
        backgroundColor: '#f23144',
        color: 'white',
        borderWidth: 1,
        borderColor: '#f23144',
        paddingVertical: 11,
        paddingHorizontal: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
    },

    // Hover effects không có trong React Native
});
