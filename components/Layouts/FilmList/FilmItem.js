import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./FilmListStyles";
import { useNavigation } from "@react-navigation/native";
function FilmItem({data,type}){
    const navigation = useNavigation();

    const handlePress = () => {
        if(type === "search"){
            navigation.navigate("Home", {
            screen: "Phim",
            params: { id: data.phimId }
            });
        }else{
            navigation.navigate("Phim",{
                id: data.phimId
            });
        }
    }

    return(
        <View style={styles.filmItem}>
            <TouchableOpacity style={styles.filmTitle} onPress={handlePress}>
                <Image style={styles.filmImage} source={{uri: data.avatarPoster}}/>
                <Text style={styles.filmName} numberOfLines={1} ellipsizeMode="tail">{data.tenP}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FilmItem;