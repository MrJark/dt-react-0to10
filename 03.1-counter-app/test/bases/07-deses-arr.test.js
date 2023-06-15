import { retornaArreglo } from "../../src/bases/07-deses-arr"


describe('pruebas en 07-deses-arr', () => {

    test('retornaArreglo debería devolver un arreglo con un string y un número', () => {

        const [letters, numbers] = retornaArreglo();// desestructuración del arreglo para poder saber que es lo que devuleve y testearlo

        console.log(letters, numbers);

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe( 123 );// el toBe tb puede evaluar números

        // si no sabes cual es el dato que esperas pero sabes que tipo de datos es, puedes usar el typeof para la evalua
        console.log(typeof numbers); // tipo number
        console.log(typeof letters); // tipo string

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // para darle mayor flexibilidad a la prueba, se le puede decir que sea lo que devuelva, cualquier cosa, un string o number
        expect( letters ).toEqual( expect.any(String)); // le dices que te vale lo qeu sea mientras sea string. En etse caso, siempre debe ser con el .to Equal o .to StrictEqual
    });

});