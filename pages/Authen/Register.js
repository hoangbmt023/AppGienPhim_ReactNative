import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import Redirect from '../../components/Login-container/Redirect';
import RecaptchaNotice from '../../components/Login-container/RecaptchaNotice';
import styles from './LoginStyle';

import * as AuthenticationService from '../../services/AuthenticationService';

export default function Register() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    // Chuyển thành object errors từng trường
    const [errors, setErrors] = useState({});
    // Lỗi chung từ server hoặc lỗi khác
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const validate = () => {
        const newErrors = {};

        if (!email) newErrors.email = 'Email không được để trống.';
        // Bạn có thể thêm regex validate email nếu muốn
        if (!phoneNumber) newErrors.phoneNumber = 'Số điện thoại không được để trống.';
        if (!password) newErrors.password = 'Mật khẩu không được để trống.';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp.';
        if (!agree) newErrors.agree = 'Bạn cần đồng ý với điều khoản.';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        setErrorMessage(''); // reset lỗi chung

        const userData = {
            email,
            phoneNumber,
            password,
        };

        try {
            const response = await AuthenticationService.register(userData);

            // Giả sử API trả về object { status: true/false, msg: "..." }
            if (response.status) {
                // Đăng ký thành công
                navigation.navigate('Login');
            } else {
                // Hiển thị lỗi từ server
                setErrorMessage(response.msg || 'Đăng ký thất bại');
            }
        } catch (error) {
            setErrorMessage(error.message || 'Đã có lỗi xảy ra, vui lòng thử lại.');
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
                        {errors.email && <Text style={styles.errorMessage}>{errors.email}</Text>}

                        {/* Số điện thoại */}
                        <FloatingLabelInput
                            label="Số điện thoại"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />
                        {errors.phoneNumber && <Text style={styles.errorMessage}>{errors.phoneNumber}</Text>}

                        {/* Mật khẩu */}
                        <FloatingLabelInput
                            label="Mật khẩu"
                            value={password}
                            onChangeText={setPassword}
                            isSecure={true}
                        />
                        {errors.password && <Text style={styles.errorMessage}>{errors.password}</Text>}

                        {/* Xác nhận mật khẩu */}
                        <FloatingLabelInput
                            label="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            isSecure={true}
                        />
                        {errors.confirmPassword && <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>}

                        {/* Lỗi chung */}
                        {errorMessage ? (
                            <Text style={[styles.errorMessage, { textAlign: 'center', marginVertical: 10 }]}>
                                {errorMessage}
                            </Text>
                        ) : null}

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
                                    onPress={() => Linking.openURL('https://policies.google.com/terms?hl=vi')}>
                                    Điều khoản sử dụng
                                </Text>{' '}
                                và{' '}
                                <Text
                                    style={styles.link}
                                    onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=vi')}>
                                    Chính sách bảo mật
                                </Text>
                            </Text>
                        </View>
                        {errors.agree && <Text style={styles.errorMessage}>{errors.agree}</Text>}

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
