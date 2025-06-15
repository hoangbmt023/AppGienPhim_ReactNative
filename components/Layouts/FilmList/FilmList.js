import { View } from "react-native";
import styles from "./FilmListStyles";
import FilmItem from "./FilmItem";

function FilmList(){
    return(
        <View style={styles.filmList}>
            <FilmItem/>
            <FilmItem/>
            <FilmItem/>
        </View>
    );
}

export default FilmList;