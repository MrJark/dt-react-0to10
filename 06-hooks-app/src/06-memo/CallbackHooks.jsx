import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHooks = () => {

   const [counter, setCounter] = useState(0);

    const theIncrement = useCallback(
      (count) => { // se pueden inviar tanto argumentos como quieras ya que esto funciona como una arrow fuction
          // setCounter( counter + 1 );
          // para añadir argumentos al useCallback, se los teines que pasar en el paréntesis los cuales serán los que has colocado en la función hija. 
          // en este caso, el count es 2 ya que el hijo tiene como argumento el incremento de 2
        setCounter( (value) => value + count );
      },
      [],
    )
    

//    const theIncrement = () => {
//     setCounter(counter + 1)
//    }

  return (
    <>
        <h1>useCallBack Hook: { counter } </h1>
        <hr />

        <ShowIncrement increment={ theIncrement }/>
    </>
  )
}
