import { Box, Toolbar } from '@mui/material';
import { Navbar, SideBar } from '../components';


const drawerWidthNav = 240;

export const JournalLayout = ({children}) => {
  return (
    <>
        <Box 
          className="animate__animated animate__fadeIn animate__faster"
          sx={{ display: 'flex'}}>

            <Navbar drawerWidth={drawerWidthNav}/>

            <SideBar drawerWidth={drawerWidthNav}/>

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3}}
            >
              <Toolbar/>
              {children}
            </Box>
        </Box>
    </>
  )
}
