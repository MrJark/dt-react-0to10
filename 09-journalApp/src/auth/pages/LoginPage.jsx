import { Link as RouterLink } from 'react-router-dom'; // como tienes dos Link, este le pones un alias para que no haya conflicto entre ellos
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout';


export const LoginPage = () => {

// el primer grid es el container general, el body ya que tiene puesta la 'clase' container. El sx es como el style (no confundir con el xs, que es medida de tamaño)
// el segundo grid es para la caja ya que tinee la 'clase' item 
// material design trabaja bajo la condición "movile first" por tanto, tomará por defecto pantallas muy pequeñas. Mui trabaja con grillas de 12 elementos
    return (
        <AuthLayout title='Login'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='example@example.com'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='password'
                            fullWidth
                        />
                    </Grid>

                    <Grid container 
                        spacing={2}
                        sx={{mb:2}}>

                        <Grid item xs={12} sm={6} mt={3}>
                            <Button 
                                variant='contained'
                                fullWidth
                            >Login</Button>
                        </Grid>

                        <Grid item xs={12} sm={6} mt={3}>
                            <Button 
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
