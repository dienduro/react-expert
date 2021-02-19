export const getGifs = async ( category) =>{

       
    /* recuerda poner el https:// esto es requerido cuando se unsa el fetch
    javaDcript tiene una propiedad reemplaza los espacion   */
    const api = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&api_key=hcQQUOLXC2okXggXUXMeWlr2hd5WXq97&limit=20`;
    const peticion = await fetch(api);
   const {data} =  await peticion.json().catch(console.warn);
   
   const gifs = data.map(img =>{
       return{
           id: img.id,
           title: img.title,
           image: img.images.downsized.url,              
       }        
   })
   /* console.log(gifs); */
/* esto resuleve una promesa */
  return gifs;
   
   /* console.log(data); */
   /* para poder obtener de un arreglo las propiedades de una api
   se barren y se obitine las popiedades que se necesutan con map */

   
}