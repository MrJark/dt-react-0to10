import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';


export const CounterCustomHook = () => {

    // La desestructuración dependerá de la manera en que hagas el return del hook. Al ser un objeto, usas las curly brackets, { }, pero si fuera un array, ( ), tendrás que usar los brackets, [ ], para desestructurar
    const { counter } = useCounter();

  return (
    <>
        <h1>Counter Custom Hook: {counter} </h1>

        <hr />
        
        <button className='btn btn-primary'>+1</button>
        <button className='btn btn-primary'>Reset</button>
        <button className='btn btn-primary'>-1</button>

    </>
  )
}
