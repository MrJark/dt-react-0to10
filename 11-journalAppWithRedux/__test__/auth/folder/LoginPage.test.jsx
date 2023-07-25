import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice, startGoogleSignIn, startLoginWithEmailPassword } from '../../../src/store/auth';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures';



// necesitas hacer el mock para hacer la función dispatch que está en el test 2
const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPass= jest.fn();
jest.mock('../../../src/store/auth/thunks.js', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password}) => { // recibe los argumentos que estás esperando que reciba
        return () => mockStartLoginWithEmailPass({email, password})
    } 
}));

// mock parcial de react-redux para coger el dispatch y lo sobreescribes
jest.mock('react-redux' , () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(), // con esto indicas que el dispatch va a recibir una función y va a retornar esa misma función
}))

// el store es necesario para que se renderice el Provider que a su vez es lo que le hace falta al componente LoginPage
const store = configureStore({
    // me pide un reducer y son los que están en el auth
    reducer: {
        auth: authSlice.reducer,
    },
    preloadedState: {
        auth: notAuthenticatedState // este se encuentre en el authFixtures que es el estado que quieres tener 
    }
});

describe(' test in LoginPage', () => { 

    // sienpre debemos poner el clearMocks
    beforeEach( () => jest.clearAllMocks() );
 
    test('should show the component', () => {

        // el memory router es necesario
        render(
            <Provider store={ store }>
                <MemoryRouter> 
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )
        // screen.debug()
        expect( screen.getAllByText( 'Login' ).length ).toBeGreaterThanOrEqual(1);
    });

    test('Google btn should call the startGoogleSignIn', () => {

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
        // con esto solo no sería suficiente porque el btn está desabilidato si no tiene el status en checking y por defecto, no lo tiene y aquí es donde hace falta el preloadedState
        // la función onGoogleSignIn tiene que llamar un dispatch con el startGoogleSignIn
        
        expect( mockStartGoogleSignIn ).toHaveBeenCalled();
    });

    test('the submit should call the startLoginWithEmailPassword', () => {

        // creas las const que te hacen falta: email y pass
        const egEmail = 'ejemplo@google.com';
        const pass = '12345678';

        // renderizas lo que te hace falta
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );
        
        // Para el email
        // señalas que es lo que quieres, en este caso el field que tenga como label el Email ( capitalizada la primera ) 
        //! Ojo, solo funciona para el Email, la constraseña no es válido este método
        const emailField = screen.getByRole('textbox', {name: 'Email'});
        // haces click
        fireEvent.change( emailField, {target: { name: 'email', value: egEmail}})

        // Para la contraseña
        // señalas que es lo que quieres, en este caso el field que tenga como label el Email ( capitalizada la primera ) 
        // debería poder hacerse de la misma forma pero no encuentra ningún textbox con la palabra Password (capitalizada)
        // const passField = screen.getByRole('textbox', {name: 'Password'});
        // fireEvent.click( passField, {target: { name: 'password', value: pass}})
        
        // Para solucionarlo, tienes que mandarle al iputProps en el textfield del LoginPage 
        const passField = screen.getByTestId('Password');
        fireEvent.change( passField, {target: { name: 'password', value: pass}});

        // se le hace el submit form
        const submitForm = screen.getByLabelText('submitForm');
        fireEvent.submit( submitForm);

        expect( mockStartLoginWithEmailPass).toHaveBeenCalledWith({
            // esto así falla porque necesita el dispatch pero para usarlo tienes que hacer un mock y sería un mock parcial del react-redux para solo coger el dispatch
            email: egEmail,
            password: pass,
        });
    });

})