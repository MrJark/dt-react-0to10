import { getHeroeById } from '../../src/bases/08-imp-exp';

describe('puebas en 08-imp-exp ', () => {

    test('getHeroeById tiene que devolver un heroe por cada id enviado', () => {

        const id = 2;
        const hero = getHeroeById( id );
        console.log(hero);

        // puedes tener tantos expect como quieras y solo pasará la prueba si todos se cumplen
        // le mando el objeto directamente o lo puedo crear 
        expect( hero ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 1000;
        const hero = getHeroeById( id );
        console.log(hero);
        // el .toBeFalse() da a entender que la función tiene que retorno un false, null o undefined aunque tb se podría poner ' expect( hero ).toBe( undefined ) '
        expect( hero ).toBeFalsy()

    });

    /*
    Tarea:
        Retornar un arreglo con los heroes de DC = length === 3
        a su vez un .toEqual con esos 3 elementos
        Después, lo mismo con los de Marvel legth === 2
    */
   

})