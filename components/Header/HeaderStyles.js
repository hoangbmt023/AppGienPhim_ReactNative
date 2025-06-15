import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default styles;
