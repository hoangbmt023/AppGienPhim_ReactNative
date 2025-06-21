import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginContainer from '../../components/Login-container/LoginContainer';
import LoginBody from '../../components/Login-container/LoginBody';
import styles from '../../pages/Authen/LoginStyle';
import Contact from '../../components/Login-container/Contact';

export default function LienHe() {
    const navigation = useNavigation();

    return (
        <>
            <LoginContainer />
            <LoginBody>
                <ScrollView contentContainerStyle={styles.loginFormContainer}>
                    <View style={styles.loginTitle}>
                        <Text style={styles.loginTitleText}>Hãy Liên Hệ Với Chúng Tôi</Text>

                        <Contact />

                        <View style={styles.loginTermText}>
                            <Text style={styles.loginTermText}>
                                Nếu bạn có trải nghiệm không tốt về website. Hãy liên hệ sớm nhất với chúng tôi.
                                Chúng tôi sẽ cố gắng khắc phục nhanh chóng.
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.learnMoreLink}>Tìm hiểu thêm.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backLinkContainer}>
                        <Text style={styles.backLink}>← Trở về</Text>
                    </TouchableOpacity>
                </ScrollView>
            </LoginBody>
        </>
    );
}
