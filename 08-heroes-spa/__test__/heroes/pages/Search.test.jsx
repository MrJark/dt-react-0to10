import { render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Search } from '../../../src/heroes/pages';
import { AuthContext } from '../../../src/auth';


// para la Task 2 necesitas un mockup parcial de la ruta useNavegate
const mockedUseNavegate = jest.fn();
jest.mock('react-router-dom', () => ({ // mock de la ruta que necesitas
    ...jest.requireActual('react-router-dom'), // spread de todas las rutas que usas en el test
    useNavigate: () => mockedUseNavegate // pero le dices que solo quieres esta y eso es una función de ahí que se cree la const mockedUseNavegate
}));

describe(' test on <Search/>', () => {

    const infoForm = {};

    test('should show default value with snapshot', () => {

        const { container } = render(
            <MemoryRouter>
                <Search/>
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
        // en esto y ver la app, la pag se search, sabes si está bien y si lo está, haces el snapshot
        // render(
        //     <MemoryRouter>
        //         <Search/>
        //     </MemoryRouter>
        // );
        // screen.debug(); 

    });

    test('should show Batman and the input in queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search/>
            </MemoryRouter>
        );
        // screen.debug()
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman'); // mostrar el input en el query
        
        // Tarea: mostrar qie los divs no se muestran. Es decir, display: none. (🔸 Casi lo consigo, el error a sido querer coger los dos divs a la vez, tenia que hacerlo de uno en uno pero la lógica era la misma, pero con el getByLabelText y no con el All)
        // con esta validación siguiente no es suficiente ya que el div que diga no se encontró y el de busca, deberían tener el display en none y para hacerlo tienes que colocar un aria-label que los identifique y puedas 'cogerlos' con un getAllByLabelText
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg'); 
        // expect(screen.getAllByTestId('catch-display-none')).toContain('none')
        const div = screen.getByLabelText('catch-display-none-search');
        // console.log(div.style);
        expect( div.style.display ).toBe('none');
    });

    test('Task 1: should show the error div when it doesnt find a hero ✅', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Search/>
            </MemoryRouter>
        );
        const divError = screen.getByLabelText('catch-display-none-not-hero');
        // console.log(divError.style);
        expect( divError.style ).not.toContain('none');

    });

    test('Task 2: should the navigate call a new screen (superman card) ❌ ', () => {

        render(
            <AuthContext.Provider value={'superman'}>
                <MemoryRouter initialEntries={['/search?q=superman']}>
                    <Search/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

    })

});