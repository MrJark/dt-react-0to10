import { Link as RouterLink } from 'react-router-dom'; // como tienes dos Link, este le pones un alias para que no haya conflicto entre ellos
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout';


export const RegisterPage = () => {

    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label='Name'
                            type='text'
                            placeholder='John Smith'
                            fullWidth
                        />
                    </Grid>

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
