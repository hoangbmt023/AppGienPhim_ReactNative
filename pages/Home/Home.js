import React from "react";
import { FlatList, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // 👈 Thêm dòng này

import styles from './HomeStyles.js';
import Notice from "../../components/Layouts/Notice/Notice.js";
import BoxTitle from "../../components/Commons/BoxTitle.js";
import FilmList from "../../components/Layouts/FilmList/FilmList.js";
import FilmBannerList from "../../components/Layouts/FilmBannerList/FilmBannerList.js";
import PhimList from "../../components/Layouts/PhimList/PhimList.js";
import RenderPagination from "../../components/Commons/RenderPagination.js";
import SeeMore from "../../components/Commons/SeeMore.js";
import FilmRanking from "../../components/Layouts/FilmRanking/FilmRanking.js";

function Home() {
    const navigation = useNavigation(); // 👈 Lấy navigation object

    const data = [
        { id: 1, ten: "HuyHoang", Avatar: "https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg", tap: 12 },
        { id: 2, ten: "HuyHoang2", Avatar: "", tap: 2 },
        { id: 3, ten: "HuyHoang3", Avatar: "", tap: 3 },
    ];

    return (
        <FlatList
            data={[1]}
            renderItem={null}
            keyExtractor={() => "dummy"}
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    <BoxTitle>NEW</BoxTitle>
                    <FilmList />
                    <FilmBannerList />
                    <BoxTitle>All Phim</BoxTitle>
                    <PhimList />
                    <RenderPagination data={data} />
                    <SeeMore>Xem Thêm</SeeMore>
                    <FilmRanking>Top Lượt Xem</FilmRanking>

                    {/* ✅ Nút chuyển trang */}
                    <Button
                        title="Chuyển sang Gói Thành Viên"
                        onPress={() => navigation.navigate("GoiThanhVien")}
                    />
                </View>
            }
        />
    );
}

export default Home;
