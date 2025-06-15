import { Pressable, Text, View } from 'react-native';
import styles from './NoticeStyles.js'
import { useNavigation } from '@react-navigation/native';

function Notice() {
    const navigation = useNavigation();

    return (
        <View style={styles.notice}>
            <Text style={styles.text}>
                🔗 Website luôn cập nhật liên tục các bộ
                <Text onPress={() => navigation.navigate('Home')} style={{ color: 'yellow' }}> Phim Hót </Text>
                 hiện nay, hãy tận hưởng những khoảng khắc xem phim nào.
            </Text>

            <Text style={styles.text}>
                📢 Mời bạn tham gia góp ý
                <Text onPress={() => navigation.navigate('Home')} style={{color:'red'}} > tại đây! </Text>
                 hoặc tham gia Discord
            </Text>
        </View>
    );
}
export default Notice;