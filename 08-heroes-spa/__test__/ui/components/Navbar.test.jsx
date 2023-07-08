import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { PublicRoute } from '../../../src/router';
import { AuthContext } from '../../../src/auth';


// segunda parte de la tarea 2. Hay que hacer un mock de la librería de react router dom pero solo queires el useNavegate que es lo que el navbar usa para navegar ( const navegate = useNavegate(); )
const mockedUseNavegate = jest.fn();
jest.mock('react-router-dom', () => ({ // mock de la ruta
    ...jest.requireActual('react-router-dom'), // spread de todas las rutas que usas en el test
    useNavigate: () => mockedUseNavegate // pero le dices que solo quieres esta y eso es una función de ahí que se cree la const mockedUseNavegate
}));
// jest.mock('../../../src/ui/components/Navbar'); // no

describe(' test on Navbar', () => {

    const contexValue = {
        logged: true,
        user: {
            name: 'Chema Ferrandez Cascales',
            id: '123',
        },
        logout: jest.fn(), // esto es lo que me ha faltado de la tarea y es lo necesario para que la tarea 2 funcione ya que el logout es una fn
    };

    beforeEach( () => jest.clearAllMocks() ); // para limpiar todos los mocks

    test(' Task1: should show name of user logged ✅', () => {

        

        // tienes que tenerlo estructurado de esta manera porque tienes dos rutas: la pública y la privada
        render(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter initialEntries={['/marvel']}>

                {/** esto no me hacía falta, solo con poner el nav me sobrava, no tenía uqe hacer las routes */}
                {/* <Routes>
                    <Route path='marvel' element={
                        <Navbar/>
                    }/>
                </Routes> */}
                    <Navbar/>

                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getAllByText('Chema Ferrandez Cascales')).toBeTruthy()
    });

    test(' Task2: should called logout btn and navegate when clicked in the btn logout ❌', () => {

        render(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter>

                    {/* <Routes>
                        <Route path='login' element= {
                            <PublicRoute>
                            <Navbar/>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={<h1>Marvel</h1>}/>
                    </Routes> */}

                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        // parte que verifíca que el btn es llamado 
        const btnLogout = screen.getByRole('button');
        fireEvent.click(btnLogout);
        expect( contexValue.logout ).toHaveBeenCalled();
        
        // segunda parte de la tarea
        // expect( mockedUseNavegate ).toHaveBeenCalledWith(); // esta función me dice que es loo que debe devolver =  "/login", {"replace": true}
        expect( mockedUseNavegate ).toHaveBeenCalledWith("/login", {"replace": true}); // pego lo que debería llamarse


    });


})