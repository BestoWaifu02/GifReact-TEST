import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
//los efectos no pueden ser async
        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])


/* setTimeout(()=>{
        setstate({ data:[1,2,3,4,5],
            loading:false,
        })
    },3000) */

    return state; // { data:[], loading: true };
//regresa la data que es array y el loading en true

}


