
import { StyleSheet, Dimensions } from "react-native";
const { width, height: screenHeight } = Dimensions.get('window');
const videoHeight = screenHeight * 0.3; // hoặc 0.35 hay 0.4 tùy bạn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    videoContainer: {
        width: '100%',
        height: videoHeight,  // lấy từ const phía trên
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    webview: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    warning: {
        color: 'yellow',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtext: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
    },
    support: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 15,
    },
    highlight: {
        color: 'red',
        fontWeight: 'bold',
    },
    playButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playIcon: {
        width: 0,
        height: 0,
        borderLeftWidth: 15,
        borderLeftColor: 'red',
        borderTopWidth: 10,
        borderTopColor: 'transparent',
        borderBottomWidth: 10,
        borderBottomColor: 'transparent',
    },
    tapContainer: {
        backgroundColor: '#1c1c1c',
        padding: 20,
        borderRadius: 8,
        margin: 20,
    },
    infoTap: {
        marginBottom: 15,
    },
    tapTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    tapList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    tap: {
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
    },
    tapText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    activeTap: {
        backgroundColor: 'red',
    },
    panel: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#222',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 6,
        marginHorizontal: 5,
    },
    active: {
        backgroundColor: 'red',
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default styles;