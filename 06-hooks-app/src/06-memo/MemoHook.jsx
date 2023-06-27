import { useMemo, useState } from 'react';

const heavyStuff = (iteartionNUmber  = 100) => {
    for( let i = 0; i < iteartionNUmber; i++){
        console.log('Sumando');
    }

    return `${iteartionNUmber} iteration carried out`;
};

export const MemoHook = () => {

    const initialValue = 10;
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

    // en este caso, el heavyStuff será renderizado 10 veces ya que es el valor del initialValue
    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] ); 

  return (
    <>
        {/* <h1>Counter: <small>{ counter }</small></h1> */}
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button className="btn btn-secondary" onClick={pluse}> +1 </button>
        <button className="btn btn-secondary" onClick={reset}> Reset </button>
        <button className="btn btn-secondary" onClick={minum}> -1 </button>
        <hr />

        <button className='btn btn-secondary' onClick={() => setTruly(!truly)}>Show/Hide: {JSON.stringify(truly)}</button>
    </>
  )
}
