import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from '../../../src/heroes/pages';


describe(' test in <Hero/>, This test i am doing alone to corrobotrate my knowledge', () => {

    const heroTest = 'dc-superman';

    test('Task 1: should show default value with snapshot ', () => {

        render(
            <MemoryRouter initialEntries={[`/${ heroTest }`]}>
                <Hero/>
            </MemoryRouter>
        )
        screen.debug();
        // expect( container ).toMatchSnapshot();

    });

})