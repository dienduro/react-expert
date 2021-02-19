import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
/*
esto no se va autilizar aqui pero en hoocks/useFetch si
 import { getGifs } from '../helpers/getGifs';

 */
export const GifGrid =  ({category}) => {

//    const [images, setimages] = useState([])
/* se puede renombrar un objeto con : */
 const {data:imgs,loading} =useFetchGifs(category);

/*  console.log(data); */
 
//     useEffect( () => {
//         /* utilizados la funcion a utlizar  */
//        getGifs(category)
//        .then(setimages);
//    } /* se manda un arreglo de dependencias si se pone [] quiere decir que se dispara solo una vez */
//    ,[category])

    
    /* hay que tener en cuenta cunado se usan hocks porque 
    cada ves que se esta utilizando este esta realizando la peticion https
    esta volviendo a ejecutar todo el codigo 
     para resolver esto y evitar los ciclo infinitos se utliza {useEffect}:
     que me permite ejecutar el codigo de manera condicional
    */
    /* getGifs();    */
    return (

        <>
        <h3>{category}</h3>

       {/*  {loading ? 'cargando':'Data ok'} */}
       {loading && <p className ="animate__animated animate__flash animate__repeat-3 animate__fadeOut">Loading</p>}

       <div className = "card-grid">
            
                {
                   imgs.map( gif =>(

                    <GifGridItem
                        key = {gif.id}
                         {... gif}
                    />
                       
                   ))
                }         
            </div> 
            {/* <div className = "card-grid">
            
                {
                   images.map( gif =>(

                    <GifGridItem
                        key = {gif.id}
                         {... gif}
                    />
                       
                   ))
                }         
            </div> */}
        </>
        
    )
}
