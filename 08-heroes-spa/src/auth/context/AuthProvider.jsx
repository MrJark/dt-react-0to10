import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const initialState = {
    logged: false,

};

export const AuthProvider = ({ children }) => {

    const [ authState, despatch ] = useReducer( authReducer, initialState ); // esto es un useReducer que vinee de react

    return (
        //el value es obligatorio en el Provider, aunque puede ser un objeto vacio
        <AuthContext.Provider value={{ }}>
            { children }
        </AuthContext.Provider>
    )
};
