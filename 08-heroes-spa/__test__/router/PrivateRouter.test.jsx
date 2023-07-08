import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRouter } from '../../src/router';
import { MemoryRouter } from 'react-router-dom';


describe(' test in <PrivateRouter/>', () => {

    test('should show children if they are auth', () => {

        Storage.prototype.setItem = jest.fn();

        const  contexValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Tony',
            }
        }
        
        // hace falta el MemoryRouter porque tiene que recordar el usuario cosa que en la primera prueba de la publicroute no porque solo era el login
        render(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRouter>
                        <h1>Private Route</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Private Route')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel")

    });

})