import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";


describe('pruebas a CounterApp', () => {

    const initialValue = 1;

    test('Tarea 1: hacer match con el snapshot (cnoseguido)', () => {
        const { container } = render(
            <CounterApp
                value={initialValue}
            />
        );
        expect( container ).toMatchSnapshot();
    });

    test('Tarea 2: debe mostrar el valor inicial de 1(no conseguido)', () => {

        render(
            <CounterApp
                value={initialValue}
            />
        );
        expect( screen.getByText(initialValue)).toBeTruthy();

    });

    test('debe incrementar con el btn +1', () => {

        render(
            <CounterApp
                value={initialValue}
            />
        );
        fireEvent.click(screen.getByText('+1')); // fireEvent es un método para evaluar eventos, en este caso el de click el cual tiene que ser, dentro del screen, algo que contenga el texto '+1'
    });
    
    test('debe disminuir con el btn -1', () => {

        render(
            <CounterApp
                value={initialValue}
            />
        );
        fireEvent.click(screen.getByText('-1')); // fireEvent es un método para evaluar eventos, en este caso el de click el cual tiene que ser, dentro del screen, algo que contenga el texto '+1'
    });
    
    test('debe funcionar el btn reset', () => {

        render(
            <CounterApp
                value={initialValue}
            />
        );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset')); // fireEvent es un método para evaluar eventos, en este caso el de click el cual tiene que ser, dentro del screen, algo que contenga el texto '+1'
        expect( screen.getByText(1)).toBeTruthy();  
    });
    
    test('debe funcionar el btn reset (otra forma de hacerlo)', () => {

        render(
            <CounterApp
                value={initialValue}
            />
        );
        // Tienes que poner en el btn del CounterApp, en este caso el de reset, arial-label="btn-reset". Es como el id para que lo reconozca
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'})); // a través del rol y coges el nombre que le has puesto
        expect( screen.getByText(1)).toBeTruthy();  
    });
    
    test('juego de btns', () => {

        render(
            <CounterApp
                value={initialValue}
            />
        );
        fireEvent.click(screen.getByText('+1')); // se le suma 1 a initialValue
        fireEvent.click(screen.getByText('+1')); // se le suma 1 a initialValue
        fireEvent.click(screen.getByText('+1')); // se le suma 1 a initialValue
        fireEvent.click(screen.getByText('Reset')); // reset y vuelve a 1
        fireEvent.click(screen.getByText('+1')); // se le suma 1 a initialValue
        fireEvent.click(screen.getByText('+1')); // se le suma 1 a initialValue
        expect( screen.getByText(3)).toBeTruthy(); // el resultado después de las sumas y el reset es de 3 y validas que eso sea ciertos
    });

});