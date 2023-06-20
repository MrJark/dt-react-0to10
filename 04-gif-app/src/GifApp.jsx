// import React from 'react'; // no me hace falta importarlo porque ya está por defecto (solo ytan solo este)
import { useState } from 'react';
import './style.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    // const newCategory = 'Pokemon'; // parte de la tarea
    // Hook: ⬇️ -> estos no pueden ir entre condicionales
    const [categories, setCategories] = useState([ // useStateSnippet - espacio en momoria para almacenar las categorías

        'Dragon Ball',
        // 'One Piece',

    ]);
    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        // const categoryExist = categories.some(exist => exist.toLowerCase() === newCategory); // he intentado hacer el lowerCase para cuando sean iguales al ponerlas en minus pero no lo he conseguido
        if(categories.includes(newCategory) ) return; // esta linea impide que se creen nuevas categorias iguales a las existentes, indistintamente de los espacios que tengan delante y detrás gracias al trim()

        // Tarea: añadir una nueva categoria al useState (conseguido)
        setCategories([ ...categories, newCategory ]); // mi forma para la tarea es esta
        // otras formas de hacer la tarea⬇️
        // setCategories( cat => [...cat, 'Valorant']);
    };

    return(
        <>
            {/* Titulo */}
            <h1>GifApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories = { setCategories } // No me sirve ya 
                onNewCategory = { (value) => onAddCategory(value) }
            />
            {/* <input type="text" placeholder='Add category' /> */}
            {/* <button onClick={onAddCategory}>Add</button> */}
            <ul>
                {/* { categories.map( category =>  // .map devuelve un nuevo arreglo haciendo la modifi.que quieras. En este caso, que devuelve las categories
                    ( // retorna un objeto para poder seguir añadiendo elementos al div, en este caso
                        <div key={category}>
                            <li>{category}</li>
                        </div>
                    ) // puedes quitar el return porque no se inserta código js arriba, sino si sería necesrio como es en el caso de GifGrid.jsx
                // )} //// esta es una forma larga de hacer la inserción de categorias pero si creas un elemento y lo llamas, el código es más limpio y sencillo */} 
                { categories.map( (category) =>  
                    ( 
                        <GifGrid key={category} category={category}/>
                    ))
                }
                
            </ul>
            {/* Lista de Gifs */}
                {/* Gifs Items */}
        </>
    )
}