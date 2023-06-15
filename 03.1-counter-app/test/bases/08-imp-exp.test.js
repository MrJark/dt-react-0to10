import { getHeroeById, getHeroesByOwner } from '../../src/bases/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('puebas en 08-imp-exp ', () => {

    test('getHeroeById tiene que devolver un heroe por cada id enviado', () => {

        const id = 2;
        const hero = getHeroeById( id );
        // console.log(hero);

        // puedes tener tantos expect como quieras y solo pasará la prueba si todos se cumplen
        // le mando el objeto directamente o lo puedo crear 
        expect( hero ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 1000;
        const hero = getHeroeById( id );
        // console.log(hero);
        // el .toBeFalse() da a entender que la función tiene que retorno un false, null o undefined aunque tb se podría poner ' expect( hero ).toBe( undefined ) '
        expect( hero ).toBeFalsy()

    });

    /*
    Tarea:
        Retornar un arreglo con los heroes de DC = length === 3
        a su vez un .toEqual con esos 3 elementos
        Después, lo mismo con los de Marvel legth === 2
    */
    test('getHeroByOwner debería devolver un arreglo con DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner )
        console.log(heroes);

        // Forma 1
        expect(heroes.length).toBe( 3 );
        // Forma 2
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        // Forma 3
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

    });
    
    test('getHeroByOwner debería devolver un arreglo con Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner )
        console.log(heroes);

        // Forma 1
        expect(heroes.length).toBe( 2 );
        // Forma 2
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
        // Forma 3
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

    });
    
})