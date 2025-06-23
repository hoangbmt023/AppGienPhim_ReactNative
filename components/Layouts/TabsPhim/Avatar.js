import { Image, View } from 'react-native';
import logo from '../../../assets/img/logo.png'; // Nếu dùng Expo, cần sửa import thành `require(...)`
import styles from './TabsPhimStyles';
function Avatar({ data }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: data.avatarP }} style={styles.image} />
        <View style={styles.logoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
}

export default Avatar;