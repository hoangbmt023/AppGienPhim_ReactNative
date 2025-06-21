import {  FlatList, View } from "react-native";
import styles from "./XemPhimStyles";
import Notice from "../../components/Layouts/Notice/Notice";
import FilmTap from "../../components/Layouts/FilmVideo/FilmTap";
import FilmVideo from "../../components/Layouts/FilmVideo/FilmVideo";
import { useRoute } from "@react-navigation/native";

function XemPhim(){
    const route = useRoute();
    const {id,slugtap} = route.params;
    return(
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    <FilmVideo id={id} tap={slugtap} userId={111}></FilmVideo>
                </View>
            }
        />
    );
}

export default XemPhim;