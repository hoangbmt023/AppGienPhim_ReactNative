import { Text, View } from "react-native";

import styles from "./FilmRankingStyles.js"


const rank = [
    {phim: "Thăng Cấp 1 Mình"},
    {phim: "Blue Box"}
];
function FilmRanking({children}){
    return(
        <View style={styles.siderbar}>
            <Text style={styles.title}>{children}</Text>
            {rank.map((item,index) => (
                <Text key={index} style={styles.ranking}># {item.phim}</Text>
            ))}
        </View>
    );
}

export default FilmRanking;

