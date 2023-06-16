import { getImagen } from "../../src/bases/11-async-await";


describe('prueba al archivo 11-async-await', () => {

    test('getImage debe restornar un url de la image', async () => {

        const url = await getImagen();

        expect(typeof url).toBe('string');
    })

})