
describe('Pruebas en <Demo Component/>', () => { // descripción que toda prueba debería llevar para saber donde estamos 
    
    
    test('Esta prueba no debe fallar', () => {
        // 1. Inicialización ( lo que se tiene )
        const message1 = 'Hola mundo';
    
        // 2. Estímulo ( lo que quieres conseguir )
        const message2 = message1.trim();
    
        // 3. Observación del comportamiento esperado ( comparación de lo que tengo a lo que espero )
        expect(message1).toBe(message2); // "idioma" de jest -> para que pase la prueba, message1 tiene que ser igual al messaje2
        // par no hacer el if (messaje1 === ...){...} jest propone este tipo de sintaxis
       
    });

 });