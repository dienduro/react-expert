import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* import { GifExpertApp } from '../GifExpertApp';
 */
export const AddCategory = ({setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e)=> {

        setInputValue(e.target.value)
        /* console.log(e.target.value); */
    }

    const handleSubmit =(e)=>{
        /*esto se enacarga que no se refresque la pagina */
        e.preventDefault();
        
        /* console.log('Submite realizado'); */
        /* operador ternario omite else */
        inputValue.trim() != '' &&
        setCategories(cate => [inputValue,/* ...cate */]);
        
    }
    
    return (
        <form onSubmit = {handleSubmit}>
        <h1>{inputValue}</h1>
            <input
            type= "text"
            value = {inputValue}
            onChange ={handleInputChange}
            
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}
