import { useState } from 'react';


export const CounterApp = () => {

    // const [counter, setCounter] = useState(1)

    // Tarea: hacer que funcionen los distintos counters a la vez ( conseguido! Guía -> https://react.dev/reference/react/useState#examples-objects Apartado: Examples of objects and arrays in state )
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = counter; // desestructuración del objeto counter pero no en la misma linea

    


  return (
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>

        <hr />
        

        <button onClick={
            () => {
                    setCounter({
                        ...counter, // desestruturo y cojo lo que me interesa
                        counter1: counter1+1, // le sobreescribo lo que yo quiera
                    })
                }
        }>+1</button>

        <button onClick={
            () => {
                    setCounter({
                        ...counter, 
                        counter1: counter1 - 1,
                    })
                }
        }>-1</button>

      

        <button className='btn' onClick={() => setCounter (counter1 + 1)}>+1</button>
        <button className='btn' onClick={() => setCounter (counter1 - 1)}>-1</button>

    </>
  )
}
