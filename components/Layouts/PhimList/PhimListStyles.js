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

  episodeLabel:{
    position: "absolute",
    top: 6,
    right: 8,
    backgroundColor: "red",
    color: "white",
    width:"auto",
    height: "auto",
    minHeight: 42,
    minWidth: 42,
    borderRadius: "50%",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 1.2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 10,
    fontFamily: "sans-serif"
  },

  episodeText:{
    color: "white" ,
    fontWeight: "500",
    fontSize: 11.5
  },

  bannerPhim:{
    width: 130,
    height:"auto",
    alignItems: "center"
  },

  imagePhim:{
    width: "99%",
    borderRadius: 10,
    marginBottom: 5,
    objectFit: "cover",
    height: 180
  }
});

export default styles;