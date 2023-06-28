import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';


/**
 * 
    Tarea: no volver a renderizar el mas de la primera vez el componente al darle a los botones.
    Usar los useCallback y memos

    Conseguida. Lo que he tenido que hacer a sido:
        1. usar el memo en el componente hijo y envolverlo todo con él importandolo de React -> React.memo( todo el componente hijo )
        2. eliminar la const incrementar ya que era la cual hacía que se me renderizara todo
        3. crear un useCallback ( importándolo de react ) y hacerlo variable
            3.1. el argumento ' value ' es el valor que viene del hijo y es necesario
            3.2. en el setValor hago una arrow function la cual depende del valor que tiene la función a través del useState y a ese valor le sumo el value que viene del hijo
            3.3. no tiene dependencias ya que si dependiera del valor del useState, que sería lo lógico, se renderizaría cada vez que se toca el componente
*
*/

export const Padre = () => {

    const numeros = [2,4,6,8,10,100];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // };

    const incrementCallback = useCallback(
      (value) => {
        setValor( ( valor ) => valor + value)
      },
      [],
    );
    

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementCallback }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
};