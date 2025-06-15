import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./FilmBannerListStyles";

function FilmBanner() {
    return (
        <>
            <View style={styles.banner}>
                <Image style={styles.bgImg} source={{ uri: 'https://cdn.animevietsub.red/data/big_banner/2024/11/30/animevsub-02NnXF2KvW.jpeg' }} />
                <View style={styles.overlayBanner}></View>

                <View style={styles.contentBanner}>
                    <Text style={styles.titleBanner}>Phạm Trọng Huy Hoàng </Text>
                    <Text style={{ color: "yellow" }} >Phim Xem Nhiều Nhất</Text>

                    <View style={styles.infoBanner}>
                        <Text style={styles.tagBanner}>⭐ 10</Text>
                        <Text style={styles.thoiLuongBanner}> ⏳ 24 Phút/Tập</Text>
                        <Text style={styles.ngayPhatHanh}>📅 2024</Text>
                    </View>
                    <View style={styles.moTaBanner}>
                        <Text style={styles.moTaBannerText}>kdsodskdoskdoskdoasdoa áodkaosd sndad mnasidn ádnmasidnaids ád jidsjdi dsjdisdja sadjaisdja áda jsdiasjdi ádji</Text>
                    </View>
                    <Text style={styles.studioBanner}>🏢 Studio: HuyHoang</Text>

                    <View style={styles.genresRow}>
                        <Text style={styles.genresBanner}>📌 Thể loại:</Text>
                        <View style={styles.itemGenresBannerWrapper}>
                            <Text style={styles.itemGenresBanner}>Tình yêu</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.watchBTN}>
                        <Text style={styles.watchBTNText}>▶ Xem Phim</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </>
    );
}

export default FilmBanner;
