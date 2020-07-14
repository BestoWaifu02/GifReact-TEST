import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
/*  const categories=['samurai X','One punch','SAO']
  const [categories, setcategories] = useState([
    "samurai X",
    "One punch",
    "SAO",
  ]);
  const handleAdd = () => {
      //Para agregar un valor al array no se usa el push porque se esta mutando el objeto pero esa es una mala practica, para eso  se usa el useState
    //categories.push('Tokyo Ghoul')
  
    //Al usar el setcategories de esta forma se jode el estado del anterior porque crea uno nuevo

    setcategories('Tokyo Ghoul')

    //El set categories al ser un callback lo puedes manejar de esta forma
    setcategories(cats=>[...cats,'Tokyo Ghoul'])
}; */
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Akame Ga Kill']);
 
    return (
        <>
            <h2>App By BestoWaifu02 (Diego Robledo Mendoza)</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
