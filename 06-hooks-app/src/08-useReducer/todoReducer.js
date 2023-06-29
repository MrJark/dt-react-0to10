
export const todoReducer = ( initialState, action ) => {

    switch ( action.key ) {
        case 'AABC':
            throw new Error('Action.type = AABC no está implementada aun')
            
        default:
            return initialState;
    }

}