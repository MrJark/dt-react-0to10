import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas sobre el useCounter', () => { 

    test('should return default values', () => {

        // el renderHook permite renderizar un hook. El renderHook regresa como está ese hook en ese preciso momento
        const { result } = renderHook( () => useCounter());
        console.log(result); // el current es el objeto que regresa todo lo que tiene el hook por ende, la constante de abajo, es la desestructura del objeto
        const { counter, increment, decrement, resets } = result.current;
        // desestructuras aquello que quieras, tdo ya que es para hacer pruebas

        expect( counter ).toBe(0); // valor inicial de counter es 0 por tanto, se espera que sea tb 0. Como es un numero o un elemento básico, se usa el .toBe para igualar
        expect( decrement ).toEqual( expect.any(Function)); // se espera que sea una función y como son objetos, se pone el .toEqual. Si se esperara que fuera un numero o un string, se capitalizaría la primera letra, String, Number, Boolean
        expect( increment ).toEqual( expect.any(Function));
        expect( resets ).toEqual( expect.any(Function));
    });

    test('Task: should generate in the counter the value of 100 (achieved)', () => {

        const num = 100;
        const { result } = renderHook( () => useCounter(num));
        const { counter, increment, decrement, resets } = result.current;

        console.log(counter);
        expect( counter ).toBe(100);
    })

});