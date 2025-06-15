import React from 'react';
import { View, FlatList, StyleSheet, Text, Dimensions } from 'react-native';
import styles from './PhimListStyles';

const data = [1, 2, 3, 4, 5, 6, 7, 8]; // ví dụ danh sách anime

const ITEM_WIDTH = 180;
const numColumns = Math.floor(Dimensions.get('window').width / ITEM_WIDTH);

export default function PhimList() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={{ color: 'white' }}>Anime {item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
  );
}

