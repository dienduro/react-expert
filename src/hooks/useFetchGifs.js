import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data : [],
        loading:true
    });
    useEffect(()=>{
        getGifs(category)
        .then(cargarData =>{
            
                setstate({
                    data : cargarData,
                    loading:false
                });
            
        })
    },[category])
    /*  */

    return state;
}
