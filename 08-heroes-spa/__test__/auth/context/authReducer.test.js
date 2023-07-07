import { render , screen } from '@testing-library/react';
import { authReducer, types } from '../../../src/auth';



describe('test in authReducer', () => {  

    const initialState = { // no debe de haber name, solo logged en false
        logged: false,

    };
    

    test('Tarea1: should return de default state ✅', () => {  
        
        const newState = authReducer( initialState, {});
        expect( newState ).toBe(initialState);
    });
    
    test('Tarea2: should call login and establish the user ❌', () => {  

        const name  = 'Chema Ferrandez';
        // const action = { // mi solución del action
        //     type: types.login,
        //     payload: {
        //         logged: true,
        //         name: name
        //     }
        // };
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Chema',
            }
        }
        const newState = authReducer( initialState, action); 
        // expect( newState.lenght ).toBe(2); // esta era muy prueba
        expect( newState ).toEqual({
            logged: true,
            user: action.payload,
        });
    });
    
    test('Tarea3: should remove user and put logged in false ❌', () => {  
        
        const state = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Chema',
            }
        };
        const action = {
            type: types.logout
        }; 

        const newState = authReducer( state, action)
        console.log(newState);
        expect( newState ).toEqual( {logged: false, name: null } )
    });


})