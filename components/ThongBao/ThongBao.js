import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Animated from 'react-native-reanimated';
import ThongBaoStyles from './ThongBaoStyle';
import { useScalePulse, useMove } from './ThongBaoAnimation';

export default function ThongBao({ show, onClose, type, title, message, showButton, btnLabel, onBTNClick, soNgayOptions = [], onChonSoNgay }) {
    const [selectedSoNgay, setSelectedSoNgay] = useState('');
    const scaleStyle = useScalePulse();
    const moveStyle = useMove();

    useEffect(() => {
        setSelectedSoNgay('');
    }, [soNgayOptions]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <View style={ThongBaoStyles.icon}>
                        <View style={ThongBaoStyles.face2}>
                            <View style={ThongBaoStyles.eye} />
                            <View style={ThongBaoStyles['eye-right']} />
                            <View style={[ThongBaoStyles.mouth, ThongBaoStyles.happy]} />
                        </View>
                        <Animated.View style={[ThongBaoStyles.shadow, moveStyle]} />
                    </View>
                );
            case 'fail':
                return (
                    <View style={ThongBaoStyles.icon}>
                        <View style={ThongBaoStyles.face2}>
                            <View style={ThongBaoStyles.eye} />
                            <View style={ThongBaoStyles['eye-right']} />
                            <View style={[ThongBaoStyles.mouth, ThongBaoStyles.sad]} />
                        </View>
                        <Animated.View style={[ThongBaoStyles.shadow, moveStyle]} />
                    </View>
                );
            case 'warning':
                return (
                    <View style={ThongBaoStyles.icon}>
                        <View style={ThongBaoStyles.face}>
                            <View style={ThongBaoStyles.eye} />
                            <View style={ThongBaoStyles['eye-right']} />
                            <View style={[ThongBaoStyles.mouth, ThongBaoStyles.happy]} />
                        </View>
                        <Animated.View style={[ThongBaoStyles.shadow, scaleStyle]} />
                    </View>
                );
            case 'confirm':
                return (
                    <View style={ThongBaoStyles.icon}>
                        <View style={ThongBaoStyles.face}>
                            <View style={ThongBaoStyles.eye} />
                            <View style={ThongBaoStyles['eye-right']} />
                            <View style={[ThongBaoStyles.mouth, ThongBaoStyles.sad]} />
                        </View>
                        <Animated.View style={[ThongBaoStyles.shadow, scaleStyle]} />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <Modal visible={show} transparent animationType="fade">
            <View style={ThongBaoStyles['modal-overlay-tb']}>
                <View style={[ThongBaoStyles['modal-content-tb'], ThongBaoStyles[`modal-content-tb-${type}`]]}>
                    {getIcon()}
                    <Text style={ThongBaoStyles['modal-content-tb-h3']}>{title}</Text>
                    <Text style={ThongBaoStyles['modal-content-tb-p']}>{message}</Text>

                    {soNgayOptions.length > 0 && (
                        <View style={ThongBaoStyles['chon-so-ngay']}>
                            <Text style={ThongBaoStyles['chon-so-ngay-label']}>Chọn số ngày gói:</Text>
                            <Picker
                                selectedValue={selectedSoNgay}
                                onValueChange={(value) => {
                                    setSelectedSoNgay(value);
                                    onChonSoNgay && onChonSoNgay(Number(value));
                                }}
                                style={ThongBaoStyles['chon-so-ngay-select']}
                            >
                                <Picker.Item label="-- Chọn --" value="" />
                                {soNgayOptions.map((day, idx) => (
                                    <Picker.Item key={idx} label={`${day} ngày`} value={day.toString()} />
                                ))}
                            </Picker>
                        </View>
                    )}

                    <View style={ThongBaoStyles['modal-buttons-tb']}>
                        {showButton && (
                            <TouchableOpacity
                                style={[ThongBaoStyles['btn-tb'], ThongBaoStyles['btn-tb-confirm']]}
                                onPress={onBTNClick}
                            >
                                <Text style={ThongBaoStyles['btn-tb-text']}>{btnLabel}</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            style={[ThongBaoStyles['btn-tb'], ThongBaoStyles['btn-tb-cancel']]}
                            onPress={onClose}
                        >
                            <Text style={ThongBaoStyles['btn-tb-text']}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
