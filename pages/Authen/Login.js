import React, { useState, useEffect } from 'react';
import LoginContainer from '../../components/Login-container/LoginContainer';
import { View, Text, TextInput, TouchableOpacity, Animated, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Đảm bảo đã import useNavigation
import styles from './LoginStyle';

export default function Login() {
    const navigation = useNavigation(); // Sử dụng hook useNavigation để lấy navigation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const emailLabelPosition = useState(new Animated.Value(16))[0];
    const passwordLabelPosition = useState(new Animated.Value(16))[0];

    const animateLabel = (focus, labelPosition) => {
        Animated.timing(labelPosition, {
            toValue: focus ? -25 : 16,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const handleSubmit = () => {
        if (!email || !password) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin');
        } else {
            setErrorMessage('');
            console.log('Đăng nhập thành công');
        }
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword'); // Điều hướng tới màn hình Quên mật khẩu
    };

    const handleHelp = () => {
        navigation.navigate('Help'); // Điều hướng tới màn hình Cần trợ giúp
    };

    const handleRegister = () => {
        navigation.navigate('Register'); // Điều hướng tới màn hình Đăng ký
    };

    useEffect(() => {
        animateLabel(isEmailFocused || email, emailLabelPosition);
        animateLabel(isPasswordFocused || password, passwordLabelPosition);
    }, [isEmailFocused, isPasswordFocused, email, password]);

    return (
        <>
            <LoginContainer />
            <View style={styles.loginBody}>
                <View style={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Đăng Nhập</Text>

                        <View style={styles.formGroup}>
                            <TextInput
                                style={[styles.loginFormInput, email && { borderColor: '#eeaf67' }]}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(false)}
                                placeholderTextColor="#aaa"
                                keyboardType="email-address"
                            />
                            <Animated.Text
                                style={[
                                    styles.floatingLabel,
                                    {
                                        top: emailLabelPosition,
                                        fontSize: email ? 16 : 16,
                                        color: email || isEmailFocused ? '#eeaf67' : '#aaa',
                                    },
                                ]}
                            >
                                Tên Đăng Nhập
                            </Animated.Text>
                        </View>

                        <View style={styles.formGroup}>
                            <TextInput
                                style={[styles.loginFormInput, password && { borderColor: '#eeaf67' }]}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                                placeholderTextColor="#aaa"
                                secureTextEntry
                            />
                            <Animated.Text
                                style={[
                                    styles.floatingLabel,
                                    {
                                        top: passwordLabelPosition,
                                        fontSize: password ? 16 : 16,
                                        color: password || isPasswordFocused ? '#eeaf67' : '#aaa',
                                    },
                                ]}
                            >
                                Mật khẩu
                            </Animated.Text>
                        </View>

                        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

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
                        <View style={styles.signupContainer}>
                            <Text style={styles.signupText}>Mới sử dụng GIENPHIM?</Text>
                            <TouchableOpacity onPress={handleRegister}>
                                <Text style={styles.signupLink}>Đăng Ký Ngay.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
