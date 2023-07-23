import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Test in authSlice', () => {

    test('should return a initialState and call auth', () => {

        expect( authSlice.name ).toBe('auth'); // quires que sea igual al nombre que le has puesto en un inicio
        const state = authSlice.reducer( initialState, {})

        // console.log(state);
        expect( state ).toEqual( initialState );

    });


    test('should do authentication with login', () => {

        const state = authSlice.reducer( initialState, login( demoUser ) )
        expect( state ).toEqual( {
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });

    });

    test('Task 1:should do logout without arguments ✅ copy/paste', () => {

        const state = authSlice.reducer( authenticatedState, logout(  )) // yp había puesto el initialState pero en esta parte ya está logueado por tanto, deberia ser el authenticatedState
        // console.log(state);

        expect( state ).toEqual( {
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined, // no se porqué el undefined
        });

    });

    test('Task 2: should do logout and show error message ❌', () => {
 
        const TheErrorMessage = 'Your credentials are wrong';
        
        const state = authSlice.reducer( initialState, logout({errorMessage: TheErrorMessage})) // tenía que mandar como arg el errorMessage
        // state.errorMessage = TheErrorMessage; // est aes la forma en la que lo había intenatdo yo

        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: TheErrorMessage,
        });
    });

    test('should change the state to checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials());
        expect( state.status ).toBe('checking');
    })

});