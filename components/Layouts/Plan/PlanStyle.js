import { StyleSheet } from 'react-native';

const PlanStyle = StyleSheet.create({
    plan: {
        borderWidth: 0.5,
        borderColor: '#000000',
        borderRadius: 12,
        padding: 20,
        width: 260,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        textAlign: 'center',
        backgroundColor: '#fff',
        position: 'relative',
        fontFamily: 'Roboto',
    },

    // Màu nền theo gói
    red: {
        backgroundColor: '#2F1010',
    },
    green: {
        backgroundColor: '#10290E',
    },
    yellow: {
        backgroundColor: '#312C15',
    },
    blue: {
        backgroundColor: 'blue',
    },

    // Border khi được đề xuất (recommended)
    recommendedGreen: {
        borderWidth: 3.5,
        borderColor: '#14be41',
    },
    recommendedYellow: {
        borderWidth: 3.5,
        borderColor: '#b7af13',
    },
    recommendedRed: {
        borderWidth: 3.5,
        borderColor: '#b71313',
    },

    label: {
        position: 'absolute',
        top: -12,
        left: '50%',
        transform: [{ translateX: -130 }], // 50% của width (260px)
        backgroundColor: '#34a853',
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        fontSize: 12,
        fontFamily: 'Roboto',
        zIndex: 1,
    },

    title: {
        marginVertical: 10,
        fontWeight: 'bold',
    },

    titleGreen: {
        color: 'rgb(0, 190, 0)',
    },
    titleYellow: {
        color: 'rgb(190, 180, 0)',
    },
    titleRed: {
        color: 'rgb(190, 0, 0)',
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#202124',
    },

    monthly: {
        color: '#ff000d',
        fontWeight: 'bold',
    },

    yearly: {
        fontSize: 14,
        color: '#cad3db',
        marginTop: 5,
    },

    highlight: {
        color: '#ff000d',
        fontWeight: 'bold',
    },

    planInfo: {
        textAlign: 'left',
        marginTop: 15,
    },

    listItem: {
        marginVertical: 8,
        paddingLeft: 20,
        color: '#cad3db',
        position: 'relative',
    },

    listItemStar: {
        position: 'absolute',
        left: 0,
        top: 0,
        color: '#fbbc05',
    },
});

export default PlanStyle;
