import { useEffect, useState } from 'react';
import { getGifs } from '../components/helppers/getGifs';



export const useFetchGifs = ( category ) => {
  
    const [ images, setImages ] = useState([]); // vacio para qeu no muestre nada antes de las imagenes
    const [ isLoading, setIsLoading ] = useState(true);

    const getImages = async () => {
        const newImage = await getGifs( category );
        setImages(newImage);
        setIsLoading(false);
    }

    useEffect( () => { // sincroniza componentes con sistemas externos y tiene que recibir 2 parámetros
        getImages();
    }, [  ]);

    return {
        images,
        isLoading,
    }

}
