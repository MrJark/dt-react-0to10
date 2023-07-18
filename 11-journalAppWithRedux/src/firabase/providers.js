import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async() => {

    // usas el try and catch pq la authentication puede fallar 
    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credentials});
        const { displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            // user info
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        // console.log(error);
        const errorCode = error.errorCode;
        const errorMessage = error.errorMessage

        return {
            ok: false,
            errorMessage: error.message,

        }
    }
};

export const registerUserWith = async ({email, password, displayName}) => {
    try {

        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = res.user;
        // console.log(res); 

        await updateProfile(FirebaseAuth.currentUser, { displayName }); // esta función es para actualizar el usuario en firebase(como es una promesa usa el await). Y para saber cual es el usuario actual, solo hace falta llamar a " FirebaseAuth.currentUser " y el segundo argumento es aquellos que queires actualizar. En este caso el diplayName
        
        return {
            ok: true,
            uid, photoURL, email, displayName,
        }

    } catch (error) {
        return{ 
            ok: false, 
            errorMessage: error.message,
        }
    }
};

export const loginWithEmailPassword = async ( { email, password } ) => {
    try {

        const res = signInWithEmailAndPassword( FirebaseAuth, email, password);
        const {  uid, photoURL, displayName } = (await res).user;
        console.log(res);

        return{
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}