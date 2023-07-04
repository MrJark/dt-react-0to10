import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext';
import { MemoryRouter } from 'react-router-dom';



describe('test on <MainApp/>', () => { 

    test('should show Home', () => { 

        // Es necesario poner el MemoryRouter para que traigas a la prueba todo lo necesario para que pase. Tienes que traerlo porque en el main.app estás encapsulando el MainApp dentro del BrowserRouter y este te impota ciertos elementos de React que te hacen falta para hccer las pruebas respectivas
        render(
            <MemoryRouter> 
                <MainApp/>
            </MemoryRouter>            
        );
        // screen.debug();
       expect( screen.getByText('Home')).toBeTruthy();

    });
    
    test('should show Login', () => { 

        // por default está en el home pero para que cambien de directory necesitas poner el initialEntries con la ruta que necesitas, en este caso el login
        render(
            <MemoryRouter initialEntries={['/login']}> 
                <MainApp/>
            </MemoryRouter>            
        );
        screen.debug();
        expect( screen.getByText('Login Page')).toBeTruthy();

        
    });


});