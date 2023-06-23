import { AddCategory } from "../../src/components/AddCategory";
import {fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en <AddCategory />', () => {
    // en el archivo AddCategory.jsx tenemos que añadir los proptypes porque tiene una prop obligatoria la cual si no la llamas, te va a dar error
    const title = 'Drgon Ball';
    
    test('debe de cambiar el valor del texto', () => {

        // 1º se crea el sujeto de pruebas
        render( <AddCategory onNewCategory={ () => {} }/> );
        // screen.debug(); // como visualización del objeto a evaluar

        // extraes lo que quieres en este caso -> disparo de evantos:
        // 1.1 coges donde queires medir el disparo
        const input = screen.getByRole('textbox'); // forma de atrapar el input, cosa que no es, es un textbox y no input. Si pones input te da error
        // 1.2. usas la importación del disparo de eventos fireEvent
        fireEvent.input(input, { target: { value:title } } );

        // 2º evaluas lo que esperas
        expect( input.value ).toBe(title);

    });

    test('debe de llamar onNowCategory si el input tiene un valor', () => {

        const inputValue = 'Dragron Ball';
        const onNewCategory = jest.fn(); // función "ficticia" creada por Jest

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('the-form');

        fireEvent.input( input, {target: { value: inputValue } } ); // estableces el valor del input
        fireEvent.submit( form ); // con los formularios no hace falta poner nada más
    
        expect(input.value).toBe(''); // para saber que después del submit, el valor debe estar vacio porque se envió el 'mesaje'
        
        expect( onNewCategory ).toHaveBeenCalled(); // para saber si una fucnción ha sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // para saber si una fucnción ha sido llamada como mucho, una vez. El número que pones dentro, son las veces que esperas que se llame
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue); // para saber si una fucnción ha sido llamada con un valor/nombre específicos. En este caso Dragon Ball
        
        // con la prueba de jest.fn() lo que estás buscando es saber si la función onNewCate... está siendo llamada x veces y con que nombre pero te da igual que haga en la parte del padre o donde se haya creado. Solo te impota su uso en este componente
    });

    test('no debe llamar el newCategory si el input está vacio', () => {

        // Tarea: evaluar si el input está vacio que no llame la función(no conseguda)
        // const isVoid = '';
        // const onNewCategory = jest.fn(); // función "ficticia" creada por Jest

        // render( <AddCategory onNewCategory={ onNewCategory }/> );

        // const input = screen.getByRole('textbox');
        // const form = screen.getByLabelText('the-form');

        // fireEvent.input( input, {target: { value: isVoid } } ); // estableces el valor del input
        // fireEvent.submit( form ); // con los formularios no hace falta poner nada más
    
        // expect(input.value).toBe(''); // para saber que después del submit, el valor debe estar vacio porque se envió el 'mesaje'
        
        // expect( onNewCategory ).toHaveBeenCalled(); // para saber si una fucnción ha sido llamada
        /*----*/
        // Formas de hacerlo
        // 1ª
        const onNewCategory = jest.fn(); // función "ficticia" creada por Jest

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const form = screen.getByLabelText('the-form');
        fireEvent.submit( form ); 

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

        // 2ª (el inicio igual pero cambia el expect)
        expect( onNewCategory ).not.toHaveBeenCalled();

    });


});