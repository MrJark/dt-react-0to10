// Es buena práctica en React colocar antes del elemento la palabra ' use ' cuando sea un hook

import { useState } from "react"

export const useCounter = ( initialValue = 0 ) => {

    const [counter, setCounter] = useState( initialValue );

    // Tarea: crear los botones y hacer que funcionen (CONSEGUIDA)

    // para externalizar el setCounter, hay que crear las constantes que van a usar el setCounter:
    const increment = () => {
        setCounter(counter + 2);
    };

    // si fuera una app de compras, no querrias que el carrito bajara de cero, por tanto tendrías que hacer una validación en el decrement como if ( counter === 0 ) return;
    const decrement = () => {
        // if (counter === 0) return;
        setCounter(counter - 2);
    };
    
    const resets = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        increment,
        decrement,
        resets,
    }
};