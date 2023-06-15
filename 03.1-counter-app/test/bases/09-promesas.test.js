import { getHeroeByIdAsync } from "../../src/bases/09-promesas";

describe('prueba a 09-promesas async', () => {

    test('debería devolver el heroe despendiendo del id después de 1s', (done) => {
        // en Jest TODOS los test son síncronos
        // done para cuando se evaluan funciones asíncronas
        const id = 1;

        // al ser async puedes usar el .then dentro de estas
        getHeroeByIdAsync(id) 
        .then( hero => {
            // expect( true ).toBe( false ); // como son asíncronos los test, al inicio parece que no hay error pero cunado acaba y vuelve a esta linea, da el error. Para solucionar los prombleas de asincronismo puedes usar lo siguiente
            expect(hero).toEqual( // = a batman porque es el id = 1
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done(); // se pone después de la función asíncrona para jest sepa cuando debe acabar y se pone SIEMPRE dentro del método
        });
    });
    
    test('debería devolver un error si el id no existe', (done) => {
        
        const id = 100;

        // al ser async puedes usar el .then dentro de estas
        getHeroeByIdAsync(id) 
            .catch( error => {
                console.log(error);

                expect(error).toBe(`No se pudo encontrar el héroe con el id = ${id}`)
                done(); // se pone siempre dentro del método
            });
    });

});