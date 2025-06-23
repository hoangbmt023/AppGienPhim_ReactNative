import { View } from "react-native";
import styles from "./FilmListStyles";
import FilmItem from "./FilmItem";
import { useEffect, useState } from "react";
import * as managerServices from "../../../services/ManagerService" 

function FilmList({top,page,limit}){
     const[newPhimsResult,setNewPhimsResult] = useState([]);

    useEffect(() => {
        const  fetchApi = async () => {
            const result = await managerServices.GetNewPhim(top,page,limit);
            setNewPhimsResult(result.data)
        }
        fetchApi();
    },[top,page,limit])

    return(
        <View style={styles.filmList}>
            {newPhimsResult.map((res) => (
                <FilmItem key={res.phimId} data={res}/>
            ))}
        </View>
    );
}

export default FilmList;