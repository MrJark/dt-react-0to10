import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { JournalRoute } from '../journal/routes';
import { useDispatch, useSelector } from 'react-redux';
import { CheckingAuth } from '../ui';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firabase/config';
import { login, logout } from '../store/auth';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

    // Vas al useCheackAuth -> custom hook
    // const { status } = useSelector( state => state.auth);

    // const dispatch = useDispatch(); // hace falta el dispatch para llamar al user

    // useEffect( () => { // este useEffect es para disparar 'algo' cuando el usuario esté authenticated o no
    //     // Firebase te permite saber que usuario está activo -> onAuthStateChanged() el cual pide tu auth, que en este caso es FirebaseAuth
        
    //     onAuthStateChanged( FirebaseAuth, async (user) => {
    //         if (!user ) return dispatch( logout() ); // si no hau user

    //         const { uid, email, displayName, photoURL } = user;
    //         dispatch( login( { uid, email, displayName, photoURL } ) );
    //     })

    // }, [])


    const { status } = useCheckAuth();
    if( status === 'checking') {
        return <CheckingAuth/>
    }


    return (

        <Routes>

            {
                (status === 'authenticated') // protección de rutas privadas y públicas
                    ? <Route path='/*' element={ <JournalRoute/> }/>
                    : <Route path='/auth/*' element= { <AuthRoutes/>} />
            }

            <Route path='/*' element= { <Navigate to='/auth/login'/> }/>

            {/* <Route path='/auth/*' element= { <AuthRoutes/>} /> */}

            {/* <Route path='/*' element={ <JournalRoute/> }/> */}

        </Routes>
    )
}
