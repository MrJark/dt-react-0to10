import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHooks = () => {

   const [counter, setCounter] = useState(0);

    const theIncrement = useCallback(
      () => {
        // setCounter( counter + 1 );
        setCounter( (value) => value + 1 );
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
