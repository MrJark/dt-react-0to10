import { useContext } from 'react';
import { AuthContext } from '../auth';


// Tarea: hacer la public route. Esta no tiene que permitir al usuario llegar a la pagina de login si no ha pulsado al btn de logout (no conseguida)
export const PublicRoute = ( { children } ) => {

    const { logged } = useContext( AuthContext );

    return (!logged)
        ? children
        : <Navigate to="/marvel"/>
}
