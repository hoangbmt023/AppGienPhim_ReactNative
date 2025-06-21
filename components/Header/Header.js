import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './HeaderStyles.js'
import logo from '../../assets/img/logo.png'
import Home from '../../pages/Home/Home.js';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();

    const HandlePress = () => {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={HandlePress}>
                <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;
