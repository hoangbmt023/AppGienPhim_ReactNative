import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ImageBackground } from 'react-native'; 
import { useRoute, useNavigation } from '@react-navigation/native'; 

import PhuongThucThanhToan from '../../components/Layouts/PhuongThucThanhToan/PhuongThucThanhToan';
import ThanhToan from '../../components/Layouts/PhuongThucThanhToan/ThanhToan';

export default function NapTienScreen() { 
    const route = useRoute(); 
    const navigation = useNavigation(); 
    const { phuongthuc } = route.params || {}; 

    const [typePayment, setTypePayment] = useState("");

    useEffect(() => {
        if (phuongthuc) {
            setTypePayment(phuongthuc.toLowerCase());
        } else {
            setTypePayment("home");
        }
    }, [phuongthuc, navigation]); 

    return (
        <View style={styles.container}>
            {typePayment === "home" && <PhuongThucThanhToan />}
            {typePayment === "vnpay" && <ThanhToan phuongthuc={typePayment} />}
            {typePayment === "vib" && <ThanhToan phuongthuc={typePayment} />}
            {typePayment === "momo" && <ThanhToan phuongthuc={typePayment} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434242',
        marginBottom: 100
    },
});

