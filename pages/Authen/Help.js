import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import LoginBody from '../../components/Login-container/LoginBody';
import styles from './LoginStyle';

export default function Help() {
    const navigation = useNavigation();

    const faqList = [
        {
            question: 'Làm thế nào để đăng nhập?',
            answer: 'Bạn có thể đăng nhập bằng email hoặc số điện thoại đã đăng ký.',
        },
        {
            question: 'Tôi quên mật khẩu, làm sao để lấy lại?',
            answer: 'Hãy nhấn vào "Quên mật khẩu" trên trang đăng nhập để đặt lại mật khẩu.',
        },
        {
            question: 'Tôi có thể thay đổi địa chỉ email không?',
            answer: 'Có, bạn có thể thay đổi trong phần Cài đặt tài khoản.',
        },
        {
            question: 'Tôi có thể liên hệ bộ phận hỗ trợ như thế nào?',
            answer: (
                <Text>
                    Vui lòng gửi email đến{' '}
                    <Text
                        style={styles.link}
                        onPress={() => Linking.openURL('mailto:support@gienphim.vn')}
                    >
                        support@gienphim.vn
                    </Text>{' '}
                    để được hỗ trợ nhanh nhất.
                </Text>
            ),
        },
    ];

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <ScrollView contentContainerStyle={styles.loginFormContainer}>
                    <Text style={styles.loginTitleText}>Trợ Giúp</Text>

                    {faqList.map((item, index) => (
                        <View key={index} style={styles.faqBox}>
                            <Text style={styles.faqQuestion}>{item.question}</Text>
                            {typeof item.answer === 'string' ? (
                                <Text style={styles.faqAnswer}>{item.answer}</Text>
                            ) : (
                                item.answer
                            )}
                        </View>
                    ))}

                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backLinkContainer}>
                        <Text style={styles.backLink}>← Trở về</Text>
                    </TouchableOpacity>
                </ScrollView>
            </LoginBody>
        </>
    );
}
