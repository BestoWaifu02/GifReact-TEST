import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  //Cuando se llama tenemos un estado inicial
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //Tenemos un effect
  useEffect(() => {
    //esperamos tener las imagenes
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
/* los efectos no pueden ser async
 setTimeout(()=>{
        setstate({ data:[1,2,3,4,5],
            loading:false,
        })
    },3000) 

 { data:[], loading: true };
regresa la data que es array y el loading en true */
