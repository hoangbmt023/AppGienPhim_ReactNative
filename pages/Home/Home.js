
import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";

import styles from './HomeStyles.js'
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
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
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