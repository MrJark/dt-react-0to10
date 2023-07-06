import { types } from "../types";

// el useReducer no debe llamar NUNCA ninguna función externa. Siempre se debe de resolver con el state u el action

// const initialState = { // estado inicial de un log es por default no logeado
//     logged: false,
// }

// Custom Hook de un reducer el cual tiene como característica que se maneja con un swith
export const authReducer = (state = {}, action ) => {


    switch ( action.type ) {
        case types.login:
            return {
                ...state, // siempre se debe desestructurar porque si futuros buildings generas más propiedades
                logged: true,
                user: action.payload,
            };

        case types.logout:
            return {
                logged: false,
                name: null,
            };
    
        default:
            return state;
    }
};