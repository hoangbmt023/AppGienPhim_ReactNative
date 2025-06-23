import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const utilities = [
  {
    title: 'Lịch sử giao dịch',
    icon: 'reader-outline',
    navigateTo: 'LichSuGiaoDich',
  },
  {
    title: 'Nạp tiền',
    icon: 'wallet-outline',
    navigateTo: 'NapTien',
  },
  {
    title: 'Đổi mật khẩu',
    icon: 'key-outline',
    navigateTo: 'ChangePassword',
  },
  {
    title: 'Gói thành viên',
    icon: 'ribbon-outline',
    navigateTo: 'GoiThanhVien',
  },
];

export default function AccountUtilities({ data }) {
  const navigation = useNavigation();

  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Tiện ích tài khoản</Text>
        <Text style={{ color: '#ccc' }}>Vui lòng đăng nhập để sử dụng các tiện ích.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Tiện ích tài khoản</Text>
        {utilities.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => navigation.navigate(item.navigateTo)}
          >
            <View style={styles.iconLabel}>
              <Icon name={item.icon} size={22} color="#ff2f2f" style={{ marginRight: 10 }} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
