import { useDispatch } from 'react-redux';

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { startLogout } from '../../store/auth';



export const Navbar = ({drawerWidthNav = 240}) => {

    const dispatch = useDispatch();
    const onLogOut = () => { // esta tarea no es síncrona. Hay que hacer varias dispatch antes d elogout
        dispatch( startLogout() );
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: {sm: `calc(100% - ${drawerWidthNav}px)`},
                ml: { sm: `${drawerWidthNav}px`}
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge='start'
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuOutlined/>
                </IconButton>

                <Grid container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography 
                        variant="h6" 
                        noWrap 
                        component='div'
                    >Journal App</Typography>

                    <IconButton 
                        onClick={onLogOut}
                    >
                        <Link to="/auth/register">
                            <LogoutOutlined sx={{color: "primary.dark"}}/>
                        </Link>
                        
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
