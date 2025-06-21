import React, { useEffect, useState } from 'react';
import { View, TextInput, Animated } from 'react-native';
import styles from '../../pages/Authen/LoginStyle';

const FloatingLabelInput = ({ value, onChangeText, label, isSecure, keyboardType }) => {
    const [isFocused, setIsFocused] = useState(false);
    const labelPosition = useState(new Animated.Value(16))[0];

    useEffect(() => {
        Animated.timing(labelPosition, {
            toValue: isFocused || value ? -11 : 16,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    return (
        <View style={styles.formGroup}>
            <TextInput
                style={[styles.loginFormInput, value && { borderColor: '#eeaf67' }]}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={isSecure}
                keyboardType={keyboardType || 'default'}
                placeholderTextColor="#aaa"
            />
            <Animated.Text
                style={[
                    styles.floatingLabel,
                    {
                        top: labelPosition,
                        color: isFocused || value ? '#eeaf67' : '#aaa',
                        backgroundColor: isFocused || value ? '#333333' : 'transparent',
                    },
                ]}
            >
                {label}
            </Animated.Text>
        </View>
    );
};

export default FloatingLabelInput;
