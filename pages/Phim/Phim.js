import {  FlatList, View } from "react-native";
import styles from "./PhimStyles.js";
import Notice from "../../components/Layouts/Notice/Notice";
import PhimBanner from "../../components/Layouts/PhimBanner/PhimBanner.js";
import BoxTitle from "../../components/Commons/BoxTitle.js";
import FilmList from "../../components/Layouts/FilmList/FilmList.js";
import TabsPhim from "../../components/Layouts/TabsPhim/TabsPhim.js";

function Phim(){
    return(
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    <PhimBanner/>
                    <TabsPhim/>
                    <BoxTitle>Phim Liên Quan</BoxTitle>
                    <FilmList/>
                </View>
            }
        />
    );
}

export default Phim;