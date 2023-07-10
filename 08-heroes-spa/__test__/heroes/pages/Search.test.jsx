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

});