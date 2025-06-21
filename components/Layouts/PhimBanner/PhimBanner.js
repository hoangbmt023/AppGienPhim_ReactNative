import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./PhimBannerStyles";
import { useNavigation } from "@react-navigation/native";

function PhimBanner({phimId}){

    const navigation = useNavigation();

    const HandlePress = () => {
        navigation.navigate('XemPhim',{
            id: phimId,
            slugtap: "tap-01"
        });
    }

    return(
        <View style={styles.bannerPhim}>
            <Image style={styles.bannerImage} source={{ uri: 'https://cdn.animevietsub.red/data/big_banner/2024/11/30/animevsub-02NnXF2KvW.jpeg' }}/>
            <View style={styles.backgroundOverlay}></View>
            <View style={styles.containerPhim}>
                <View style={styles.PhimInfoBanner}>
                    <View style={styles.phimPoster}>
                        <Image style={styles.imagePoster} source={{ uri: 'https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg' }}/>
                        <TouchableOpacity onPress={HandlePress} style={styles.phimWatch}>
                            <Text style={styles.phimWathText}>
                               ▶ Xem Phim
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.phimDetails}>
                        <Text style={styles.phimTitle}>Huy Hoàng</Text>
                        <Text style={styles.phimSubTitle}>Huy Hoàng</Text>
                        <Text style={styles.phimDescription}> hahahahahahah</Text>
                        
                        <View style={styles.rating}>
                            <Text style={styles.ratingScore}>20%</Text>
                            <Text style={styles.starts}>☆☆☆☆☆</Text>
                            <Text style={styles.reviews}> 20 Đánh Giá</Text>
                        </View>

                        <View style={styles.phimStats}>
                            <Text style={styles.thoiLuongP}>⏳ 24 Phút/Tập</Text>
                            <Text style={styles.ngayPhatHanh}>📅 2024</Text>
                            <Text style={styles.luotXem}>👁️ 2000 Lượt xem</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PhimBanner;