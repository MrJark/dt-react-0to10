import render from '@testing-library/react';
import App from '../src/FirstApp';


describe('pruebas en <App /> de FirstApp', () => {

    test('debe hacer match con el snapchot', () => {

        render( <App/> )

    })

})