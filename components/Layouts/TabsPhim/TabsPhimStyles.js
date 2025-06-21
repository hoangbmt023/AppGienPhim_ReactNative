import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 2,
    },
    tabs: {
        flexDirection: 'row',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 8,
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: 'yellow',
    },
    tabText: {
        color: 'white',
        fontSize: 16,
    },
    content: {
        paddingVertical: 10,
    },
    wrapper: {
        maxWidth: '90%',
        aspectRatio: 16 / 9,
        alignSelf: 'center',
        alignItems: "flex-start"
    },
    wrapperTrailer: {
        maxWidth: '90%',
        height: 200,
        aspectRatio: 16 / 9,
        alignSelf: 'center',
        alignItems: "center"
    },
    avatarContainer: {
        width: '300',
        height: '200',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    logoWrapper: {
        position: 'absolute',
        bottom: 0,
        right: 6,
        width: 80,
        height: 40,
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
    },
    card: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    avatar: {
        backgroundColor: '#555',
        padding: 20,
        borderRadius: 30,
    },
    name: {
        marginTop: 5,
        color: 'white',
    },
    tag: {
        backgroundColor: 'gray',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        fontSize: 12,
    },
    tagHD: {
        backgroundColor: 'red'
    },
    tagPG: {
        backgroundColor: 'orange'
    },
    genres: {
        color: '#00d4ff'
    },
    country: {
        color: 'lightgreen'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
    },

    webview: {
        width: 300,
        height: 200,
        borderRadius:200,
    },
});

export default styles;
