import { getSaludo } from '../../src/bases/02-template-string';


describe('Prueba en 02-template-string', () => { 
    
    test('getSaludo debe devolver "Hola + nombre" ', () => { 

        const name = 'Chema';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    });

});