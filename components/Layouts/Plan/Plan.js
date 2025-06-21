import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as managerServices from '../../../services/ManagerService';
import { formatVND } from '../../../utils/Format';
import PlanStyle from './PlanStyle';

// Hàm để viết hoa chữ cái đầu (để dùng cho key style: recommendedGreen, titleRed, ...)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function Plan({ children, deXuat, isRecommended, onSelect, data, onDataGoiThang, onDataGoiNam, color }) {
    const [dataLuaChonGoiThang, setDataLuaChonGoiThang] = useState([]);
    const [dataLuaChonGoiNam, setDataLuaChonGoiNam] = useState([]);
    const parts = String(data?.moTaGoiTV || '').split('-');

    useEffect(() => {
        if (!data || !data.goiTVId) return;

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

    // Tạo dynamic style theo màu và đề xuất
    const dynamicStyles = [
        PlanStyle.plan,
        color && PlanStyle[color],
        isRecommended && PlanStyle[`recommended${capitalize(color)}`]
    ];

    const titleColorStyle = PlanStyle[`title${capitalize(color)}`] || {};

    return (
        <TouchableOpacity style={dynamicStyles} onPress={onSelect}>
            {deXuat && (
                <View style={PlanStyle.label}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Đề xuất</Text>
                </View>
            )}

            <Text style={[PlanStyle.title, titleColorStyle]}>
                {children}
            </Text>

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
                        {res}
                    </Text>
                ))}
            </View>
        </TouchableOpacity>
    );
}

export default Plan;
