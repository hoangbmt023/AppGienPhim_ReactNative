import React, { useState } from 'react';
import LoginContainer from '../../components/Login-container/LoginContainer';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import Redirect from '../../components/Login-container/Redirect';
import RecaptchaNotice from '../../components/Login-container/RecaptchaNotice';
import styles from './LoginStyle';

import * as AuthenticationService from '../../services/AuthenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage'; // nếu dùng AsyncStorage

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async () => {
        if (!email || !password) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin');
            return;
        }

        setErrorMessage(''); // reset lỗi

        const credentials = {
            usernameOrEmail: email,
            password: password,
            rememberMe: rememberMe,
        };

        try {
            const result = await AuthenticationService.login(credentials);

            if (result.status) {
                // Lưu token, bạn có thể dùng AsyncStorage hoặc custom hook của bạn
                await AsyncStorage.setItem('token', result.token);

                // Điều hướng tới Home
                navigation.navigate('Home');
            } else {
                setErrorMessage(result.msg || 'Đăng nhập thất bại');
            }
        } catch (error) {
            setErrorMessage(error.message || 'Đã có lỗi xảy ra, vui lòng thử lại');
        }
    };

    // Các hàm điều hướng khác giữ nguyên

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleHelp = () => {
        navigation.navigate('Help');
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Đăng Nhập</Text>

                        {/* Input Email */}
                        <FloatingLabelInput
                            label="Tên Đăng Nhập"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        {/* Input Password */}
                        <FloatingLabelInput
                            label="Mật khẩu"
                            value={password}
                            onChangeText={setPassword}
                            isSecure={true}
                        />

                        {/* Hiển thị lỗi nếu có */}
                        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

                        <TouchableOpacity style={styles.loginFormButton} onPress={handleSubmit}>
                            <Text style={styles.loginFormButtonText}>Đăng Nhập</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPasswordLink}>Bạn Quên Mật Khẩu?</Text>
                        </TouchableOpacity>

                        <View style={styles.loginFormHelp}>
                            <View style={styles.loginFormRememberMe}>
                                <Switch
                                    value={rememberMe}
                                    onValueChange={(value) => setRememberMe(value)}
                                    trackColor={{ false: '#737373', true: '#eeaf67' }}
                                />
                                <Text style={styles.rememberLbl}>Nhớ Tôi</Text>
                            </View>
                            <TouchableOpacity onPress={handleHelp}>
                                <Text style={styles.helpLink}>Cần Trợ Giúp?</Text>
                            </TouchableOpacity>
                        </View>

                        <Redirect
                            label="Mới sử dụng GIENPHIM?"
                            linkText="Đăng Ký Ngay."
                            onPress={handleRegister}
                        />
                        <RecaptchaNotice />
                    </View>
                </View>
            </LoginBody>
        </>
    );
}
