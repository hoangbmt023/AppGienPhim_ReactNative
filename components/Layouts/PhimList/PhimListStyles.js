import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30,
  },

  row: {
    justifyContent: 'center',
    gap: 20, // Chỉ hoạt động từ RN 0.71+
    marginBottom: 20,
  },

  item: {
    width: 150,
    height: "auto",
    backgroundColor: '#444',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 10,
    position: 'relative',
    paddingBottom: 10
  },

  episodeLabel: {
    position: "absolute",
    top: 6,
    right: 8,
    backgroundColor: "red",
    borderRadius: 21, // dùng giá trị số thay cho '50%' để tạo hình tròn
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  episodeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: 'center',
  },

  bannerPhim: {
    width: 130,
    height: 200,
    alignItems: "center",
  },

  imagePhim: {
    width: "100%",
    height: 164,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5,
  },

  tenPhim: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  historyText: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },

  watchContinue: {
    marginTop: 20,
    color: 'white',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
    backgroundColor: "red",
    padding: 5,
    borderRadius: 6
  },
  viewCount:{
    color: "yellow",
    marginTop: 6
  }
});

export default styles;
