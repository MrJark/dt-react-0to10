import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';



describe('Test on LoginPage', () => {

    const user1 = { id: 456, name: 'Antonio', email: 'c@chema.com' }; 
    const setUserMock = jest.fn();


    test('Task: should show component without user (achieved)', () => {  

        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('preForTested');
        expect( preTag.innerHTML ).toBe('null');
        // screen.debug();

    });

    test('Task: should call setUser when clicked btn (no achieved)', () => {  
        // Mi idea era crear el user1 y hacer que apareciera el id y ya estaría implementado pero no. Me hacia falta tb hacer el mock del setUser ya que el eroor que me daba era que ese setUser no era una funcion.
        render(
            <UserContext.Provider value={ { user: user1, setUser: setUserMock } }>
                <LoginPage/>
            </UserContext.Provider>
        );
        // const preTag = screen.getByLabelText('preForTested');
        const btnNewUser = screen.getByRole('button');
        fireEvent.click(btnNewUser);

        expect( setUserMock ).toHaveBeenCalledWith(user1);
    });

});