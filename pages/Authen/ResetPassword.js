import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import FloatingLabelInput from '../../components/Login-container/FloatingLabelInput';
import LoginBody from '../../components/Login-container/LoginBody';
import styles from './LoginStyle';

export default function ResetPassword() {
    const navigation = useNavigation();
    const route = useRoute();

    const { token, email } = route.params || {}; // Nhận từ params khi điều hướng từ email
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (!token || !email) {
            setError('Thông tin không hợp lệ hoặc thiếu.');
        }
    }, [token, email]);

    const handleSubmit = () => {
        if (!newPassword || !confirmPassword) {
            setError('Mật khẩu không được để trống.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Mật khẩu mới và xác nhận không trùng khớp.');
            return;
        }

        setError('');
        setSuccessMessage('Mật khẩu đã được thay đổi thành công.');

        // Giả lập delay chuyển về Login
        setTimeout(() => navigation.navigate('Login'), 2000);

        // Nếu bạn có tích hợp API thực:
        // try {
        //     const response = await AuthenticationService.resetPassword(token, email, newPassword);
        //     setSuccessMessage(response.message || 'Mật khẩu đã được thay đổi thành công.');
        //     setTimeout(() => navigation.navigate('Login'), 2000);
        // } catch (err) {
        //     setError(err.message || 'Có lỗi xảy ra. Vui lòng thử lại.');
        // }
    };

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Đổi lại mật khẩu</Text>

                        {/* Lỗi */}
                        {error && <Text style={styles.errorMessage}>{error}</Text>}
                        {successMessage && (
                            <Text style={[styles.errorMessage, { color: 'green' }]}>
                                {successMessage}
                            </Text>
                        )}

                        {/* Mật khẩu mới */}
                        <FloatingLabelInput
                            label="Mật khẩu mới"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                        />

                        {/* Xác nhận mật khẩu */}
                        <FloatingLabelInput
                            label="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />

                        {/* Submit */}
                        <TouchableOpacity style={styles.loginFormButton} onPress={handleSubmit}>
                            <Text style={styles.loginFormButtonText}>Thay đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LoginBody>
        </>
    );
}
