import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe('testing on useForm', () => {

    const initialForm = { // puedes enviar el objeto vacio o simular un objeto real como vendría del useForm 
        name: 'Chema',
        aka: 'MrJark',
    }; 

    test('should return default values', () => {

        const { result } = renderHook( () => useForm(initialForm));
        // const {} = result.current; // esta es una de las formas para extraer la info del result
        expect(result.current).toEqual({ // .toEqual porque es un objeto y no un primitivo
            // copias el objeto que estás esperando a través del log del result.current
            formState: initialForm,
            onInputChange: expect.any( Function),
            name: initialForm.name,
            aka: initialForm.aka,
            onResetForm: expect.any( Function)
        });
        // console.log(result.current);
    });

    test('Task: should change the form name (no achieved) ', () => {

        /**
         * Task: 
         *  1º montar el hook
         *  2º llamar al onImputChange con act junto con sus propiedades y le tienes que mandar el evento
         *  3º espero que el name anterio debería ser igual al newName y este deberá estar tanto en el initialState como en el current state
         */
        const newName = 'Mari';

        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange } = result.current;
        // console.log(onInputChange);

        act( () => { // porque estás modificando elementros de React
            onInputChange({ // no he sabido colocar los argumentos de esta función
                target: { 
                    name: 'name', 
                    value: newName
                },
            }); 
        });
        
        expect( result.current.name).toBe(newName);
        expect( result.current.formState.name).toBe(newName);
    });
    
    test('Task: should reset the form name (achieved)', () => {

        const newName = 'Mari';

        const { result } = renderHook( () => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        // console.log(onInputChange);

        act( () => { 
            onInputChange({ 
                target: { 
                    name: 'name', 
                    value: newName
                },
            }); 
            onResetForm(); // solo tienes uqe llamar a esta función ( trayendola del result )después del onInputChange
        });
        
        expect( result.current.name).toBe(initialForm.name);
        expect( result.current.formState.name).toBe(initialForm.name);
    });
})