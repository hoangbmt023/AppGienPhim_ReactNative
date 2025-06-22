import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager,
    LogBox,
} from 'react-native';
import * as managerServices from '../../../services/ManagerService';
import { formatVND } from '../../../utils/Format';
import PlanStyle from './PlanStyle';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function Plan({
    children,
    deXuat,
    onSelect,
    data,
    onDataGoiThang,
    onDataGoiNam,
    selectedPlanId,
    color
}) {
    const [dataLuaChonGoiThang, setDataLuaChonGoiThang] = useState([]);
    const [dataLuaChonGoiNam, setDataLuaChonGoiNam] = useState([]);
    const parts = String(data?.moTaGoiTV || '').split('-');

    const isSelected = selectedPlanId === data.goiTVId;
    const isSuggested = data.tenGoiTV?.toLowerCase().includes('vip');

    useEffect(() => {
        if (!data?.goiTVId) return;

        const fetchApiLuaChon = async () => {
            try {
                const resultT = await managerServices.GetLuaChonGTVByGoiTVIdAndNgayAsync(data.goiTVId, 30);
                setDataLuaChonGoiThang(resultT.data);
                onDataGoiThang(resultT.data);

                const resultN = await managerServices.GetLuaChonGTVByGoiTVIdAndNgayAsync(data.goiTVId, 365);
                setDataLuaChonGoiNam(resultN.data);
                onDataGoiNam(resultN.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        };

        fetchApiLuaChon();
    }, [data?.goiTVId]);

    const dynamicStyles = [
        PlanStyle.plan,
        color && PlanStyle[color],
        (isSelected || (!selectedPlanId && isSuggested)) && PlanStyle[`recommended${capitalize(color)}`],
    ];

    const titleColorStyle = PlanStyle[`title${capitalize(color)}`] || {};

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onSelect(isSelected ? null : data.goiTVId);
    };

    LogBox.ignoreLogs([
        'setLayoutAnimationEnabledExperimental is currently a no-op'
    ]);

    return (
        <TouchableOpacity style={dynamicStyles} onPress={toggleExpand} activeOpacity={0.9}>
            {deXuat && (
                <View style={PlanStyle.label}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Đề xuất</Text>
                </View>
            )}

            <Text style={[PlanStyle.title, titleColorStyle]}>
                {children}
            </Text>

            {isSelected && (
                <>
                    <Text style={PlanStyle.price}>
                        <Text style={PlanStyle.monthly}>
                            {formatVND(Number(dataLuaChonGoiThang[0]?.giaGoiTV || 0))} / tháng
                        </Text>
                    </Text>

                    <Text style={PlanStyle.yearly}>
                        Hoặc trả trước theo năm:{'\n'}
                        <Text style={PlanStyle.highlight}>
                            {formatVND(Number(dataLuaChonGoiNam[0]?.giaGoiTV || 0))} / năm
                        </Text>
                    </Text>

                    <View style={PlanStyle.planInfo}>
                        {parts.map((res, index) => (
                            <Text key={index} style={PlanStyle.listItem}>
                                <Text style={PlanStyle.listItemStar}>★ </Text>
                                {res.trim()}
                            </Text>
                        ))}
                    </View>
                </>
            )}
        </TouchableOpacity>
    );
}

export default Plan;
