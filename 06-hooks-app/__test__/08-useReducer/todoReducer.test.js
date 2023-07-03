import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('test in todoReducer', () => {

    // cuando se prueban los reducer
    const initialState = [
        {
            id: 1,
            desciption: 'Demo TODO',
            achieved: false
        },
    ]

    test('should show the initial state', () => { 

        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );

    });

    test('should add a TODO', () => {

        // 1º tienes que agreagar la acción que vas a hacer, add TODO como está el todoReducer
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                desciption: 'TODO #2',
                achieved: false,
            }
        }

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 2 ); // espero que tenga dos elementos
        expect( newState ).toContain( action.payload ); // espero que tenga un payload. El toContain valora que tenga dicho contenido pero le da 'igual' que esté en distinto espacio en memoria

    });
    
    test('Task: should remove a TODO (no achieved)', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        }

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 0 ); // esperas que se elimine todo porque la acción que estas haciendo es enviar el type de eliminar t el todoReducer con ese type lo elimina y el payload es el id del elemento a eliminar
        // expect( newState ).toContain( action.type );

    });

    test('Task: should do Toggle of TODO (no achieved)', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }

        // esto te dice que está en true, es decir, que se completó
        const newState = todoReducer( initialState, action);
        expect( newState[0].achieved).toBe(true);

        // para asegurar que está cambiando, puedes hacer un nuevo state que le haga otra vez el toggle
        const newState2 = todoReducer( newState, action);
        expect( newState2[0].achieved).toBe(false);
    })



})