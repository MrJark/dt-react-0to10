import { render, screen } from "@testing-library/react";
// import App from "../src/FirstApp";
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

});