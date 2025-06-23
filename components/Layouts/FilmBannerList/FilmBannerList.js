import { View } from "react-native";
import FilmBanner from "./FilmBanner";
import { useEffect, useState } from "react";

import * as managerServices from "../../../services/ManagerService"
function FilmBannerList({page,limit}){
    const [listMostViewsPhimResult,setListMostViewsPhimResult] = useState([]); // top lượt xem phim


    useEffect(() => {
            
            const fetchApi = async () => {
                
                const result = await managerServices.GetTopPhimByLuotXem(page,limit);
                setListMostViewsPhimResult(result.data);
            }
    
            fetchApi();
            
        },[]);

    return(
        <>
            {listMostViewsPhimResult.map((res) => (
                <FilmBanner key={res.phimId} data={res}/>
            ))}
        </>
    );
}

export default FilmBannerList;