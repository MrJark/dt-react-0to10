import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';


export const CounterCustomHook = () => {

    // La desestructuración dependerá de la manera en que hagas el return del hook. Al ser un objeto, usas las curly brackets, { }, pero si fuera un array, ( ), tendrás que usar los brackets, [ ], para desestructurar
    const { counter, increment, decrement, resets } = useCounter();

  return (
    <>
        <h1>Counter Custom Hook: {counter} </h1>

        <hr />
        
        <button className='btn btn-primary' onClick=
          {
            increment
          }
        >+2</button>
        <button className='btn btn-primary' onClick=
          {
            resets
          }
        >Reset</button>
        <button className='btn btn-primary' onClick=
          {
            decrement
          }
        >-2</button>

    </>
  )
}
