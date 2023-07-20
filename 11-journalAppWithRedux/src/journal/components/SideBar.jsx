
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { SideBarItem } from './' 



export const SideBar = ({drawerWidthNav = 240}) => {

    // Tarea: traet el displayName al sideBar ✅
    const { displayName } = useSelector( state => state.auth); // estrae el name del auth
    const { notes } = useSelector( state => state.journal); // estrae las notes del journal


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
                    {displayName}</Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        notes.map( note => (
                            <SideBarItem key= { note.id } {...note}/>
                        ))
                    }
                </List>

            </Drawer>

       </Box>
    )
}