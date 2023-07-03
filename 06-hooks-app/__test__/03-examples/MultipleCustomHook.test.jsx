import { act, fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';


// haces el mock del useFetch porque en el MultipleCustomHook está el fetch el cual es llamado del useFetch por tanto tienes que traerlo
// y lo que hace el mock es remplazar e imitar la función que hay dentro del useFetch 
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test to MultipleCustomHook', () => { 
 
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    beforeEach( () => { // esto es para resetear todas las pruebas 
        jest.clearAllMocks();
    })

    test('should show the default values', () => {

        // como useFetch tiene dependencias de data, isLoading y hasError, es necesario que las aterrices en cada una de las pruebas que tengan dependencias del fetch, es decir, en todas porque este componente depende del useFetch
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null, 
        });

        render( <MultipleCustomHook/> ); // traes el componente
        // Esta prueba podría concluir haciendo un snapshot pero tb se puede hacer de otra forma. Ej: valuando lo que tiene a traveés del screen.debug()

        // si lo haces así, tienes que tener cuidado con los espacios, es key sensitive
        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Rinck and Morty Characters'));
        
        const nexBtn = screen.getByRole('button',{name: 'Random Character'});
        expect( nexBtn.className ).toBe('btn btn-primary mt-3');
        
        // screen.debug();
    });

    test('should show a quote', () => {

        useFetch.mockReturnValue({
            data: { name: 'Rick Snachez', status: 'alive', image: 'image', id: 1 },
            isLoading: false,
            hasError: null, 
        });
        render( <MultipleCustomHook/> );
        // screen.debug();
        expect( screen.getByText('Status:')).toBeTruthy();
        expect( screen.getByRole('img')).toBeTruthy();

    });

    test('should call increment function', () => {

        // esto lo necesitas para evaluar el click en el btn ya que hace uso el componente qeu evaluas pero si solo lo colocas en este test, dará error ya que todos los demás test lo necesitan. En vez de copiarlo en cada uno de los test, lo escribes a la altura de los test, en el describe y puedes cogerlo en todos los test
        // const mockIncrement = jest.fn();
        // useCounter.mockReturnValue({
        //     counter: 1,
        //     increment: mockIncrement
        // });

        useFetch.mockReturnValue({
            data: { name: 'Rick Snachez', status: 'alive', image: 'image', id: 1 },
            isLoading: false,
            hasError: null, 
        });


        render( <MultipleCustomHook/> );

        const nexBtn = screen.getByRole('button',{name: 'Random Character'});
        fireEvent.click( nexBtn );

        expect( mockIncrement ).toHaveBeenCalled();
    });

})