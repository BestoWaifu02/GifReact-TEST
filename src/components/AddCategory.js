import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        
       
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 /* Cuando se envia un form este hace que la pagina se recargue por completo lo cual es malo porque react no recarga la pagina sino componentes, lo que se hace en este caso es quitar el evento de submit llamando la funcion handleSubmit

 Nombre del componentes, al setCategories lo hace obligatorio :) */