import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // //vacio es undefind

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
         //Cuando se envia un form este hace que la pagina se recargue por completo lo cual es malo porque react no recarga la pagina sino componentes, lo que se hace en este caso es quitar el evento de submit llamando la funcion handleSubmit
       
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//Nombre del componentes, al setCategories lo hace obligatorio :)

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
