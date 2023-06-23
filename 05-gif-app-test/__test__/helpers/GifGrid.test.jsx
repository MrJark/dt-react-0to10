import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// para hacer mocks necesitas las siguientes lineas de código 
jest.mock('../../src/hooks/useFetchGifs'); // Paso 1º: le dices a jest que haga un mock de la ruta que necesitas

describe('Pruebas en <GifGrid/>', () => {
    // El GifGrid tiene un categoría por defecto por tanto, tienes que añadirle los proptypes
    const category = 'Dragon Ball';

    test('debe mostrar el loading inicial', () => {

        // Paso 2º: La siguiente linea es para el mock de la ruta. Aquí es donde se le dice los datos que tinee que reciubir, en este caso (porque estás cargando y aun no tienes nada) son las images que son un arreglo vacio hasta que se mande la petición y el isLoading que por defectoi está en true porque aun no se ha cargado nada
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={category}/>);
        // screen.debug();
        expect( screen.getByText('Loading...'));
        expect( screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagesnes mediante el useFetchGifs', () => {

        // Paso 3: creas un backend ficticio con los datos que necesitas de cada una de las imágenes (en este caso)
        const gifs = [
            {
                id: 'ABC',
                title: 'Dragon Ball',
                url: 'https://localhost/goku.jpg',
            },
            {
                id: '123',
                title: 'One Piece',
                url: 'https://localhost/luffy.jpg',
            },
    
        ]

        
        // Paso 2º: mock de la rutra con lo que recibe además de tener los datos actualizados. Aquí el isLoading ya no está en true porque ya ha cargado y las imagenes
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        
        //! OJO. La posición de los elementos importa, el render debes ponerlo siempre despues de las const y del mock
        
        render( <GifGrid category={category}/>);

        // Paso 4: evaluaciones de lo que necesites
        expect( screen.getAllByRole('img').length ).toBe(2);

    })

})