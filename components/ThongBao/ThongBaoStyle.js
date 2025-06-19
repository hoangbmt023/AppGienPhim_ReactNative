import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ThongBaoStyles = StyleSheet.create({
    // Modal overlay
    'modal-overlay-tb': {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: 16,
        borderRadius: 20,
        shadowColor: '#CBCDD3',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },

    // Modal base style
    'modal-content-tb': {
        padding: 40,
        borderRadius: 20,
        alignItems: 'center',
        width: width * 0.85,
        backgroundColor: 'white', // fallback if gradient not applied
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
        position: 'relative',
    },

    // Modal types (use with dynamic background wrapper)
    'modal-content-tb-fail': {
        backgroundColor: '#ef8d9c', // fallback for gradient
    },
    'modal-content-tb-success': {
        backgroundColor: '#b0db7d',
    },
    'modal-content-tb-warning': {
        backgroundColor: '#dbbd7d',
    },
    'modal-content-tb-confirm': {
        backgroundColor: '#ff1548',
    },

    // Icon wrapper
    icon: {
        fontSize: 36,
        marginBottom: 20,
        width: 80,
        height: 70,
        paddingBottom: 74,
        borderRadius: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },

    // Text feedback styles
    'text-success': {
        backgroundColor: '#d4edda',
        color: '#28a745',
    },
    'text-danger': {
        backgroundColor: '#f8d7da',
        color: '#dc3545',
    },
    'text-warning': {
        backgroundColor: '#fff3cd',
        color: '#ffc107',
    },

    // Heading and paragraph inside modal
    'modal-content-tb-h3': {
        fontSize: 24,
        color: '#000',
        marginBottom: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    'modal-content-tb-p': {
        fontSize: 16,
        color: '#1d1414',
        marginTop: 5,
        textAlign: 'center',
    },
    'modal-buttons-tb': {
        marginTop: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 14, // Nếu chưa hỗ trợ 'gap', dùng margin
    },

    // Button base
    'btn-tb': {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontWeight: '600',
        fontSize: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
    },

    // Cancel button
    'btn-tb-cancel': {
        backgroundColor: '#e0e0e0',
        color: '#333',
    },

    // Confirm button
    'btn-tb-confirm': {
        backgroundColor: '#dc3545',
        color: 'white',
    },
    'chon-so-ngay': {
        marginTop: 10,
        alignItems: 'center',
    },
    'chon-so-ngay-label': {
        fontSize: 20,
        color: '#dc3545',
    },
    'chon-so-ngay-select': {
        padding: 5,
        height: 40,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        minWidth: 120,
    },

    // .two (áp dụng nếu cần)
    two: {
        right: '12%',
        opacity: 0.5,
    },

    // .face và .face2 (biểu cảm)
    face: {
        position: 'absolute',
        width: '22%',
        height: '22%',
        backgroundColor: '#fcfcfc',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#777',
        zIndex: 2,
    },
    face2: {
        position: 'absolute',
        width: '22%',
        height: '22%',
        backgroundColor: '#fcfcfc',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#777',
        zIndex: 2,
    },

    // .eye, .eye-right
    eye: {
        position: 'absolute',
        width: 5,
        height: 5,
        backgroundColor: '#777',
        borderRadius: 999,
        top: '40%',
        left: '20%',
    },
    'eye-right': {
        position: 'absolute',
        width: 5,
        height: 5,
        backgroundColor: '#777',
        borderRadius: 999,
        top: '40%',
        left: '68%',
    },

    // .mouth (base)
    mouth: {
        position: 'absolute',
        top: '43%',
        left: '41%',
        width: 7,
        height: 7,
        borderRadius: 999,
    },

    // .happy
    happy: {
        borderWidth: 2,
        borderColor: 'transparent #777 #777 transparent',
        transform: [{ rotate: '45deg' }],
    },

    // .sad
    sad: {
        top: '49%',
        borderWidth: 2,
        borderColor: '#777 transparent transparent #777',
        transform: [{ rotate: '45deg' }],
    },

    // .shadow
    shadow: {
        position: 'absolute',
        width: '21%',
        height: '3%',
        opacity: 0.5,
        backgroundColor: '#777',
        top: '28%',
        borderRadius: 999,
        zIndex: 1,
    },
});
