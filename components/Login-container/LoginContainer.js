import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginContainer = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZjfXldWj-AR1QUOFBUVqe09pU1x8uHoPjWUUglrvEDlYLyPKsKe94fK_yL2d-GVxgOr7U-u_f0nY2UOOdLDkZ8CsHIwMHiy7rXgTbNDeeG5Jh5pgIiuTfFDS7jpwbwgum85LZveLvxlVUqWN94dlXlO6z8.jpg?r=fa8' }}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>GIENPHIM</Text>
            </View>
            <View style={styles.overlay}></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover', // Thay thế background-size: cover
        justifyContent: 'center', // Canh giữa các phần tử
        position: 'relative',
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 100,
    },
    headerText: {
        fontSize: 40,
        fontWeight: '700',
        color: '#ff000d',
        textTransform: 'uppercase',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    }
});

export default LoginContainer;