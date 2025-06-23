import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import * as AuthServices from '../../services/AuthenticationService';
import * as authHooks from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

export default function LichSuGiaoDich() {
  const [listLichSuGiaoDichResult, setLichSuGiaoDichResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});


  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = await authHooks.getUserIdFromToken();
      if (!userId) return;
      await fetchApi(userId, page, 5);
    };

    fetchUserInfo();
  }, [page]); // ✅ CHỈ page thay đổi thì gọi API

  const fetchApi = async (userId, currentPage, currentLimit) => {
    setLoading(true);
    try {
      const result = await AuthServices.fetchLichSuGiaoDichs(userId, currentPage, currentLimit);
      if (result.status) {
        setLichSuGiaoDichResult(result.data);
        setPagination(result.pagination || {});
      } else {
        setLichSuGiaoDichResult([]);
        setPagination({});
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu người dùng:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Thời gian: {new Date(item.thoiGianGD).toLocaleString()}</Text>
      <Text style={styles.itemText}>Số tiền: {item.soTienGD?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
      <Text style={styles.itemText}>Nội dung: {item.noiDungGD}</Text>
      <Text style={styles.itemText}>Mô tả: {item.moTaGD}</Text>
      <Text style={styles.itemText}>Phương thức: {item.phuongThucGD}</Text>
      <Text style={styles.itemText}>Trạng thái: {item.trangThaiGD}</Text>
      <Text style={styles.itemText}>Mã đơn hàng: {item.maDonHang}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lịch Sử Giao Dịch</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={listLichSuGiaoDichResult}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}

      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={() => page > 1 && setPage(page - 1)}
          disabled={page <= 1}
          style={[styles.paginationButton, page <= 1 && { opacity: 0.5 }]}
        >
          <Text style={styles.paginationText}>Trước</Text>
        </TouchableOpacity>

        <Text style={styles.paginationText}>
          Trang {pagination.page} / {pagination.last}
        </Text>

        <TouchableOpacity
          onPress={() => page < pagination.last && setPage(page + 1)}
          disabled={page >= pagination.last}
          style={[styles.paginationButton, page >= pagination.last && { opacity: 0.5 }]}
        >
          <Text style={styles.paginationText}>Tiếp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    marginBottom: 75
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center'
  },
  itemContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: 'rgba(254, 95, 37, 0.73)',
    borderRadius: 8
  },
  itemText: {
    color: '#fff',
    marginBottom: 4
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 36,
  },
  paginationButton: {
    marginHorizontal: 12,
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 4
  },
  paginationText: {
    color: '#fff',
    fontSize: 16
  },
  backButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16

  }
});