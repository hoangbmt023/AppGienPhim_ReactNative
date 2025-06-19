import { View } from 'react-native';
import { WebView } from 'react-native-webview'; // Nếu dùng Expo: `expo install react-native-webview`
import styles from './TabsPhimStyles';
const data = { traiLerP: "https://www.youtube.com/watch?v=0NiLuo4vxp8"}

function Trailer(/*{ data }*/) {
  return (
    <View style={styles.wrapperTrailer}>
      <WebView
        source={{ uri: data.traiLerP.replace("watch?v=", "embed/") }}
        style={styles.webview}
        allowsFullscreenVideo
      />
    </View>
  );
}
export default Trailer;