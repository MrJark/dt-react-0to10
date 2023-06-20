// import React from 'react';
import { getGifs } from './helppers/getGifs'

export const GifGrid = ({ category }) => {

  // No es un abuena pracrica crear esta función ⬇️ aquí dentro, la buena práctica dice que debería estar fuera de este componente para que no se renderice constantemente
  // const getGifs = async( category ) => {

  //   const url = `https://api.giphy.com/v1/gifs/search?api_key=TTP5EKm7haUqI0bIeBC3VuXEBZvb1mNh&q=${category}&limit=20`;
  //   const res = await fetch(url);
  //   const { data } = await res.json();
  //   // console.log(data);

  //   const gifs = data.map( img => ({
  //     id: img.id,
  //     title: img.title,
  //     url: img.images.downsized_medium.url,

  //   }));

  //   console.log(gifs);
  //   return gifs;
  // };

  
  getGifs(category); // NO se DEBE colocar la ejecución de una función directamente dentro de un functional component ya que cada vez que la función se llame, se ejecutará una y otra vez
  

  return (
    <>
        <h3>{category}</h3>
        <p>Hello</p>        

    </>
  )
}
