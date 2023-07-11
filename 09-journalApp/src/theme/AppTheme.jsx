import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './';


// es un Higher Order Componente porque es un componente que recibe otros componentes
// para saber como se construye, ve al repositorio de Github de mui (https://github.com/mui/material-ui/tree/master/examples/material-cra)
export const AppTheme = ( { children } ) => {


    return (

        <ThemeProvider theme={purpleTheme}>

            <CssBaseline />

            { children }

        </ThemeProvider>
    )
}
