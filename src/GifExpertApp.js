import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = ()=>{
/*     const categories = ['One Punch', 'Piratas del Caribe','dragon ball'];*/  
const [categories, setCategories] = useState(['']);

//const handleAdd = ()=>{   

    //setCategories(
        /* ...categories,'hunter */

      //  categoria =>[...categoria, 'Naruto']

    //);
//}
    return (

        <>
        <h2>GifExpertApp</h2>
        {/* de esta manera manod la referencia del manejador de categories 
        que es el setCategories */}
        <AddCategory setCategories ={setCategories} />
        <hr/>
         {/* <button onClick={handleAdd}>agregar</button>  */}
        <ol>
            {
                categories.map(category=>(

                    <GifGrid 
                    key= {category}
                    category = {category}
                    />
                ))
                   
                 /* <li key = {category}>{category}</li> */
            }
        </ol>
        </>


    )
}

