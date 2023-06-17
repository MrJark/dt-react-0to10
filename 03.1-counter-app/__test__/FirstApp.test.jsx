import {render} from '@testing-library/react';
import App from '../src/FirstApp';


describe('pruebas en <App /> de FirstApp', () => {

    // Si estás en desarrollo, las pruebas del snapshot da mas dolores de cabeza que otra cosa por tatno, mientras estés en desrrollo, se comenta
    // test('debe hacer match con el snapchot', () => {

    //     const title = 'Hola, soy Vegeta';
    //     const {container} = render( <App title={title}/> ); // render además exporta un objeto que tiene ciertas propiedades, como en este caso el container

    //     expect(container).toMatchSnapshot(); // este método crea un snapchot del modelo que estás testeando para que se algo se pierde por el camino, puedas saber como era antes
    // });

    test('debe mostrar el título como un h1', () => {

        const title = 'Hola soy Vegeta';
        const { container, getByText, getByTestId } = render( <App title={title}/> );

        expect( getByText(title) ).toBeTruthy(); // coge el title y, como texto que es, espera que exita con en toBeTruthy ( no cumple esto solo la prueba)

        // Las pruebas siguientes hacen del elemento algo muy estricto y para las pruebas, puede ser un problema la falta de flexibilidad
        // const h1 = container.querySelector('h1'); // container actua como document en js
        // console.log(h1.innerHTML);
        // // expect(h1.innerHTML).toBe(title); // el problema de este es que si hay espacios en algún lugar y no es exactamente igual, dará errer. la solución -> .toContain
        // expect(h1.innerHTML).toContain(title);
        
        // Una forma de hacerlo menos restrictivo es pornerle un atributo al elemento que estás testeando, en este caso, al h1 ( data-testid = "test-title" ). Lo extraes del render por el getByTestId 
        expect(getByTestId('test-title').innerHTML).toBeTruthy(); // esto me dice si el elemento html existe, no está validando si es lo que es, solo si existe
        expect(getByTestId('test-title').innerHTML).toBe(title); // puede dar right o no proque con el toBe tiene que ser idéntico, si hay espación al inicio o final dará error
        expect(getByTestId('test-title').innerHTML).toContain(title); // es menos restrictivo, solo le importa que contenga esas palabras, da igual los espacios delante y detrás
    });

    test('debe mostrar el subtitulo enciado por props', () => {

        const title = 'Hola soy Vegeta'; // no puedo eliminar esta linea si no elimino tb el titulo de app
        const subTitle = 'Soy un subtitulo';
        const { getByText, getAllByText } = render( 
                <App 
                    title={title}
                    subTitle={ subTitle }
                /> 
            );

        expect( getByText(subTitle) ).toBeTruthy(); // getByText se asegura de que solo haya un elemento con las propiedades que le das
        expect( getAllByText(subTitle).length ).toBe(1); // getAllByText me da todos los substitulos que estoy espereando y en el toBe pongo cuantos son los que estoy espereando porque uso el .length

    })

})