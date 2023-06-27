import React from "react";


// prop que recibo como argumento, increment, es la que necesito en el callback hook ya que de esta dependerá el increment
export const ShowIncrement = React.memo(( { increment } ) => {
    // NO SOLO puedes usar el React.memo() porque la funnción theIncrement está devolviendo un valor diferente cada vez, por tanto, al ser distinta, no puede guaradar los valores en memoria.
    // Para evitar que se redibuje se usa el useCallback pero en el componente padre, en este caso el CallbackHooks.jsx
    console.log('was drawn');

  return (
    <button 
        className="btn btn-primary"
        onClick={ () => {
            // queires incrementar de 2 en 2
            increment(2);
        }}
    >
        Increment
    </button>
  )
})