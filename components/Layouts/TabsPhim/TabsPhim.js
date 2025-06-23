import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './TabsPhimStyles';
import Detail from './Detail';
import Character from './Character';
import Trailer from './Trailer';
import Avatar from './Avatar';
import * as managerServices from "../../../services/ManagerService"

function TabsPhim({ id }) {
  const [activeTab, setActiveTab] = useState('info');
  const [dataPhim, setDataPhim] = useState([]);
  const [dataTap, setDataTap] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchApi = async () => {
      const result = await managerServices.Phim(id);
      setDataPhim(result.data);
      setDataTap(result.tapCuaPhim);
    };
    fetchApi();
  }, [id]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'info' && styles.activeTab]}
          onPress={() => setActiveTab('info')}
        >
          <Text style={styles.tabText}>📄 Thông tin phim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'characters' && styles.activeTab]}
          onPress={() => setActiveTab('characters')}
        >
          <Text style={styles.tabText}>🎭 Nhân vật</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'trailer' && styles.activeTab]}
          onPress={() => setActiveTab('trailer')}
        >
          <Text style={styles.tabText}>🎥 Trailer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'avatar' && styles.activeTab]}
          onPress={() => setActiveTab('avatar')}
        >
          <Text style={styles.tabText}>📸 Hình ảnh</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.content}>
        {activeTab === 'info' && <Detail data={dataPhim} dataTap={dataTap} />}
        {activeTab === 'characters' && <Character data={dataPhim} />}
        {activeTab === 'trailer' && <Trailer data={dataPhim} />}
        {activeTab === 'avatar' && <Avatar data={dataPhim} />}
      </View>
    </View>
  );
}

export default TabsPhim;
