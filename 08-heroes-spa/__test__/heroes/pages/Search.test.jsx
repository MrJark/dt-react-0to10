import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../../src/heroes/pages';


describe(' test on <Search/>', () => {

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
        screen.debug()
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman'); // mostrar el input en el query
        
        // Tarea: mostrar qie los divs no se muestran. Es decir, display: none. ( Casi lo consigo, el error a sido querer coger los dos divs a la vez, tenia que hacerlo de uno en uno pero la lógica era la misma, pero con el getByLabelText y no con el All)
        // con esta validación siguiente no es suficiente ya que el div que diga no se encontró y el de busca, deberían tener el display en none y para hacerlo tienes que colocar un aria-label que los identifique y puedas 'cogerlos' con un getAllByLabelText
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg'); 
        // expect(screen.getAllByTestId('catch-display-none')).toContain('none')
        const div = screen.getByLabelText('catch-display-none-search');
        console.log(div.style);
        expect( div.style.display ).toBe('none');
    });

});