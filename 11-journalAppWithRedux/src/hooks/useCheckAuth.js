import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FirebaseAuth } from '../firabase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth';



export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth);
    const dispatch = useDispatch(); // hace falta el dispatch para llamar al user

    useEffect( () => { // este useEffect es para disparar 'algo' cuando el usuario esté authenticated o no
        // Firebase te permite saber que usuario está activo -> onAuthStateChanged() el cual pide tu auth, que en este caso es FirebaseAuth
        
        onAuthStateChanged( FirebaseAuth, async (user) => {
            if (!user ) return dispatch( logout() ); // si no hau user

            const { uid, email, displayName, photoURL } = user;
            dispatch( login( { uid, email, displayName, photoURL } ) );
        })

    }, []);

    return {
        status
    }
};
