import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import Redirect from '../../components/Login-container/Redirect';
import RecaptchaNotice from '../../components/Login-container/RecaptchaNotice';
import styles from './LoginStyle';

export default function Register() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const handleSubmit = () => {
        if (!email || !phoneNumber || !password || !confirmPassword || !agree) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.');
        } else if (password !== confirmPassword) {
            setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
        } else {
            setErrorMessage('');
            console.log('Đăng ký thành công!');
            navigation.navigate('Login');
        }
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Đăng ký tài khoản</Text>

                        {/* Email */}
                        <FloatingLabelInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        {/* Số điện thoại */}
                        <FloatingLabelInput
                            label="Số điện thoại"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />

                        {/* Mật khẩu */}
                        <FloatingLabelInput
                            label="Mật khẩu"
                            value={password}
                            onChangeText={setPassword}
                            isSecure={true}
                        />

                        {/* Xác nhận mật khẩu */}
                        <FloatingLabelInput
                            label="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            isSecure={true}
                        />

                        {/* Hiển thị lỗi nếu có */}
                        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

                        {/* Đồng ý điều khoản */}
                        <View style={styles.agreeContainer}>
                            <Switch
                                value={agree}
                                onValueChange={setAgree}
                                trackColor={{ false: '#737373', true: '#eeaf67' }}
                            />
                            <Text style={styles.agreeText}>
                                Tôi đồng ý với{' '}
                                <Text
                                    style={styles.link}
                                    onPress={() => Linking.openURL('https://www.example.com/terms')}>
                                    Điều khoản sử dụng
                                </Text>{' '}
                                và{' '}
                                <Text
                                    style={styles.link}
                                    onPress={() => Linking.openURL('https://www.example.com/privacy')}>
                                    Chính sách bảo mật
                                </Text>
                            </Text>
                        </View>

                        {/* Nút đăng ký */}
                        <TouchableOpacity style={styles.loginFormButton} onPress={handleSubmit}>
                            <Text style={styles.loginFormButtonText}>Đăng Ký</Text>
                        </TouchableOpacity>

                        <Redirect
                            label="Đã có tài khoản?"
                            linkText="Đăng nhập ngay."
                            onPress={handleLogin}
                        />

                        <RecaptchaNotice />
                    </View>
                </View>
            </LoginBody>
        </>
    );
}
