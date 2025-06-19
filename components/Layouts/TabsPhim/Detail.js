import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './TabsPhimStyles';
const data = {
  theLoai: [
    { theLoaiId: 1, tenTL: "Haha" },
    { theLoaiId: 2, tenTL: "Haha2" }
  ],
  quocGia: [
    { quocGiaId: 1, tenQG: "kkkk" },
    { quocGiaId: 2, tenQG: "kkkk2" }
  ],
  thoiLuongP: "2phut/tap",
  luotThichP: 2,
  luotDislikeP: 2,
  tenCTSXP: "Công ty ABC"
};


const dataTap = [
    {tenFile: "1"},
    {tenFile: "2"}
]


function Detail(/*{ data, dataTap }*/) {
  const [tapMoiNhat, setTapMoiNhat] = useState(null);
  const [dataTheLoai, setDataTheLoai] = useState([]);
  const [dataQuocGia, setDataQuocGia] = useState([]);

  useEffect(() => {
    if (dataTap?.length) {
      setTapMoiNhat(dataTap[dataTap.length - 1].tenFile);
    }
    if (data?.theLoai) setDataTheLoai(data.theLoai);
    if (data?.quocGia) setDataQuocGia(data.quocGia);
  }, [data, dataTap]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.label}>Tập mới: </Text>
        <Text style={styles.tag}>{tapMoiNhat}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Thể loại: </Text>
        {dataTheLoai.map(item => (
          <Text key={item.theLoaiId} style={styles.genres}> {item.tenTL}</Text>
        ))}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Quốc gia: </Text>
        {dataQuocGia.map(item => (
          <Text key={item.quocGiaId} style={styles.country}> {item.tenQG}</Text>
        ))}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Thời lượng: </Text>
        <Text style={styles.label}>{data.thoiLuongP}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Lượt like: </Text>
        <Text style={[styles.tag, styles.tagHD]}>{data.luotThichP}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Lượt dislike: </Text>
        <Text style={[styles.tag, styles.tagPG]}>{data.luotDislikeP}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cty sản xuất: </Text>
        <Text style={styles.label}>{data.tenCTSXP}</Text>
      </View>
    </View>
  );
}
export default Detail;