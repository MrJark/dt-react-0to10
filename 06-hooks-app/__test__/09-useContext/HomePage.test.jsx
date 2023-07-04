import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe('test on HomePage', () => {

    const user1 = {
        id: 1,
        name: 'Chema',
    };

    test('should show the component without user', () => {

        // Si quieres renderizar el UserContext, al estar por dentro del HomePage, necesitas traerlo 
        // para darle el valor del user necesitas el Provider
        render(
            <UserContext.Provider value={ { user: null } }>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('preForTested');
        expect( preTag.innerHTML ).toBe('null');
        // screen.debug();
    });

    test('should show the user1', () => {

        render(
            <UserContext.Provider value={ { user1 } }>
                <HomePage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('preForTested');

        expect( preTag.innerHTML ).toContain(user1.id);
        console.log( preTag.innerHTML )

    });


})