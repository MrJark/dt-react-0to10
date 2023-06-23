import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';


describe('Pruebas en <GifGrid/>', () => {
    // El GifGrid tiene un categoría por defecto por tanto, tienes que añadirle los proptypes
    const category = 'Dragon Ball';

    test('debe mostrar el loading inicial', () => {

        render( <GifGrid category={category}/>)
        // screen.debug();
        expect( screen.getByText('Loading...'));
        expect( screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagesnes mediante el useFetchGifs', () => { second })

})