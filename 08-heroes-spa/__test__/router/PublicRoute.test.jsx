import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';


describe(' test in <PublicRoute/> ', () => {

    test('should show children if they are not auth', () => {

        const  contexValue = {
            logged: false,
        }

        // render( <PublicRoute/> ) // así no se podría porque al tener el AuthContext por las autenticaciones, me daría error
        render(
            <AuthContext.Provider value={ contexValue }>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Public Route')).toBeTruthy();

    });

    test('should show and login on Marvel', () => {

        const contexValue = {
            logged: true,
            user: {
                name: 'Chema',
                id: '123',
            }
        }

        // tienes que tenerlo estructurado de esta manera porque tienes dos rutas: la pública y la privada
        render(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element= {
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={<h1>Marvel</h1>}/>
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Marvel')).toBeTruthy()

    })

})