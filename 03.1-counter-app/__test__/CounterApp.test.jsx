import { render, screen } from "@testing-library/react";
import App from "../src/FirstApp";

describe('pruebas a CounterApp', () => {

    test('Tarea 1: hacer match con el snapshot', () => {
        const { counter } = render(
            <App
                value = {1}
            />
        );
        expect( counter ).toMatchSnapshot();
    });

    test('Tarea 2: debe mostrar el valor inicial de 1', () => {

    });

});