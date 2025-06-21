import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from '../../pages/Authen/LoginStyle';

const RecaptchaNotice = () => {
    return (
        <View style={styles.loginTerm}>
            <Text style={styles.loginTermText}>
                Trang này được bảo vệ bởi Google reCAPTCHA để đảm bảo bạn không phải là bot.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/recaptcha')}>
                <Text style={styles.loginTermLink}>Tìm hiểu thêm.</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RecaptchaNotice;