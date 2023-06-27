import { useState } from 'react';
import { Small } from './Small';


export const Memorize = () => {

    const initialValue = 0;
    const [counter, setCounter] = useState( initialValue );
    const [truly, setTruly] = useState(true);

    const pluse = () => {
        setCounter( counter + 1 );
    };
    const minum = () => {
        if( counter <= 0) return;
        setCounter( counter - 1 );
    };
    const reset = () => {
        setCounter( initialValue );
    };

  return (
    <>
        {/* <h1>Counter: <small>{ counter }</small></h1> */}
        <h1>Counter: <Small value={counter}/> </h1>
        <hr />

        <button className="btn btn-secondary" onClick={pluse}> +1 </button>
        <button className="btn btn-secondary" onClick={reset}> Reset </button>
        <button className="btn btn-secondary" onClick={minum}> -1 </button>
        <hr />

        <button className='btn btn-secondary' onClick={() => setTruly(!truly)}>Show/Hide: {JSON.stringify(truly)}</button>
    </>
  )
}
