import { useState } from 'react';
import './style.css';
import { AddCategory, GifGrid } from './components';


export const GifApp = () => {


    const [categories, setCategories] = useState([ 
        'Dragon Ball',
    ]);
    const onAddCategory = ( newCategory ) => {
        
        if(categories.includes(newCategory) ) return; 

       
        setCategories([ ...categories, newCategory ]);
    };

    return(
        <>
            
            <h1>GifApp</h1>
            <AddCategory
                onNewCategory = { (value) => onAddCategory(value) }
            />
            <ul>
                { categories.map( (category) =>  
                    ( 
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ul>

        </>
    )
}