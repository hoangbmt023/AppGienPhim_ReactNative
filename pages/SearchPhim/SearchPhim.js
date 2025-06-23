import { FlatList, View } from "react-native";
import Notice from "../../components/Layouts/Notice/Notice";
import BoxTitle from "../../components/Commons/BoxTitle";
import PhimList from "../../components/Layouts/PhimList/PhimList";
import { useState } from "react";
import RenderPagination from "../../components/Commons/RenderPagination";
import { useRoute } from "@react-navigation/native";
import styles from "./SearchPhimStyles"

function SearchPhim(){

    const route = useRoute();
    const {type,timtheo} = route.params;

    const [pagination,setPagination] = useState([]);
    const [currentPage,setCurrentPage] = useState();

    return(
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />

                    <BoxTitle>Bạn Đang tìm phim theo: {timtheo}</BoxTitle>

                    <PhimList typePhim = {type} timtheo = {timtheo} page={currentPage} limit={18} webpage={'SearchPhim'} onPagination={setPagination}/>
                
                    <RenderPagination data={pagination} onPageChange={setCurrentPage}/>
                </View>
            }
        />
    );
}

export default SearchPhim;