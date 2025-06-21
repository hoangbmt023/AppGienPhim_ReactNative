import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
 import * as phimServices from '../../../services/PhimServices';
import styles from './FilmVideoStyles';
function FilmPanel({ data, onSelect, nguoiDungId }){
    const navigation = useNavigation();
    const route = useRoute();
    const { id, tap } = route.params;

    const [dataTap, setDataTap] = useState([]);
    const [tapTiep, setTapTiep] = useState('');
    const [checkLikeDislike, setCheckLikeDislike] = useState([]);

    const xuLyLikeDislike = async (id, nguoiDungId, isLike, isDislike) => {
        await phimServices.XuLyLuotLikeDislike(id, nguoiDungId, isLike, isDislike);
        fetchApi();
    };

    const fetchApi = async () => {
        const result = await phimServices.CheckLikeDislikeUser(id, nguoiDungId);
        setCheckLikeDislike(result.data);
    };

    useEffect(() => {
        if (!data) return;
        setDataTap(data);
    }, [data]);

    useEffect(() => {
        const parts = tap?.split('-');
        const number = parseInt(parts?.[1], 10);
        if (isNaN(number)) return;

        const nextNumber = number + 1;
        const nextSlug = `tap-${String(nextNumber).padStart(2, '0')}`;
        if (nextNumber <= dataTap.length) {
            setTapTiep(nextSlug);
        }
    }, [tap, dataTap]);

    useEffect(() => {
        if (!id || !nguoiDungId) return;
        fetchApi();
    }, [id, nguoiDungId]);

    const daThich = Array.isArray(checkLikeDislike) && checkLikeDislike[0]?.luotThichP;
    const khongThich = Array.isArray(checkLikeDislike) && checkLikeDislike[0]?.luotDislikeP;

    return (
        <ScrollView horizontal contentContainerStyle={styles.panel}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onSelect();
                    navigation.navigate('FilmVideoScreen', { id, tap: tapTiep });
                }}
            >
                <Text style={styles.text}>▶ Tập tiếp</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, daThich && styles.active]}
                onPress={() =>
                    xuLyLikeDislike(id, nguoiDungId, !daThich, false)
                }
            >
                <Text style={styles.text}>💡 Thích phim</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, khongThich && styles.active]}
                onPress={() =>
                    xuLyLikeDislike(id, nguoiDungId, false, !khongThich)
                }
            >
                <Text style={styles.text}>⭐ Không thích</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FilmDetailScreen', { id })}
            >
                <Text style={styles.text}>📺 Chi tiết phim</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ContactScreen')}
            >
                <Text style={styles.text}>⚠ Báo lỗi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>⬇ Tải về</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HistoryScreen')}
            >
                <Text style={styles.text}>🕒 Lịch sử xem</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


export default FilmPanel;
