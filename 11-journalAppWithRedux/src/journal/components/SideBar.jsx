import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



export const SideBar = ({drawerWidthNav = 240}) => {
    return (
       <Box
        component='nav'
        sx={{ width: {sm: drawerWidthNav} , flexShrink: {sm: 0}}}
       >
            <Drawer
                variant="permanent" // el permanent permite ocultarlo
                open={true} // cuando una propiedad en react siempre está en true, con solo indicar la propierdad sobraría
                sx={{
                    display: { xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthNav}
                }}
            >

                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component='div'
                    >
                    Chema</Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        ['Enero', 'Ferbrero', 'Marzo', 'Abril', 'Mayo'].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'texto aleatorio'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

       </Box>
    )
}