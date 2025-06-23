import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './TabsPhimStyles';

function Character({data}) {
  const [dataDienVien, setDataDienVien] = useState([]);

  useEffect(() => {
    if (data?.dienVien) {
      setDataDienVien(data.dienVien);
    }
  }, [data]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text>👤</Text>
      </View>
      <Text style={styles.name}>{item.tenDV}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhân vật:</Text>
      <FlatList
        data={dataDienVien}
        keyExtractor={(item) => item.dienVienId.toString()}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
}
export default Character;