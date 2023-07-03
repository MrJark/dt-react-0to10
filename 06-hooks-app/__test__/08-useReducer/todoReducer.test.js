import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('test in todoReducer', () => {

    // cuando se prueban los reducer
    const initialState = [
        {
            id: 1,
            desciption: 'Demo TODO',
            done: false
        },
    ]

    test('should show the initial state', () => { 

        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );

    });

    test('should add a TODO', () => {

        
        
    })

})