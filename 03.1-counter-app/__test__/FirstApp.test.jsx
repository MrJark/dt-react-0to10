import {render} from '@testing-library/react';
import App from '../src/FirstApp';


describe('pruebas en <App /> de FirstApp', () => {

    test('debe hacer match con el snapchot', () => {

        const title = 'Hola, soy Vegeta';
        const {container} = render( <App title={title}/> ); // render además exporta un objeto que tiene ciertas propiedades, como en este caso el container

        expect(container).toMatchSnapshot(); // este método crea un snapchot del modelo que estás testeando para que se algo se pierde por el camino, puedas saber como era antes
    });

    test('debe mostrar el título como un h1', () => {

        const title = 'Hola soy Vegeta';
        const { container, getByText } = render( <App title={title}/> );

        expect( getByText(title) ).toBeTruthy(); // coge el title y, como texto que es, espera que exita con en toBeTruthy ( no cumple esto solo la prueba)

        const h1 = container.querySelector('h1'); // container actua como document en js
        console.log(h1.innerHTML);
        // expect(h1.innerHTML).toBe(title); // el problema de este es que si hay espacios en algún lugar y no es exactamente igual, dará errer. la solución -> .toContain
        expect(h1.innerHTML).toContain(title);
    })

})