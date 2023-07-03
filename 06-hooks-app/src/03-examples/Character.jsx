import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter, useFetch } from '../hooks';



export const Character = () => {

    const pRef = useRef();
    const [ boxSize, setBoxSize ] = useState({ width: 0, height: 0})

    useLayoutEffect(() => {
      const {height, width } = pRef.current.getBoundingClientRect();
      setBoxSize( {width, height} );
    }, [])


    const { data } = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`)

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const randCharacter = randomNum(0, 19);

    const { results } = !!data && data;
    console.log(data);

    const { name, status, image, id } = !!results && results[randCharacter];
    console.log( name, status, image, id);
      
    return (
      
      <>
        <div style={{display: 'flex'}}>

          <div className='names'>

            <h2 ref={ pRef } >{name}</h2>
            <p>Status: {status}</p>

          </div>

          <div>

            <img src={image} alt={name} />

          </div>

        </div>

        <p>{JSON.stringify(setBoxSize)}</p>
      </>
    )
}
