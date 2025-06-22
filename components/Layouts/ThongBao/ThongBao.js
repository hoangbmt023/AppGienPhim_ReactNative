import React, { useEffect, useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width;

export default function ThongBao({
    show,
    onclose,
    type = 'info', // success | fail | warning | confirm | info
    title = 'Thông báo',
    message = '',
    showButton = false,
    btnLabel = 'Xác nhận',
    onBTNClick,
    soNgayOptions = [],
    onChonSoNgay
}) {
    const [selectedSoNgay, setSelectedSoNgay] = useState('');

    useEffect(() => {
        if (soNgayOptions.length > 0) {
            setSelectedSoNgay('');
        }
    }, [soNgayOptions]);

    const handleBTNClick = () => {
        if (onBTNClick && typeof onBTNClick === 'function') {
            onBTNClick();
        }
    };

    const handlePickerChange = (value) => {
        setSelectedSoNgay(value);
        if (onChonSoNgay && typeof onChonSoNgay === 'function') {
            onChonSoNgay(Number(value));
        }
    };

    const typeMap = {
        success: {
            color: '#4CAF50',
            icon: '✓',
        },
        fail: {
            color: '#F44336',
            icon: '✗',
        },
        warning: {
            color: '#FFC107',
            icon: '!',
        },
        confirm: {
            color: '#2196F3',
            icon: '?',
        },
        info: {
            color: '#607D8B',
            icon: 'i',
        },
    };

    const { color, icon } = typeMap[type] || typeMap.info;

    if (!show) return null;

    return (
        <Modal
            visible={show}
            transparent
            animationType="fade"
            onRequestClose={onclose}
        >
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, { borderColor: color }]}>
                    <View style={[styles.iconCircle, { backgroundColor: color }]}>
                        <Text style={styles.iconText}>{icon}</Text>
                    </View>

                    <Text style={[styles.title, { color }]}>
                        {title}
                    </Text>

                    <Text style={styles.message}>
                        {message}
                    </Text>

                    {soNgayOptions.length > 0 && (
                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerLabel}>Chọn số ngày:</Text>
                            <Picker
                                selectedValue={selectedSoNgay}
                                onValueChange={handlePickerChange}
                                style={styles.picker}
                            >
                                <Picker.Item label="-- Chọn --" value="" />
                                {soNgayOptions.map((day, index) => (
                                    <Picker.Item
                                        key={index}
                                        label={`${day} ngày`}
                                        value={day.toString()}
                                    />
                                ))}
                            </Picker>
                        </View>
                    )}

                    <View style={styles.buttonRow}>
                        {showButton && (
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: color }]}
                                onPress={handleBTNClick}
                            >
                                <Text style={styles.buttonText}>{btnLabel}</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onclose}
                        >
                            <Text style={styles.buttonText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalContainer: {
        width: windowWidth * 0.85,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        borderWidth: 2,
        elevation: 5,
        alignItems: 'center',
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    iconText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
        color: '#333',
    },
    pickerContainer: {
        marginBottom: 20,
        width: '100%',
    },
    pickerLabel: {
        fontSize: 16,
        marginBottom: 6,
        color: '#444',
    },
    picker: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        minWidth: 100,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#9E9E9E',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
