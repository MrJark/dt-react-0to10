import { getUser, getUsuarioActivo } from "../../src/bases/05-funciones";

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un pbjeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();
        console.log(user);

        // para asegurarte que la prueba pasa, el testUser debe ser igual a lo que has importado, el getUser
        // expect( testUser ).toBe( user ); //  If it should pass with deep equality, replace "toBe" with "toStrictEqual"
        // cuando son objetos, el .toBe no funciona porque no pueden comparar su ubicación en memoria cosa que con los primitivos sí pasa, debes usar el toStrictEqual o toEqual

        expect( testUser ).toEqual( user );

    });

    // Tarea del 05-funciones (conseguida!!)
    test('getUserActivo debe retornar un objeto', () => {  

        const name = 'Chema';
        
        const testActivo = {
            uid: 'ABC567',
            username: `${name}`
        }

        const activo = getUsuarioActivo(name);
        console.log(activo);

        expect(activo).toEqual(testActivo)
        // tb se puede hacer de la siguiente manera (habiendo eliminado la parte del testActivo ya que lo estas poniendo abajo)
        // expect(activo).toEqual({
        //     uuid: 'ABC567',
        //     username: name,
        // });
    })

});