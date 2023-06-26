// es como un useState pero sin disparar la renderización

import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef();
    
    const onClick = () => {
        // document.querySelector('input').select();
        console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            type="text"
            placeholder="Nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set Focus
        </button>
    </>
  )
}
