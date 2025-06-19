import {  FlatList, View } from "react-native";
import styles from "./XemPhimStyles";
import Notice from "../../components/Layouts/Notice/Notice";

function XemPhim(){
    return(
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />
                    
                </View>
            }
        />
    );
}

export default XemPhim;