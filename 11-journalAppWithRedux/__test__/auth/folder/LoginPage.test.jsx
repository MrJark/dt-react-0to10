import { render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth';
import { MemoryRouter } from 'react-router-dom';


// el store es necesario para que se renderice el Provider que a su vez es lo que le hace falta al componente LoginPage
const store = configureStore({
    // me pide un reducer y son los que están en el auth
    reducer: {
        auth: authSlice.reducer,
    },

});

describe(' test in LoginPage', () => { 

    test('should show the component', () => {

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

})