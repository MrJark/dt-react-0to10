// Es buena práctica en React colocar antes del elemento la palabra ' use ' cuando sea un hook

import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {

    const [counter, setCounter] = useState( initialValue )

    return {
        counter,
    }
};