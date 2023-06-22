import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('test al componente <GifItem/>', () => {

    const title = 'Dragon Ball';
    const url = 'https://url-cualquiera.com'

    test('match con el snapshot', () =>{

        render(<GifItem/>)
        
        expect( container ).toMatchSnapshot();

    });

    test('debería retornar el gif en imagen con el título y rul obligatorios', () => {



    })

})