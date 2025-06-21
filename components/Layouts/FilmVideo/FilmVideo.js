import React, { useEffect, useState, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import FilmTap from './FilmTap'; // bạn cần chuyển cả component này
import FilmPanel from './FilmPanel'; // và cả cái này nữa
import * as phimServices from "../../../services/PhimServices"
import styles from './FilmVideoStyles';

function FilmVideo({ id, tap, userId }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [dataTapPhim, setDataTapPhim] = useState([]);
    const [tapPhim, setTapPhim] = useState('');
    const [currentType, setCurrentType] = useState(null);
    const isFirstRun = useRef(true);

    

    useEffect(() => {
        if (!id) return;

        const fetchApi = async () => {
            const dataTap = await phimServices.phim(id);
            const danhSachTap = dataTap.tapCuaPhim || [];
            setDataTapPhim(danhSachTap);
        };

        fetchApi();
    }, [id]);

    const tapchon = useMemo(() => {
        return dataTapPhim.find(item => item.slugTap === tap);
    }, [dataTapPhim, tap]);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if (!tap || !userId) return;

        const fetchApiXuLyLichSuXem = async () => {
            await phimServices.XuLyLichXuXem(id, userId, tap);
        };
        fetchApiXuLyLichSuXem();
    }, [tap]);

    useEffect(() => {
        if (!currentType && dataTapPhim.length > 0) {
            const hasChinh = dataTapPhim.some(t => t.linkChinh);
            const hasPhu = dataTapPhim.some(t => t.linkPhu);

            if (hasChinh) setCurrentType('chinh');
            else if (hasPhu) setCurrentType('phu');
        }
    }, [dataTapPhim, currentType]);

    useEffect(() => {
        if (!tapchon) return;
        setTapPhim(currentType === 'chinh' ? tapchon.linkChinh : tapchon.linkPhu);
    }, [tapchon, currentType]);

    const Views = async () => {
        await phimServices.addLuotXem(id, userId);
        setIsPlaying(true);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.videoContainer}>
                {isPlaying && tapPhim ? (
                    <WebView
                        source={{ uri: tapPhim }}
                        style={styles.webview}
                        allowsFullscreenVideo
                    />
                ) : (
                    <View style={styles.overlay}>
                        <Text style={styles.warning}>WEBSITE CÓ NHIỀU QUẢNG CÁO!</Text>
                        <Text style={styles.subtext}>KHÔNG CÓ QUẢNG CÁO THÌ DUY TRÌ WEBSITE LÀM SAO?!</Text>
                        <Text style={styles.support}>
                            NẾU BẠN DÙNG CHẶN QUẢNG CÁO <Text style={styles.highlight}>VUI LÒNG TẮT</Text> ĐỂ ỦNG HỘ GIENPHIM NHÉ!{'\n'}
                            ĐÂY LÀ LINK PHIM FREE NÊN SẼ CÓ QUẢNG CÁO <Text style={styles.highlight}>CỜ BẠC</Text> VUI LÒNG CÂN NHẮC TRƯỚC KHI XEM!
                        </Text>

                        <TouchableOpacity style={styles.playButton} onPress={Views}>
                            <View style={styles.playIcon} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Tùy chỉnh lại component FilmPanel/FIlmTap cho React Native nếu chưa làm */}
            <FilmPanel data={dataTapPhim} nguoiDungId={userId} idphim={id} slugtap={tap} onSelect={() => setIsPlaying(false)} />

            {dataTapPhim.some(t => t.linkChinh) && (
                <FilmTap
                    type="chinh"
                    currentType={currentType}
                    data={dataTapPhim.filter(t => t.linkChinh)}
                    idphim={id}
                    slugtap={tap}
                    onSelect={() => {
                        setCurrentType('chinh');
                        setIsPlaying(false);
                    }}
                >
                    📺 GIENPHIM Tập Chính
                </FilmTap>
            )}

            {dataTapPhim.some(t => t.linkPhu) && (
                <FilmTap
                    type="phu"
                    currentType={currentType}
                    data={dataTapPhim.filter(t => t.linkPhu)}
                    idphim={id}
                    slugtap={tap}
                    onSelect={() => {
                        setCurrentType('phu');
                        setIsPlaying(false);
                    }}
                >
                    📺 GIENPHIM Tập Phụ
                </FilmTap>
            )}
        </ScrollView>
    );
};

export default FilmVideo;