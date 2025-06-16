import { View } from "react-native";
import styles from './HomeStyles.js'
import Notice from "../../components/Layouts/Notice/Notice.js";

function Home() {
    return (
        <View style={styles.containerMain} >
            <Notice />
        </View>
    );
}

export default Home;