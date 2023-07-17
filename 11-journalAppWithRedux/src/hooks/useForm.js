// custom hook realizado en anterioes clases
import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [fromValidation, setFromValidation] = useState({});

    useEffect( () => {
        createValidators();
    }, [formState])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys(fromValidation)) {
            if( fromValidation[formValue] !== null) return false; // esto viene a decir que, si en el formValidation alguna propiedad del formValue no es null, significaría que ha habido un error porque ha saltado el formValidations del RegisterPage
        }

        return true;
    }, [fromValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage = 'Error with validation'] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        setFromValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        
        ...fromValidation,
        isFormValid,
    }
};