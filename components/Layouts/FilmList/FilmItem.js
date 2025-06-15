import { Image, Text, TouchableOpacity, View } from "react-native";
import posterP from "../../../assets/img/test.png"
import styles from "./FilmListStyles";
function FilmItem(){
    return(
        <View style={styles.filmItem}>
            <TouchableOpacity style={styles.filmTitle}>
                <Image style={styles.filmImage} source={{uri: 'https://cdn.animevietsub.lol/data/poster/2025/04/06/animevsub-BkieXOZO6L.jpg'}}/>
                <Text style={styles.filmName}>Huy Hoang</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FilmItem;