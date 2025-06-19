import { View, FlatList, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import styles from './PhimListStyles';

const data = [
  { id: 1, ten: "HuyHoang", Avatar: "https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg", tap: 12 },
  { id: 2, ten: "HuyHoang2", Avatar: "https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg", tap: 2 },
  { id: 3, ten: "HuyHoang3", Avatar: "https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg", tap: 3 },
];

const ITEM_WIDTH = 180;
const numColumns = Math.floor(Dimensions.get('window').width / ITEM_WIDTH);

export default function PhimList() {
  const renderItem = ({ item , index}) => (
    <View key={item.id} style={styles.item}>
      <View style={styles.episodeLabel}>
        <Text style={styles.episodeText}>
          Tập {item.tap}
        </Text>
      </View>

      <TouchableOpacity style={styles.bannerPhim} >
        <Image style={styles.imagePhim}  source={{uri: item.Avatar }}/>
        <Text style={{ color: 'white' }}>{item.ten}</Text>
      </TouchableOpacity>

    </View>
);


  return (
    <FlatList
      data={data} // dữ liệu 
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
  );
}

