import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import Redirect from '../../components/Login-container/Redirect';
import RecaptchaNotice from '../../components/Login-container/RecaptchaNotice';
import styles from './LoginStyle';

export default function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Hàm submit (hiện tại chưa xử lý API)
    const handleSubmit = () => {
        if (!email) {
            setError('Email không được để trống.');
            setSuccessMessage('');
            return;
        }

        // Reset thông báo
        setError('');
        setSuccessMessage('Yêu cầu đổi mật khẩu đã được gửi.');
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    const handleHelp = () => {
        navigation.navigate('Help');
    };

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Quên / Đổi mật khẩu</Text>

                        {/* Hiển thị lỗi */}
                        {error && <Text style={styles.errorMessage}>{error}</Text>}

                        {/* Hiển thị thông báo thành công */}
                        {successMessage && (
                            <Text style={[styles.errorMessage, { color: 'green' }]}>
                                {successMessage}
                            </Text>
                        )}

                        {/* Ô nhập email */}
                        <FloatingLabelInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        {/* Nút submit */}
                        <TouchableOpacity style={styles.loginFormButton} onPress={handleSubmit}>
                            <Text style={styles.loginFormButtonText}>Lấy / Đổi Mật Khẩu</Text>
                        </TouchableOpacity>

                        {/* Link trợ giúp */}
                        <View style={styles.loginFormHelp}>
                            <TouchableOpacity onPress={handleHelp}>
                                <Text style={styles.helpLink}>Cần Trợ Giúp?</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Link đăng ký */}
                        <Redirect
                            label="Mới sử dụng GIENPHIM?"
                            linkText="Đăng ký ngay."
                            onPress={handleRegister}
                        />

                        {/* reCAPTCHA note */}
                        <RecaptchaNotice />
                    </View>
                </View>
            </LoginBody>
        </>
    );
}
