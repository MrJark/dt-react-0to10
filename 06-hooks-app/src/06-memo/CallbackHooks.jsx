import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHooks = () => {

   const [counter, setCounter] = useState(1);

   const theIncrement = () => {
    setCounter(counter+1)
   }

  return (
    <>
        <h1>useCallBack Hook: { counter } </h1>
        <hr />

        <ShowIncrement increment={theIncrement}/>
    </>
  )
}
