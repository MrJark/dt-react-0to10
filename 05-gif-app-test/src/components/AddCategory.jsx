import { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({ onNewCategory }) => {

    
    const [inputValue, setInputValue] = useState(''); 

    const onChangeConst = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); 

        if( inputValue.trim().length <= 1 ) return; 

        
        setInputValue('');
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

// tienes que hacer esto porque la función AddCategory tiene como prop (callback) obligatoria la onNewCategory
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}