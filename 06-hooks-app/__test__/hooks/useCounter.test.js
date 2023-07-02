import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas sobre el useCounter', () => { 

    test('should return default values', () => {

        // el renderHook permite renderizar un hook. El renderHook regresa como está ese hook en ese preciso momento
        const { result } = renderHook( () => useCounter());
        // console.log(result); // el current es el objeto que regresa todo lo que tiene el hook por ende, la constante de abajo, es la desestructura del objeto
        const { counter, increment, decrement, resets } = result.current;
        // desestructuras aquello que quieras, tdo ya que es para hacer pruebas

        expect( counter ).toBe(0); // valor inicial de counter es 0 por tanto, se espera que sea tb 0. Como es un numero o un elemento primitivos, se usa el .toBe para igualar
        expect( decrement ).toEqual( expect.any(Function)); // se espera que sea una función y como son objetos, se pone el .toEqual. Si se esperara que fuera un numero o un string, se capitalizaría la primera letra, String, Number, Boolean
        expect( increment ).toEqual( expect.any(Function));
        expect( resets ).toEqual( expect.any(Function));
    });

    test('Task: should generate in the counter the value of 100 (achieved)', () => {

        const num = 100;
        const { result } = renderHook( () => useCounter(num));
        const { counter, increment, decrement, resets } = result.current;

        // console.log(counter);
        expect( counter ).toBe(100);
    });

    test('should increment the value counter by value', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, increment } = result.current;

        // increment(); // al llamarla, esperas que te incremente en 1 porque el value = 1;
        // para hacer pruebas sobre los elementos que modifican el estado de react, tienes que hacerlo a través de una función que se llama act con la siguiente estructura
        // act(() => {
        //     /* fire events that update state */
        // });
        act( () => {
            increment(); // las funciones que modifiquen elementos de react, debes llamarlas a través del act()
        });
        // expect( counter ).toBe(1); // esto da error porque está cogiendo el elemento counter con los valores iniciales, tan cual los extrajiste del result por tanto, para que te de correcto debes coger los valores actuales:
        expect( result.current.counter ).toBe(1); // coges los valores ACTUALES del counter
    });

    test('should decrement the value counter by value', () => {
        // igual que el increment

        const { result } = renderHook( () => useCounter());
        const { counter, decrement } = result.current;

        act( () => {
            decrement(); 
        });
        
        expect( result.current.counter ).toBe(-1); 
        // expect( result.current.counter ).toBe(0); // esta línea será correcta si en el useCounter, en la función decrement obligo a que no sean valores menores a 0
    });

    test('should resert the value counter to 0', () => {
        // igual que el increment

        const { result } = renderHook( () => useCounter());
        const { counter, resets, increment } = result.current;

        act( () => {
            increment();
            resets();
        });
        // primero lo incrementa (o lo disminuye, es indiferente) y el valor que pongas también es indiferente porque luego se ejecuta el reset y se vuelve al valor inicial, que como no hay nada, es cero (el valor que tiene el useCounter por defecto)
        expect( result.current.counter ).toBe(0); 
    });



});