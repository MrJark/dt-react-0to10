// import React from 'react'; // no hace falta pq ya está por default
import { useState } from 'react';

// Tarea: renderizar lo que se manda en el input y llevarlo al setCategories (no conseguido porque no me he acordado de que existian las props)
// Las props pueden llamar los elementos del padre, GifApp, al componente hijo, AddCategory, por tanto, desestruturas las props como category y setCategory
export const AddCategory = ({ onNewCategory }) => {

    
    const [inputValue, setInputValue] = useState();

    const onChangeConst = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); // para que no refresh el navegador
        // console.log(inputValue);
        if( inputValue.trim().length <= 1 ) return; // para decir que no añada nada que tenga menos de un caracter, quitando espacios

        // setCategories( categories => [inputValue, ...categories] );// Tarea
        setInputValue(''); // para borrar el input cada vez que das enter
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Find gifs"
                value={inputValue}
                onChange={ onChangeConst }
            />
        </form>
    )
}
