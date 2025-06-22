import { StyleSheet } from 'react-native';

const PlanStyle = StyleSheet.create({
    plan: {
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#1a1a1a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff6262',
    },

    monthly: {
        color: '#ff000d',
        fontWeight: 'bold',
    },

    yearly: {
        fontSize: 14,
        color: '#ccc',
    },

    highlight: {
        color: '#ff000d',
        fontWeight: 'bold',
    },

    planInfo: {
        marginTop: 12,
    },

    listItem: {
        marginVertical: 6,
        color: '#ddd',
    },
    listItemStar: {
        color: '#fbbc05',
    },
});

export default PlanStyle;
