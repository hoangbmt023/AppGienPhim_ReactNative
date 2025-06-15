import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Switch, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Điều hướng màn hình
import LoginContainer from '../../components/Login-container/LoginContainer';
import styles from './LoginStyle';

export default function Register() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const [emailFocused, setEmailFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation(); // Để điều hướng đến các màn hình khác

    // Animated label positions
    const emailLabelPosition = new Animated.Value(16);
    const phoneLabelPosition = new Animated.Value(16);
    const passwordLabelPosition = new Animated.Value(16);
    const confirmPasswordLabelPosition = new Animated.Value(16);

    // Animate label when field is focused
    const animateLabel = (focus, labelPosition) => {
        Animated.timing(labelPosition, {
            toValue: focus ? -25 : 16,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        animateLabel(emailFocused || email, emailLabelPosition);
        animateLabel(phoneFocused || phoneNumber, phoneLabelPosition);
        animateLabel(passwordFocused || password, passwordLabelPosition);
        animateLabel(confirmPasswordFocused || confirmPassword, confirmPasswordLabelPosition);
    }, [email, phoneNumber, password, confirmPassword, emailFocused, phoneFocused, passwordFocused, confirmPasswordFocused]);

    const handleSubmit = () => {
        if (!email || !phoneNumber || !password || !confirmPassword || !agree) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.');
        } else if (password !== confirmPassword) {
            setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
        } else {
            setErrorMessage('');
            console.log('Đăng ký thành công!');
            navigation.navigate('Login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
        }
    };

    const handleLogin = () => {
        navigation.navigate('Login'); // Điều hướng tới màn hình Đăng ký
    };

    return (
        <>
            <LoginContainer />
            <View style={styles.loginBody}>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Đăng ký tài khoản</Text>

                        {/* Email */}
                        <View style={styles.formGroup}>
                            <TextInput
                                style={[styles.loginFormInput, email && { borderColor: '#eeaf67' }]}
                                value={email}
                                onChangeText={setEmail}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(false)}
                                placeholderTextColor="#aaa"
                                keyboardType="email-address"
                            />
                            <Animated.Text
                                style={[styles.floatingLabel, { top: emailLabelPosition, color: email || emailFocused ? '#eeaf67' : '#aaa' }]}>
                                Email
                            </Animated.Text>
                        </View>

                        {/* Số điện thoại */}
                        <View style={styles.formGroup}>
                            <TextInput
                                style={[styles.loginFormInput, phoneNumber && { borderColor: '#eeaf67' }]}
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                onFocus={() => setPhoneFocused(true)}
                                onBlur={() => setPhoneFocused(false)}
                                placeholderTextColor="#aaa"
                                keyboardType="phone-pad"
                            />
                            <Animated.Text
                                style={[styles.floatingLabel, { top: phoneLabelPosition, color: phoneNumber || phoneFocused ? '#eeaf67' : '#aaa' }]}>
                                Số điện thoại
                            </Animated.Text>
                        </View>

                        {/* Mật khẩu */}
                        <View style={styles.formGroup}>
                            <TextInput
                                style={[styles.loginFormInput, password && { borderColor: '#eeaf67' }]}
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                                placeholderTextColor="#aaa"
                                secureTextEntry
                            />
                            <Animated.Text
                                style={[styles.floatingLabel, { top: passwordLabelPosition, color: password || passwordFocused ? '#eeaf67' : '#aaa' }]}>
                                Mật khẩu
                            </Animated.Text>
                        </View>

                        {/* Xác nhận mật khẩu */}
                        <View style={styles.formGroup}>
                            <TextInput
                                style={[styles.loginFormInput, confirmPassword && { borderColor: '#eeaf67' }]}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                onFocus={() => setConfirmPasswordFocused(true)}
                                onBlur={() => setConfirmPasswordFocused(false)}
                                placeholderTextColor="#aaa"
                                secureTextEntry
                            />
                            <Animated.Text
                                style={[styles.floatingLabel, { top: confirmPasswordLabelPosition, color: confirmPassword || confirmPasswordFocused ? '#eeaf67' : '#aaa' }]}>
                                Xác nhận mật khẩu
                            </Animated.Text>
                        </View>

                        {/* Lỗi */}
                        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

                        {/* Đồng ý điều khoản */}
                        <View style={styles.agreeContainer}>
                            <Switch
                                value={agree}
                                onValueChange={setAgree}
                                trackColor={{ false: '#737373', true: '#eeaf67' }}
                            />
                            <Text style={styles.agreeText}>Tôi đồng ý với{' '}
                                <Text style={styles.link} onPress={() => { /* mở trang điều khoản sử dụng */ }}>Điều khoản sử dụng</Text> và{' '}
                                <Text style={styles.link} onPress={() => { /* mở trang chính sách bảo mật */ }}>Chính sách bảo mật</Text>
                            </Text>
                        </View>

                        {/* Nút đăng ký */}
                        <TouchableOpacity style={styles.loginFormButton} onPress={handleSubmit}>
                            <Text style={styles.loginFormButtonText}>Đăng Ký</Text>
                        </TouchableOpacity>

                        <View style={styles.signupFormLogin}>
                            <Text style={styles.signupFormLoginText}>Đã có tài khoản?</Text>
                            <TouchableOpacity onPress={handleLogin}>
                                <Text style={styles.signupFormLoginLink}>Đăng nhập ngay.</Text>
                            </TouchableOpacity>
                        </View>

                        {/* reCAPTCHA Section */}
                        <View style={styles.loginTerm}>
                            <Text style={styles.loginTermText}>
                                Trang này được bảo vệ bởi Google reCAPTCHA để đảm bảo bạn không phải là bot.
                            </Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/recaptcha')} target="_blank" rel="noreferrer">
                                <Text style={styles.loginTermLink}>Tìm hiểu thêm.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}