import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import styles from './LoginStyle';

// Import service gọi API
import * as AuthenticationService from '../../services/AuthenticationService';

export default function ResetPassword() {
    const navigation = useNavigation();
    const route = useRoute();

    // Lấy token và email từ params deep link
    const { token, email } = route.params || {};

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token || !email) {
            setError('Thông tin không hợp lệ hoặc thiếu.');
        }
    }, [token, email]);

    const handleSubmit = async () => {
        setError('');
        setSuccessMessage('');

        if (!newPassword || !confirmPassword) {
            setError('Mật khẩu không được để trống.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Mật khẩu mới và xác nhận không trùng khớp.');
            return;
        }

        if (!token || !email) {
            setError('Thông tin không hợp lệ hoặc thiếu.');
            return;
        }

        setLoading(true);

        try {
            // Gọi API reset password thực tế
            const response = await AuthenticationService.resetPassword(token, email, newPassword);

            setSuccessMessage(response.message || 'Mật khẩu đã được thay đổi thành công.');

            setTimeout(() => navigation.navigate('Login'), 2000);
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Đổi lại mật khẩu</Text>

                        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
                        {successMessage ? (
                            <Text style={[styles.errorMessage, { color: 'green' }]}>{successMessage}</Text>
                        ) : null}

                        <FloatingLabelInput
                            label="Mật khẩu mới"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                        />

                        <FloatingLabelInput
                            label="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity
                            style={styles.loginFormButton}
                            onPress={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.loginFormButtonText}>Thay đổi mật khẩu</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </LoginBody>
        </>
    );
}
