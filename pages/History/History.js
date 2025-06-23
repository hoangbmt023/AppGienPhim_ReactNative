import { FlatList, View, Text } from "react-native";
import { useEffect, useState } from "react";

import Notice from "../../components/Layouts/Notice/Notice";
import BoxTitle from "../../components/Commons/BoxTitle";
import RenderPagination from "../../components/Commons/RenderPagination";
import * as authHooks from "../../hooks/auth.js"
import styles from "./HistoryStyles.js"
import PhimList from "../../components/Layouts/PhimList/PhimList.js";

function History(){
    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const fetchUserId = async () => {
            const uId = await authHooks.getUserIdFromToken();
            setUserId(uId);
        };
        fetchUserId();
    }, []);

    return (
        <FlatList
            data={[1]} // dữ liệu giả, chỉ để FlatList hoạt động
            renderItem={() => null} // không cần hiển thị item nào
            keyExtractor={() => "dummy"} // key cho phần tử giả
            ListHeaderComponent={
                <View style={styles.containerMain}>
                    <Notice />

                    <BoxTitle>Lịch Sử Xem Phim:</BoxTitle>

                    {userId ? (
                        <>
                            <PhimList
                                userId={userId}
                                page={currentPage}
                                limit={10}
                                webpage={"History"}
                                onPagination={setPagination}
                            />
                            <RenderPagination
                                data={pagination}
                                onPageChange={setCurrentPage}
                            />
                        </>
                    ) : (
                        <Text style={{ color: "gray", marginTop: 20, textAlign: "center" }}>
                            Bạn chưa đăng nhập để xem lịch sử.
                        </Text>
                    )}
                </View>
            }
        />
    );
}

export default History;
