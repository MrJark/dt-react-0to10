import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../../src/heroes/pages';


describe(' test on <Search/>', () => {

    test('should show default value with snapshot', () => {

        render(
            <MemoryRouter>
                <Search/>
            </MemoryRouter>
        );

        screen.debug()

    });

});