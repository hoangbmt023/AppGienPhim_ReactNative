import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./PhimBannerStyles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as managerServices from "../../../services/ManagerService"
import { formatYear } from "../../../utils/Format";

function PhimBanner({phimId}){

    const navigation = useNavigation();

    

    const [rating,setRating] = useState("0");
    const [dataPhim,setDataPhim] = useState([]);
    const [dataTap,setDataTap] = useState([]);

    useEffect(() => {
        if(phimId == null){
            return;
        }

        const fetchApi = async () => {
            const result = await managerServices.Phim(phimId);
            setDataPhim(result.data);
            setDataTap(result.tapCuaPhim);
        }
        fetchApi();
    },[phimId])

    useEffect(() => {
        if(!dataPhim){
            return;
        }

        const rate = ((dataPhim.luotThichP / (dataPhim.luotThichP + dataPhim.luotDislikeP))*10).toFixed(1);
        if(isNaN(rate)){
            setRating("0")
        }else{
            setRating(rate);
        }

    },[dataPhim])

    const HandlePress = () => {
        navigation.navigate('XemPhim',{
            id: phimId,
            tap: "tap-01"
        });
    }

    return(
        <View style={styles.bannerPhim}>
            <Image style={styles.bannerImage} source={{ uri: dataPhim.avatarP }}/>
            <View style={styles.backgroundOverlay}></View>
            <View style={styles.containerPhim}>
                <View style={styles.PhimInfoBanner}>
                    <View style={styles.phimPoster}>
                        <Image style={styles.imagePoster} source={{ uri: dataPhim.avatarPoster }}/>
                        <TouchableOpacity onPress={HandlePress} style={styles.phimWatch}>
                            <Text style={styles.phimWathText}>
                               ▶ Xem Phim
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.phimDetails}>
                        <Text style={styles.phimTitle}>{dataPhim.tenP}</Text>
                        <Text style={styles.phimSubTitle}>{dataPhim.tenP}</Text>
                        <Text style={styles.phimDescription}>{dataPhim.moTaP}</Text>
                        
                        <View style={styles.rating}>
                            <Text style={styles.ratingScore}>{rating}</Text>
                            <Text style={styles.starts}>☆☆☆☆☆</Text>
                            <Text style={styles.reviews}> {`( ${dataPhim.luotThichP + dataPhim.luotDislikeP} )`} Đánh Giá</Text>
                        </View>

                        <View style={styles.phimStats}>
                            <Text style={styles.thoiLuongP}>⏳ {dataPhim.thoiLuongP}</Text>
                            <Text style={styles.ngayPhatHanh}>📅 {formatYear(dataPhim.ngayPhatHanhP)}</Text>
                            <Text style={styles.luotXem}>👁️ {dataPhim.luotXemP} Lượt xem</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PhimBanner;