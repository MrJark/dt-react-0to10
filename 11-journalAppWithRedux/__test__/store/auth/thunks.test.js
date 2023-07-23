import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from '../../../src/firabase/providers';
import { checkingCredentials, chekingAuthentication, login, logout, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth'
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixtures';


jest.mock('../../../src/firabase/providers'); // como se están haciendo peticiones a proveedores externos, se necesita hacer el mock de los providers, que es donde se encuentran esas peticiones

describe(' Test in thunks', () => {

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    test('should show checkingCredentials', async() => { 
        
        await chekingAuthentication()(dispatch); // aquí el segundo () con el dispatch significa: si ha sido llamado el dispatch
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ); // esto es así poeque el checkingXCredentias devuelves lo que necesita el authentication -> {"payload": undefined, "type": "auth/checkingCredentials"}

    });

    test('should call checkingCredentias and login in startWithGoogle', async() => {

        const loginData = { ok: true, ...demoUser};
        await singInWithGoogle.mockResolvedValue( loginData );

        // thunk a probar 👇🏼
        await startGoogleSignIn()( dispatch );
        expect(  dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect(  dispatch ).toHaveBeenCalledWith( login( loginData ) );

    });

    test('Task 1: should call checkingCredentias and logout in startWithGoogle with error ❌ no he sabido completarlo', async() => {

        const logoutData = { ok: false, errorMessage: 'There has been an error with Google Authetication'};
        await singInWithGoogle.mockResolvedValue( logoutData );

        await startGoogleSignIn()( dispatch );
        expect(  dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect(  dispatch ).toHaveBeenCalledWith( logout( logoutData.errorMessage ) );

    });

    test('Task 2: should call checkingCredentias and login with startLoginWithEmailPassword', async() => {

        const loginData = { ok: true, ...demoUser};
        const formData = { emal: demoUser.email, passwor: '12345678' };

        await loginWithEmailPassword.mockResolvedValue( loginData );
        // la función startLoginWithEmailPassword requiere el email y password que es la const formData y a su vez, se manda a ejecutar con el dispatch
        await startLoginWithEmailPassword(formData)(dispatch); 

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) );
    });

    test('should call logoutFirebase, clearNotes and logout in startLogout', async() => {

        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });

    // test('Task 3: should call checkingCredentias and login with startCreatingUserWithEmailPassword ❌ esta prueba no puedo hacerla porque me da un error con el ok en el thuunks.js y no se porqué', async() => {

    //     const loginData = { ok: true, ...demoUser};
    //     const formData = { emal: demoUser.email, passwor: '12345678', displayName: demoUser.displayName };

    //     await loginWithEmailPassword.mockResolvedValue( loginData );
    //     // la función startLoginWithEmailPassword requiere el email y password que es la const formData y a su vez, se manda a ejecutar con el dispatch
    //     await startCreatingUserWithEmailPassword(formData)(dispatch); 

    //     expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    //     expect( dispatch ).toHaveBeenCalledWith( login(loginData) );

    // });

})