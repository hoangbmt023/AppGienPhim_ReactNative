import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './HeaderStyles.js'
import logo from '../../assets/img/logo.png'
import Home from '../../pages/Home/Home.js';

function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={Home}>
                <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;
