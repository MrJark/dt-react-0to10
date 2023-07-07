import { useContext } from 'react';
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom';


// que tenga un children hace que se convierta en un Higher Order Component
export const PrivateRouter = ( { children } ) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation(); // hook de react router que puedes utilizar para recordar la ruta donde estsabas cuando haces logout

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login"/>
}
