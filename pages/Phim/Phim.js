import {  FlatList, View } from "react-native";
import styles from "./PhimStyles.js";
import Notice from "../../components/Layouts/Notice/Notice";
import PhimBanner from "../../components/Layouts/PhimBanner/PhimBanner.js";
import BoxTitle from "../../components/Commons/BoxTitle.js";
import FilmList from "../../components/Layouts/FilmList/FilmList.js";
import TabsPhim from "../../components/Layouts/TabsPhim/TabsPhim.js";
import { useRoute } from "@react-navigation/native";


function Phim(){

    const route = useRoute();
    const {id} = route.params;

    return(
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    <PhimBanner phimId={id}/>
                    <TabsPhim/>
                    <BoxTitle>Phim Liên Quan</BoxTitle>
                    <FilmList/>
                </View>
            }
        />
    );
}

export default Phim;