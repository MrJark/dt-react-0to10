import {render, screen} from '@testing-library/react';
// el render es el método y el scrren es la pantalla, el window donde está el contenido
import App from '../src/FirstApp';

// Simplificación del código de FistApp

describe('pruebas en <App /> de FirstApp2', () => {

    const title = 'Hola, soy Vegeta';
    const subTitle = 'Soy un subitulo';

    test('debe hacer match con el snapshot', () => {

        const { container } = render( <App title={title} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el mensaje "Hola soy Vegeta" ', () => {

        render( <App title={title} />);
        expect( screen.getByText(title)).toBeTruthy();
        // screen.debug(); // para ver el objeto
    });

    test('debe mostrar el titulo como h1', () => {

        render( <App title={title} />);
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain( title ); // en el screen, que tenga el rol de header con nivel 1 (h1) y que esté en le html y que eso, ese elemento, contenga el tiitulo aun pudiendo tener espacios

    });

    test('debe mostrar el subtitulo enviado por props', () => {

        render(
            <App 
                title={title} 
                subTitle={subTitle}
            />
        );
        expect( screen.getAllByText(subTitle).length).toBe(1);

    })
})