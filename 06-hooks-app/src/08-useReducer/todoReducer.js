
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':

        // siempre se tiene que regresar algo en el return. En este caso es un arreglo porque el initialSate es un arreglo
        // es muy comun hacer el spread del valor que se le da y la acción que recibe es el payload con el '[TODO] Add Todo' el cual es el todo que queires insertar
            return [ ...initialState, action.payload ]
            
        default:
            return initialState;
    }

}