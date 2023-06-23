import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('pruebas en el hook del useFetchGifs. Son hooks customizados', () => {
    //! los hoocks personalizados, y todos, se evaluan dependiendo de sus returns
    test('debe regresar el estado inicial', () => {

        // renderHook fucniona con un callback, en este caso useFetchGifs, que a su vez necesita la categoría, dragon ball.
        const { result } = renderHook( () => useFetchGifs('Dragon Ball') );
        // console.log(result); // lo que devuelve es el elemento images y isLoading INICIALES, es decir,  { current: { images: [], isLoading: true } }
        // lo que devuelve el result es un current con { images: [], isLoading: true }, por tanto, puedes desestructurarlo en sus piezas
        const { images , isLoading } = result.current;

        // En los estados iniciales isLoading es true y en las img no hay nada, a void array
        expect( images.length).toBe(0);
        expect( isLoading).toBeTruthy();
    });

    test('debe retornar las imagenes con contenido y el isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('Dragon Ball'));
        // lo que espero que haga es que me importe las imágenes y me cambie el estado a falso
        await waitFor(
            // con el waitFor le dices que espere hasta que pase la condición
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            
        );
        // después de cumplir la condición a la que has esperado, que haga lo que esperas que haga
        const { images , isLoading } = result.current;

        // En los estados iniciales isLoading es true y en las img no hay nada, a void array
        expect( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();


    });

});