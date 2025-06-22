import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    userInfo: {
        alignItems: 'flex-start',
        marginVertical: 10,
    },

    userInfoItem: {
        marginBottom: 10,
        paddingLeft: 4,
        maxWidth: width * 0.95,
    },

    userName: {
        fontWeight: '500',
        color: 'white',
    },

    balance: {
        fontWeight: '500',
        color: 'white',
    },

    currentPlan: {
        fontWeight: '500',
        color: 'white',
    },

    userNameStrong: {
        color: '#03fd24',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 6,
        borderRadius: 5,
        fontSize: 14,
    },

    balanceStrong: {
        color: 'yellow',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 6,
        borderRadius: 5,
        fontSize: 14,
    },

    currentPlanStrong: {
        color: 'red',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 6,
        borderRadius: 5,
        fontSize: 14,
    },

    plans: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
    },

    planBox: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 16,
        borderRadius: 12,
        marginVertical: 20,
    },

    priceText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },

    backBtn: {
        backgroundColor: 'rgb(101, 109, 117)',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },

    buyBtn: {
        backgroundColor: '#f23144',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },

    backBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },

    buyBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },

    loginFormContainer: {
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 0,
        width: '100%',
    },

    loginTitle: {
        width: '100%',
    },

    loginTitleText: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
});
