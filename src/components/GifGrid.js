import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
/*MI ENTENDIMIENTO 
    Primero hacemos la peticion fetch con el async y el await, obnetemos los datos de la API y los filtramos para que solo traiga el id,title,url pero esto se saca de la data para despues ser mapeada y el array que te regresa se pone con la const gif la cual se va al setImages del hook y de ahi a la const de images para despues sacar sus propiedades  
  const [images, setImages] = useState([]);
  Este hook hace que no se vuelva a ejecutar la peticion porque tenemos un boton que agrega al contador un numero y por eso recarga el componente pero si usamos este hook la peticion solo se hara 1 vez
  useEffect(() => {
    importamos el getGifts y como retorna una promesa usamos el then 
    getGifts(category).then(setImages)
  }, [category]); 
  cambio de nombre*/

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
