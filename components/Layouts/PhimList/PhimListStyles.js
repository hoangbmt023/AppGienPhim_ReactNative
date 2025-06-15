import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30,
  },
  row: {
    justifyContent: 'center', // căn giữa các cột
    gap: 20, // khoảng cách giữa các cột (chỉ hoạt động RN 0.71+)
    marginBottom: 20,
  },
  item: {
    width: 150,
    height: 220,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default styles;