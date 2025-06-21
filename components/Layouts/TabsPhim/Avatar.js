import { Image, View } from 'react-native';
import logo from '../../../assets/img/logo.png'; // Nếu dùng Expo, cần sửa import thành `require(...)`
import styles from './TabsPhimStyles';
function Avatar({ data }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: "https://cdn.animevietsub.red/data/big_banner/2024/11/30/animevsub-02NnXF2KvW.jpeg" }} style={styles.image} />
        <View style={styles.logoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
}

export default Avatar;