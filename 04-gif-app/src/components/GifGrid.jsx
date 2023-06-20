// import React from 'react';
import { useEffect, useState } from 'react';
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

  const [images, setImages] = useState([]); // vacio para qeu no muestre nada antes de las imagenes

  const getImages = async () => {
    const newImage = await getGifs( category );
    setImages(newImage);
  }

  useEffect( () => { // sincroniza componentes con sistemas externos y tiene que recibir 2 parámetros
    getImages();
  }, [  ])
  // esta es la buena practica para poner funciones dentro de los functional component. Evita que se renderice todo de nuevo cada vez gracias a los ' [  ] ' que está vacio
  
  // getGifs(category); // NO se DEBE colocar la ejecución de una función directamente dentro de un functional component ya que cada vez que la función se llame, se ejecutará una y otra vez
  

  return (
    <>
        <h3>{category}</h3>
        <ul>

          {
            // Forma "complicada"
            // images.map( image => (
            //   <li key={ image.id }>{ image.title} </li>
            // ))
            // Forma simple al desestructurar
            images.map( ({id, title}) => (
              <li key={ id }>{ title}</li>
            ))
          }

          {/* <li
           key={images.id}
           title={images.title}
          ></li>  // Tarea: crear el arreglo de images que tenga(no conseguido. Esta era mi solución) */}
        </ul>     

    </>
  )
}
