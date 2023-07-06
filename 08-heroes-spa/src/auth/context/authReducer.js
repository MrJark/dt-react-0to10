

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
                name: action.payload,
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