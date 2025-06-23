import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./FilmBannerListStyles";
import { useEffect, useState } from "react";
import { formatYear } from "../../../utils/Format";
import { useNavigation } from "@react-navigation/native";

function FilmBanner({ data }) {
    const navigation = useNavigation();

    const [dataPhim, setDataPhim] = useState([]);
    const [rating, setRating] = useState("0");
    useEffect(() => {
        if (data?.theLoai) {
            setDataPhim(data.theLoai);
        }

        const rate = ((data.luotThichP / (data.luotThichP + data.luotDislikeP)) * 10).toFixed(1);
        if (isNaN(rate)) {
            setRating("0")
        } else {
            setRating(rate);
        }
    }, [data]);

    const HandlePress = (phimId) => {
        navigation.navigate('Phim',{
            id: phimId
        })
    }

    return (
        <>
            <View style={styles.banner}>
                <Image style={styles.bgImg} source={{ uri: data.avatarP }} />
                <View style={styles.overlayBanner}></View>

                <View style={styles.contentBanner}>
                    <Text style={styles.titleBanner} numberOfLines={2} ellipsizeMode="tail">{data.tenP}</Text>
                    <Text style={{ color: "yellow" }} >Phim Xem Nhiều Nhất</Text>

                    <View style={styles.infoBanner}>
                        <Text style={styles.tagBanner}>⭐ {rating}</Text>
                        <Text style={styles.thoiLuongBanner}> ⏳ {data.thoiLuongP}</Text>
                        <Text style={styles.ngayPhatHanh}>📅 {formatYear(data.ngayPhatHanhP)}</Text>
                    </View>
                    <View style={styles.moTaBanner}>
                        <Text style={styles.moTaBannerText} numberOfLines={4} >{data.moTaP}</Text>
                    </View>
                    <Text style={styles.studioBanner}>🏢 Studio: {data.tenCTSXP}</Text>

                    <View style={styles.genresRow}>
                        <Text style={styles.genresBanner}>📌 Thể loại:</Text>
                        {dataPhim.slice(0, 3).map((res) => (
                            <View key={res.theLoaiId} style={styles.itemGenresBannerWrapper}>
                                <Text style={styles.itemGenresBanner}>{res.tenTL}</Text>
                            </View>
                        ))}
                    </View>

                    <TouchableOpacity onPress={() => HandlePress(data.phimId)} style={styles.watchBTN}>
                        <Text style={styles.watchBTNText}>▶ Xem Phim</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    );
}

export default FilmBanner;
