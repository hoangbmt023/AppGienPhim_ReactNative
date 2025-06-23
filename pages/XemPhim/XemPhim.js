import {  FlatList, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import styles from "./XemPhimStyles";
import Notice from "../../components/Layouts/Notice/Notice";
import FilmTap from "../../components/Layouts/FilmVideo/FilmTap";
import FilmVideo from "../../components/Layouts/FilmVideo/FilmVideo";
import * as authHooks from "../../hooks/auth"
import * as managerServices from "../../services/ManagerService"
import FilmBanner from "../../components/Layouts/FilmBannerList/FilmBanner";
import BoxTitle from "../../components/Commons/BoxTitle";

function XemPhim(){

    const[userId,setUserId] = useState("");
    const[dataPhim,setDataPhim] = useState([]);

    const route = useRoute();
    const {id,tap} = route.params;

    useEffect(() => {

        const getUserId = async () =>{
            const IdND = await authHooks.getUserIdFromToken();
            setUserId(IdND);
        }
        getUserId();
    },[])
    useEffect(() => {

            const getUserById = async () =>{
                const dataPhim = await managerServices.Phim(id);
                setDataPhim(dataPhim.data);
            }
            getUserById();
        },[userId])
    return(
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    <FilmVideo  id={id} tap={tap} userId={userId}></FilmVideo>
                    <FilmBanner data={dataPhim} />
                    <BoxTitle>Phim Liên Quan</BoxTitle>
                </View>
            }
        />
    );
}

export default XemPhim;