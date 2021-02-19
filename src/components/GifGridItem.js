import React from 'react'

export const GifGridItem = ({id,title,image}) => {
   console.log(id,title,image);
   
    return (
        <div className ="card animate__animated animate__backInDown animate__fast">
            <img src ={image} alt ={title}/>
            <p>{title}</p>
        </div>
    )
}
