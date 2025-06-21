import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../pages/Authen/LoginStyle';

const Redirect = ({ label, linkText, onPress }) => {
    return (
        <View style={styles.signupContainer}>
            <Text style={styles.signupText}>{label}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupLink}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Redirect;