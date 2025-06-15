import {  ScrollView, View } from "react-native";
import styles from './HomeStyles.js'
import Notice from "../../components/Layouts/Notice/Notice.js";
import BoxTitle from "../../components/Commons/BoxTitle.js";
import FilmList from "../../components/Layouts/FilmList/FilmList.js";
import FilmBannerList from "../../components/Layouts/FilmBannerList/FilmBannerList.js";
import PhimList from "../../components/Layouts/PhimList/PhimList.js";

function Home(){
    return(
        <ScrollView >
            <View style={styles.containerMain} >
                <Notice/>

                <BoxTitle>NEW</BoxTitle>

                <FilmList/>

                <FilmBannerList/>
                
                <BoxTitle>All Phim</BoxTitle>

                <PhimList></PhimList>
            </View>
        </ScrollView>
    );
}

export default Home;