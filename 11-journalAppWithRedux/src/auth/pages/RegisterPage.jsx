import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom'; // como tienes dos Link, este le pones un alias para que no haya conflicto entre ellos
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
    email: '',
    password: '',
    displayName: '',
};

const formValidations = { // esto es la validación personalizada para el formulario. Cada uno puede tener ciertas validaciones distintas
    email: [(value) => value.includes('@') && value.includes('.'), 'The email should have an "@" and "."'],
    password: [(value) => value.length >= 8, 'The password should have more than 8 characteres'],
    displayName: [(value) => value.length >= 2, 'The name is required and should have more than 2 characters'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [fromSubmitted, setFromSubmitted] = useState(false);

    // para validar los campos del form, porque no cualquier cosa vale, se crean las variables isFormValid, isDisplayNameValid, isEmailValid, isPasswordValid
    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations); // como segundo argumento al hook le mandas el validation ( tb se pueden usar los useMemo o con const èro de esta manera se limita el código escrito)


    const onSubmit = (e) => {
        e.preventDefault();
        setFromSubmitted(true);

        if( !isFormValid ) return;
        // console.log(formData);

        dispatch( startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout title='Register'>
            {/* <h2>isValid? { isFormValid ? 'Valid' : 'No valid'}</h2> */}
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Name'
                            type='text'
                            placeholder='John Smith'
                            fullWidth
                            name='displayName'
                            value={ displayName }
                            onChange={ onInputChange }
                            error={!!displayNameValid && fromSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='example@example.com'
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            error={!!emailValid && fromSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='password'
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                            error={!!passwordValid && fromSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container 
                        spacing={2}
                        sx={{mb:2}}>

                        <Grid item xs={12} sm={6} mt={3}>
                            <Button 
                                type='submit'
                                variant='contained'
                                fullWidth
                            >Create Account</Button>
                        </Grid>

                    </Grid>

                    <Grid container
                        direction='row'
                        justifyContent='end'>
                        <Typography sx={{mr: 1}}>Do you have account yet?</Typography>
                        <Link 
                            component={RouterLink}
                            to="/auth/login"
                            sx={{ color: 'letters.dark', textDecoration: 'none' }}
                        >Login</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
