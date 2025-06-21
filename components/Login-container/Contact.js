import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from '../../pages/Authen/LoginStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Contact() {
    const handleLink = (type) => {
        let url = '';
        switch (type) {
            case 'zalo':
                url = 'https://zalo.me/0374687144';
                break;
            case 'tele':
                url = 'https://t.me/hoang_nek';
                break;
            case 'facebook':
                url = 'https://www.facebook.com/sh.hoanh/';
                break;
            case 'gmail':
                url = 'mailto:hoangkutehbcd@gmail.com';
                break;
            case 'discord':
                url = 'https://discord.gg/AyNYKs4ydU';
                break;
            default:
                return;
        }
        Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
    };

    return (
        <View>
            <TouchableOpacity
                style={[styles.loginFormButton, styles.buttonBase]}
                onPress={() => handleLink('zalo')}
            >
                {/* fas fa-comment-alt */}
                <FontAwesome5
                    name="comment-alt"
                    size={20}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    solid
                />
                <Text style={styles.phoneText}>Liên hệ qua Zalo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.loginFormButton, styles.buttonBase]}
                onPress={() => handleLink('tele')}
            >
                {/* fab fa-telegram-plane */}
                <FontAwesome5
                    name="telegram-plane"
                    size={20}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    brand
                />
                <Text style={styles.phoneText}>Liên hệ qua Tele</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.loginFormButton, styles.buttonBase]}
                onPress={() => handleLink('facebook')}
            >
                {/* fab fa-facebook-f */}
                <FontAwesome5
                    name="facebook-f"
                    size={20}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    brand
                />
                <Text style={styles.emailText}>Liên hệ qua Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.loginFormButton, styles.buttonBase]}
                onPress={() => handleLink('gmail')}
            >
                {/* fas fa-envelope */}
                <FontAwesome5
                    name="envelope"
                    size={20}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    solid
                />
                <Text style={styles.emailText}>Liên hệ qua Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.loginFormButton, styles.buttonBase]}
                onPress={() => handleLink('discord')}
            >
                {/* fab fa-discord */}
                <FontAwesome5
                    name="discord"
                    size={20}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    brand
                />
                <Text style={styles.emailText}>Join Group Discord GienPhim</Text>
            </TouchableOpacity>

            <Text style={styles.signupNowText}>Bạn có hài lòng với website GIENPHIM?</Text>

        </View>
    );
}
