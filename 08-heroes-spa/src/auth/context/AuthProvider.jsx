import { useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types';

// const initialState = { // no hace falta gracias a la funcion de inicialización, init, que se va a encargar de hacerlo
//     logged: false,

// };

const init = () => {
    const user = JSON.parse( localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init ); // esto es un useReducer que vinee de react y es donde tienes que almacenar que el usuario está regristrado

    const login = ( name = '' ) => {

        const user = { id: 'abc', name: name };

        const action = {
            type: types.login,
            payload: user,
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action)
    }

    const logOut = () => { // función para eliminar el user cuando das al btn logout
        localStorage.removeItem('user');
        const action = {};
        dispatch();
    }


    return (

        //el value es obligatorio en el Provider, aunque puede ser un objeto vacio
        <AuthContext.Provider value={{ 
            ...authState,
            login: login
         }}>
            { children }
        </AuthContext.Provider>
    )
};
