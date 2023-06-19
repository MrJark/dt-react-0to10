// import React from 'react'; // no me hace falta importarlo porque ya está por defecto (solo ytan solo este)
import { useState } from 'react';
import './style.css';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

    const newCategory = 'Pokemon'; // parte de la tarea
    // Hook: ⬇️ -> estos no pueden ir entre condicionales
    const [categories, setCategories] = useState([ // useStateSnippet - espacio en momoria para almacenar las categorías

        'Dragon Ball',
        'One Piece',

    ]);
    const onAddCategory = (title) => {
        // Tarea: añadir una nueva categoria al useState (conseguido)
        setCategories([ // mi forma para la tarea es esta
            ...categories,
            newCategory,
        ]);
        // otras formas de hacer la tarea⬇️
        // setCategories( cat => [...cat, 'Valorant']);
    };

    return(
        <>
            {/* Titulo */}
            <h1>GifApp</h1>
            {/* Input */}
            <AddCategory
                setCategories = { setCategories }
            />
            {/* <input type="text" placeholder='Add category' /> */}
            {/* <button onClick={onAddCategory}>Add</button> */}
            <ul>
                { categories.map( category => { // .map devuelve un nuevo arreglo haciendo la modifi.que quieras. En este caso, que devuelve las categories
                    return <li key={category}>{category}</li>
                })}
                
            </ul>
            {/* Lista de Gifs */}
                {/* Gifs Items */}
        </>
    )
}