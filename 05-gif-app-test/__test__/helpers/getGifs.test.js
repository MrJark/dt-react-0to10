import { getGifs } from "../../src/components/helppers/getGifs"

describe('Pruebas en getGifs()', () => {

    test('debe devolver un arreglo de gifs', async() => {
        // puedes poner async porque estás pruebando una función de js y no de react

        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBeGreaterThan(0); // da un arregla de gifs que sea mayor a cero pero eso no es la funcionalidad real que se debe evaluar porque no te dirá si funciona o no
        expect( gifs[0]).toEqual({
            // Quieres que al menos en la posición cero de gifs, el primero, tenga la siguiente estructura:
            id: expect.any( String ),
            title:  expect.any( String ),
            url:  expect.any( String ),
            // la estructura es obligatoria pero sus elementos tienen que ser strings
        });
    });

});