import { StyleSheet, Dimensions } from 'react-native';

// Lấy kích thước màn hình
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    loginBody: {
        paddingBottom: 30,
        minHeight: 100,
    },
    loginFormContainer: {
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 0,
        width: '100%',
    },
    loginTitleText: {
        fontSize: width * 0.08,
        fontWeight: 'bolder',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },
    loginTitleText: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    formGroup: {
        position: 'relative',
        marginBottom: 20,
        alignItems: 'center',
    },
    loginFormInput: {
        width: '100%',
        height: 55,
        fontSize: 16,
        backgroundColor: '#333333',
        color: '#fff',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
        paddingHorizontal: 12,
    },
    floatingLabel: {
        position: 'absolute',
        left: 12,
        fontSize: 16,
        color: '#aaa',
        zIndex: 1,
        paddingHorizontal: 4,
    },

    loginFormButton: {
        backgroundColor: '#e50914',
        width: '100%',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 10,
    },
    loginFormButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    forgotPasswordLink: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 15,
    },
    loginFormHelp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        color: '#737373',
    },
    loginFormRememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberLbl: {
        color: '#fff',
        marginLeft: 10,
    },
    helpLink: {
        color: '#737373',
        textDecorationLine: 'none',
        fontSize: 16,
    },
    errorMessage: {
        color: '#ff0000',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
    signupContainer: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signupText: {
        fontSize: 16,
        color: '#737373',
    },
    signupLink: {
        color: '#fff',
        marginLeft: 5,
        textDecorationLine: 'underline',
    },
    agreeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    agreeText: {
        color: '#737373',
        fontSize: 14,
        width: '85%',
        flexWrap: 'wrap',
    },
    link: {
        color: '#eeaf67',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#eeaf67',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupFormOther: {
        marginTop: 20,
    },
    signupFormLogin: {
        fontSize: 16,
        color: '#737373',
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signupFormLoginText: {
        fontSize: 16,
        color: '#737373',
    },
    signupFormLoginLink: {
        color: '#fff',
        marginLeft: 5,
        textDecorationLine: 'underline', // React Native doesn't support textDecoration: none, so this is an alternative
    },
    loginTerm: {
        color: '#737373',
        fontSize: 16,
        marginTop: 16,
    },
    loginTermText: {
        color: '#737373',
        fontSize: 14,
    },
    loginTermLink: {
        color: '#0071eb',
        marginLeft: 5,
        textDecorationLine: 'underline', // React Native doesn't support textDecoration: none, so this is an alternative
    },
    faqBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
    },
    faqQuestion: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 6,
    },

    faqAnswer: {
        fontSize: 15,
        color: '#fff',
        lineHeight: 20,
    },

    link: {
        color: '#FFA725',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    backLinkContainer: {
        marginTop: 25,
        alignItems: 'flex-end',
    },

    backLink: {
        color: '#FFA725',
        fontSize: 16,
    },
});
