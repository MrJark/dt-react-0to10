import { Hijo } from './Hijo'
import { useState } from 'react';


/**
 * 
    Tarea: no volver a renderizar el mas de la primera vez el componente al darle a los botones.
    Usar los useCallback y memos
*
*/



export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num ) => {
        setValor( valor + num )
    }

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
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
