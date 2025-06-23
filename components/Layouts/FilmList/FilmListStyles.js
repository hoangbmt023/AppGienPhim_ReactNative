import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  filmList: {
    display:"flex",
    flexDirection: "row",
    paddingBottom: 30, 
    rowGap: 10, // chỉ được hỗ trợ nếu dùng trên View dạng layout column
  },
  filmItem: {
    backgroundColor: "#333",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 100, // hoặc giá trị số như 300
    alignItems: "center", // để canh giữa nội dung (thay vì textAlign)
  },
  filmImage: {
    width: 80,
    height: 130,
    borderRadius: 10,
    resizeMode: "cover", // ✅ tương đương object-fit: cover
  },
  filmTitle: {
    color: "red",
    textAlign: "center",

  },
  filmName:{
    color: "white",
    marginTop: 5,
    textAlign: "center"
  }

});

export default styles;
