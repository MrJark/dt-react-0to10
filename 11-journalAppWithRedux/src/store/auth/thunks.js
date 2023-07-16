// los thunks son acciones que puedes despachar y que tienen una tarea síncrona

import { checkingCredentials } from "./authSlice"



export const chekingAuthentication = (email, password) => {
    return async( dispatch ) => {
        // tarea1: cuando toco el btn login debe cambiar el status en el redux de not-authenticated por el checking ❌ no conseguida, me he quedado con el error de que el state me da undefined por tanto, no puedo desestructurar la propiedad status

        dispatch(checkingCredentials() ); // estsba bien
    }

}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials() );
    }
}