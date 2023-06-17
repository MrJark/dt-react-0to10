import { usContext } from "../../src/bases/06-deses-obj"

// Tarea: (conseguida aunque solo de una manera)
describe('prueba 06-desestructuración', () => {

    test('usContext debería devolver un arreglo con la data: clave y edad', () => {

        // const clave = 'Iron Man';
        // const nombre = 'Tony Stark';
        // const edad = 49;
        // const rango = 'Captain';
        // de la forma anterior no es porque tiene que ser un arreglo lo que recibe
        const arr = {
            clave: 'Ironman',
            nombre: 'Tony',
            edad: 49,
            rango: 'Captain',
        }
    
        const context = usContext(arr);
        console.log(context);

        // Forma 1
        expect(context).toEqual({
            nombreClave: 'Ironman',
            anios: 49,
            latlng: { lat: 14.1232, lng: -12.3232 }
        });
        // Forma 2
        // expect(context).toEqual(arr)

    })

})