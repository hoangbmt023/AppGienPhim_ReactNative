import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./FilmListStyles";
import { useNavigation } from "@react-navigation/native";
function FilmItem(){
    const navigation = useNavigation();
    
    const handlePress = () => {
        navigation.navigate("Phim")
    }

    return(
        <View style={styles.filmItem}>
            <TouchableOpacity style={styles.filmTitle} onPress={handlePress}>
                <Image style={styles.filmImage} source={{uri: 'https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg'}}/>
                <Text style={styles.filmName}>Huy Hoang</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FilmItem;