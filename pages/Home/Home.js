import React from "react";
import { FlatList, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // 👈 Thêm dòng này

import styles from './HomeStyles.js';
import { useEffect, useState } from "react";

import Notice from "../../components/Layouts/Notice/Notice.js";
import BoxTitle from "../../components/Commons/BoxTitle.js";
import FilmList from "../../components/Layouts/FilmList/FilmList.js";
import FilmBannerList from "../../components/Layouts/FilmBannerList/FilmBannerList.js";
import PhimList from "../../components/Layouts/PhimList/PhimList.js";
import RenderPagination from "../../components/Commons/RenderPagination.js";
import SeeMore from "../../components/Commons/SeeMore.js";
import FilmRanking from "../../components/Layouts/FilmRanking/FilmRanking.js";
import * as authHooks from "../../hooks/auth.js"

function Home() {
    const navigation = useNavigation(); // 👈 Lấy navigation object

    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState();


    useEffect(() => {
        const d = async () => {
            const userid = authHooks.getUserIdFromToken();
            console.log(userid);
        }
        d();
    },[])


    return (
        <FlatList
            data={[1]}
            renderItem={null}
            keyExtractor={() => "dummy"}
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    <BoxTitle>NEW</BoxTitle>
                    <FilmList top={3} page={1} limit={10} />
                    <FilmBannerList page={1} limit={5} />
                    <BoxTitle>All Phim</BoxTitle>
                    <PhimList page={currentPage} limit={10} onPagination={setPagination} />
                    <RenderPagination data={pagination} onPageChange={setCurrentPage} />
                    <SeeMore>Xem Thêm</SeeMore>
                    <FilmRanking>Top Lượt Xem</FilmRanking>
                </View>
            }
        />
    );
}

export default Home;
