import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async() => {

    // usas el try and catch pq la authentication puede fallar 
    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credentials});
        const { displayName, email, photoURL, uid} = result.user;
        console.log(user);

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
            errorMessage

        }
    }
}