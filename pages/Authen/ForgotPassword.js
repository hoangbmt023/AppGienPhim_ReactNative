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

    // Trạng thái bước hiện tại: 'enterEmail' | 'enterOtp'
    const [step, setStep] = useState('enterEmail');

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Bước 1: gửi email lấy OTP
    const handleSubmitEmail = async () => {
        if (!email) {
            setError('Email không được để trống.');
            setSuccessMessage('');
            return;
        }
        setError('');
        setSuccessMessage('');

        try {
            const response = await AuthenticationService.forgotPassword(email);
            setSuccessMessage(response.message || 'Mã OTP đã được gửi vào email.');
            setStep('enterOtp');  // chuyển sang bước nhập OTP
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    // Bước 2: xác thực OTP
    const handleSubmitOtp = async () => {
        if (!otp) {
            setError('Mã OTP không được để trống.');
            setSuccessMessage('');
            return;
        }
        setError('');
        setSuccessMessage('');

        try {
            const response = await AuthenticationService.verifyOtp(email, otp);
            const { token } = response;  // hoặc response.data tùy cách bạn thiết kế service

            if (!token) {
                setError('Token xác thực không tồn tại. Vui lòng thử lại.');
                return;
            }

            // (Tuỳ chọn) Lưu token
            // await AsyncStorage.setItem('authToken', token);

            setSuccessMessage('Xác thực thành công! Vui lòng đặt lại mật khẩu.');
            navigation.navigate('ResetPassword', { email, token });
        } catch (err) {
            setError(err.message || 'Mã OTP không đúng hoặc đã hết hạn.');
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
                        <Text style={styles.loginTitleText}>
                            {step === 'enterEmail' ? 'Quên / Đổi mật khẩu' : 'Nhập mã xác thực'}
                        </Text>

                        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

                        {successMessage ? (
                            <Text style={[styles.errorMessage, { color: 'green' }]}>
                                {successMessage}
                            </Text>
                        ) : null}

                        {step === 'enterEmail' && (
                            <>
                                <FloatingLabelInput
                                    label="Email"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                />
                                <TouchableOpacity
                                    style={styles.loginFormButton}
                                    onPress={handleSubmitEmail}
                                >
                                    <Text style={styles.loginFormButtonText}>Lấy / Đổi Mật Khẩu</Text>
                                </TouchableOpacity>
                            </>
                        )}

                        {step === 'enterOtp' && (
                            <>
                                <FloatingLabelInput
                                    label="Mã OTP"
                                    value={otp}
                                    onChangeText={setOtp}
                                    keyboardType="numeric"
                                />
                                <TouchableOpacity
                                    style={styles.loginFormButton}
                                    onPress={handleSubmitOtp}
                                >
                                    <Text style={styles.loginFormButtonText}>Xác nhận mã OTP</Text>
                                </TouchableOpacity>
                            </>
                        )}

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
