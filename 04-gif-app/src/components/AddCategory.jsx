// import React from 'react'; // no hace falta pq ya está por default
import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState(
        'Dragon Ball',
    );

    const onChangeConst = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); // para que no refresh el navegador
        console.log(event);
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Find gifs"
                // value={inputValue}
                onChange={ onChangeConst }
            />
        </form>
    )
}
