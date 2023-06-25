import { useState } from 'react';



export const useForm = ( initialForm = { } ) => {

    // cortado del FromCustomHook
    const [formState, setFormState] = useState( initialForm );
   
    const onInputChange = ( { target } ) => { // del evento desestructuras y obtienes el target que es hacia donde apunta el evento
        const { name, value } = target; // de este target queires el valor y el nombre
        
        // para cambiar el state y como es un objeto, usuas el spread para mantener los valores originales y lo que quieres es que la propiedad name, tiene que ser entre brackets porque sino no funciona, cambie al valor, value, que le estás dando nuevo
        setFormState({
            ...formState,
            [ name ]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm)
    };

    return {
        // aquí pones lo que quieres mostrar al 'mundo'
        formState,
        onInputChange,
        // para exponer los elementos del forState ⬇️ y evitar lineas de código y coger simplemente lo que necesitas en una línea en el FormCustomHook
        ...formState,
        onResetForm,
    }
}
