import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRouter, PublicRoute } from '../../src/router';


describe(' Test in <AppRouter/>', () => { 

    test('should show the login if they are not auth', () => {

        const contextValue = {
            logged: false,
        }

        // necesitas el memoryrouter porque tienes rutas privadas y el constex para saber el contexto
        render(
            <MemoryRouter initialEntries={['/marvel']}>

                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2)

    });

    test(' Tarea: should show marvel component if they logged ❌', () => {
        // solo he conseguido que se muestre el componente pero no se como hacer el expect

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Pataticas',
            }
        }

        // mi prueba era esta pero no es igual a la de la clase pero los resultados dan
        render(
            <MemoryRouter initialEntries={['/login']}>

                <AuthContext.Provider value={contextValue}>
                    <AppRouter>
                        <Routes>
                            <Route path='login' element= {
                                <PublicRoute>
                                    <h1>Public Route</h1>
                                </PublicRoute>
                            }/>
                            <Route path='marvel' element={<h1>Marvel</h1>}/>
                        </Routes>
                    </AppRouter>
                </AuthContext.Provider>
            
            </MemoryRouter>
        );
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

        // prueba de la clase:
        // render(
        //     <MemoryRouter initialEntries={['/login']}>

        //         <AuthContext.Provider value={contextValue}>
        //             <AppRouter/>
        //         </AuthContext.Provider>
            
        //     </MemoryRouter>
        // );
        // expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);


    });

})