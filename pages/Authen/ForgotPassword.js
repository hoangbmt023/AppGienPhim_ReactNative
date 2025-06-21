import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import Redirect from '../../components/Login-container/Redirect';
import RecaptchaNotice from '../../components/Login-container/RecaptchaNotice';
import * as AuthenticationService from '../../services/AuthenticationService';
import styles from './LoginStyle';

export default function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async () => {
        if (!email) {
            setError('Email không được để trống.');
            setSuccessMessage('');
            return;
        }

        setError('');
        setSuccessMessage('');

        try {
            const response = await AuthenticationService.forgotPassword(email);
            setSuccessMessage(response.message || 'Yêu cầu đổi mật khẩu đã được gửi.');
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
        }
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

                        {error && <Text style={styles.errorMessage}>{error}</Text>}

                        {successMessage && (
                            <Text style={[styles.errorMessage, { color: 'green' }]}>
                                {successMessage}
                            </Text>
                        )}

                        <FloatingLabelInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        <TouchableOpacity style={styles.loginFormButton} onPress={handleSubmit}>
                            <Text style={styles.loginFormButtonText}>Lấy / Đổi Mật Khẩu</Text>
                        </TouchableOpacity>

                        <View style={styles.loginFormHelp}>
                            <TouchableOpacity onPress={handleHelp}>
                                <Text style={styles.helpLink}>Cần Trợ Giúp?</Text>
                            </TouchableOpacity>
                        </View>

                        <Redirect
                            label="Mới sử dụng GIENPHIM?"
                            linkText="Đăng ký ngay."
                            onPress={handleRegister}
                        />

                        <RecaptchaNotice />
                    </View>
                </View>
            </LoginBody>
        </>
    );
}
