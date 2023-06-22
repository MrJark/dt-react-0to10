import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('test al componente <GifItem/>', () => {

    const title = 'Dragon Ball';
    const url = 'https://url-cualquiera.com/';

    test('match con el snapshot', () =>{

        const { container } = render( <GifItem title={title} url={url}/>);
        
        expect( container ).toMatchSnapshot();

    });

    test('debería retornar el gif en imagen con el título y rul idicados', () => {

        render( <GifItem title={title} url={url}/>)
        // screen.debug();
        // Forma lenta ya que si quieres evaluar muchos componentes de la img, va a ser eterno. Para ello se desesrtuctura la propia img en los elementos que quieres tener
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        /* */
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('moestrar el título como propiedad vista', () => {

        const { container } = render( <GifItem title={title} url={url}/>);
        expect( screen.getByText(title)).toBeTruthy();

    });

});