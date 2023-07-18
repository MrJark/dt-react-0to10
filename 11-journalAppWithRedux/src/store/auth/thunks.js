// los thunks son acciones que puedes despachar y que tienen una tarea síncrona

import { singInWithGoogle, registerUserWith, loginWithEmailPassword } from "../../firabase/providers";
import { checkingCredentials, login, logout } from "./"



export const chekingAuthentication = (email, password) => {
    return async( dispatch ) => {
        // tarea1: cuando toco el btn login debe cambiar el status en el redux de not-authenticated por el checking ❌ no conseguida, me he quedado con el error de que el state me da undefined por tanto, no puedo desestructurar la propiedad status

        dispatch(checkingCredentials() ); // estsba bien
    }

};

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials() );
        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage) ); // si no funciona, da el error

        dispatch( login( result )); // si funciona se hace el dispatch del login
    }
};

export const startCreatingUserWithEmailPassword = ( { password, email, displayName } ) => {
    return async (dispatch) => {
        dispatch(  checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWith({ email, password, displayName});
        
        if (!ok ) return dispatch( logout({errorMessage}) ); // si no funciona, si el ok es false, se logout
        dispatch( login( {uid, displayName, email, photoURL } )); // y si funciona, se hace el login
    }
};

// Tarea: realizar el login con el usuario y la contraseña ( cuando ya se han registrado ) ❌ no conseguida del tod. No sabía como implementarlo para que me apareciera en el login pages
export const startLoginWithEmailPassword = ( { password, email } ) => { // no hay que enviar en ningún moemnto el displayName

    return async ( dispatch ) => {
        dispatch(  checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        
        if ( !result.ok ) return dispatch( logout( result ) ); 
        dispatch( login( result )); 
    }

};