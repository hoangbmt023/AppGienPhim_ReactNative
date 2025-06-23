import { View, FlatList, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import styles from './PhimListStyles';
import { useEffect, useState } from 'react';
import * as managerServices from "../../../services/ManagerService";
import { useNavigation } from '@react-navigation/native';
import { formatDateTime } from '../../../utils/Format';

const ITEM_WIDTH = 180;
const numColumns = Math.floor(Dimensions.get('window').width / ITEM_WIDTH);

export default function PhimList({ userId, timtheo, page, limit, webpage, onPagination, typePhim }) {
  const [listPhimResult, setListPhimResult] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        let result;
        if (webpage === "History") {
          result = await managerServices.LichSuXemUser(userId, page, limit);
        } else if (webpage === "SearchPhim") {
          if (typePhim === "TheLoai") {
            result = await searchServices.searchTheLoaiSlug(timtheo, page, limit);
          } else if (typePhim === "QuocGia") {
            result = await searchServices.searchQuocGiaSlug(timtheo, page, limit);
          } else if (typePhim === "DangPhim") {
            result = await searchServices.searchDangPhimSlug(timtheo, page, limit);
          } else if (typePhim === "TopPhim") {
            result = await searchServices.searchTopPhim(page, limit);
          } else if (typePhim === "Search") {
            result = await managerServices.searchphim(timtheo,page, limit);
          }
        } else {
          result = await managerServices.GetAllPhim(page, limit);
        }

        if (result && result.data) {
          setListPhimResult(result.data);
          onPagination(result.pagination);
        }
      } catch (error) {
        console.error("Lỗi khi tải danh sách phim:", error);
      }
    };

    fetchApi();
  }, [webpage, userId, page, limit, timtheo, typePhim, onPagination]);

  const HandlePress = (phimId) => {
    
    if(webpage === "History" || webpage === "SearchPhim"){
      navigation.navigate("Home", {
        screen: "Phim",
        params: { id: phimId }
      });
    }
    else{
      navigation.navigate("Phim", {
         id: phimId
      });
    }
  };

  const renderItem = ({ item }) => (
    <View key={item.phimId} style={styles.item}>
      <View style={styles.episodeLabel}>
        <Text style={styles.episodeText}>Tập {item.soTapP}</Text>
      </View>

      <TouchableOpacity onPress={() => HandlePress(item.phimId)} style={styles.bannerPhim}>
        <Image style={styles.imagePhim} source={{ uri: item.avatarP }} />
        <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: 'white', textAlign: "center" }}>{item.tenP}</Text>
      </TouchableOpacity>

      {webpage === "History" ? (
        <>
          <Text style={styles.historyText}>Đã xem tập: {item.slugTapXem}</Text>
          <Text style={styles.historyText}>Lúc: {formatDateTime(item.thoiGianXem)}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home", { screen: "XemPhim", params:{id: item.phimId, tap: item.slugTapXem }})}>
            <Text style={styles.watchContinue}>▶ Xem tiếp</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.viewCount}>👁 {item.luotXemP} lượt xem</Text>
      )}
    </View>
  );

  return (
    <FlatList
      data={listPhimResult}
      renderItem={renderItem}
      keyExtractor={(item) => item.phimId.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
  );
}