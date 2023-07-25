import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom'; // como tienes dos Link, este le pones un alias para que no haya conflicto entre ellos

import { useMemo } from 'react';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';


const forFormData = {
    email: '',
    password: '',
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth)

    const dispatch = useDispatch(); // estaba bienpara la tarea 1
    // const algo = useSelector(state => state.status); // no hacia falta para la tarea 1

    // useEffect( () => { // no hacia falta pra la tarea1
    //     dispatch(checkingCredentials());
    // }, [])

    // const [fromSubmitted, setFromSubmitted] = useState(false); // esto no me hacía falta para la tarea del login con email y password

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const { email, password, onInputChange} = useForm(forFormData);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch( startLoginWithEmailPassword( { email, password } )); // no lo había cambiado a start...

    };

    const onGoogleSignIn = () => {
        // console.log('bum'); // para saber si el test pasa
        dispatch( startGoogleSignIn());
    };

// el primer grid es el container general, el body ya que tiene puesta la 'clase' container. El sx es como el style (no confundir con el xs, que es medida de tamaño)
// el segundo grid es para la caja ya que tinee la 'clase' item 
// material design trabaja bajo la condición "movile first" por tanto, tomará por defecto pantallas muy pequeñas. Mui trabaja con grillas de 12 elementos
    return (
        <AuthLayout title='Login'>
            <form 
            aria-label='submitForm'
            className="animate__animated animate__fadeIn animate__faster"
            onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Email'
                            type='email' 
                            placeholder='example@example.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='password'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            inputProps={{ // para que funcione la prueba del fireEvent
                                'data-testid': 'Password'
                            }}
                        />
                    </Grid>


                    <Grid  
                        item xs={12}  
                        mt={3} 
                        display={!!errorMessage ? '' : 'none'}
                    >
                        <Alert severity='error'>
                            {errorMessage}
                        </Alert>
                    </Grid>

                    <Grid container 
                        spacing={2}
                        sx={{mb:2}}>

                        <Grid item xs={12} sm={6} mt={3}>
                            <Button 
                                disabled= { isAuthenticating } // para hacer que se deshabilite si ya está autenticado
                                type='submit'
                                variant='contained'
                                fullWidth
                            >Login</Button>
                        </Grid>

                        <Grid item xs={12} sm={6} mt={3}>
                            <Button
                                aria-label='google-btn' // para los test
                                disabled= { isAuthenticating } // para hacer que se deshabilite si ya está autenticado
                                onClick={onGoogleSignIn}
                                variant='contained'
                                fullWidth>
                                
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>

                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container
                        direction='row'
                        justifyContent='end'>

                        <Link 
                            component={RouterLink}
                            to="/auth/register"
                            sx={{ color: 'letters.dark', textDecoration: 'none' }}
                        >Create An Account</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
