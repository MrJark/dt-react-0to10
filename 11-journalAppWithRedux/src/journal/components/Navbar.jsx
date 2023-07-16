import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";



export const Navbar = ({drawerWidthNav = 240}) => {


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

                    <IconButton color= "background.grey">
                        <Link to="/auth/register">
                            <LogoutOutlined/>
                        </Link>
                        
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
