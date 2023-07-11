import { Grid, Typography } from "@mui/material"


// reutilización de los componentes y estilos comunes a ciertas páginas para no repetir código
//! ojo el children tiene que escribirse en singular, sino no funcionará
export const AuthLayout = ({children, title = ''}) => {


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'background.darkmode', padding: 4 }}>
            
            <Grid
                item
                className='box-shadow'
                xs={3}
                sx={{ 
                    backgroundColor: 'background.light', 
                    padding: 3, 
                    borderRadius: 4,
                    width: { sm: 600 }
                }}
            >
                <Typography variant='h5' sx={{mb: 1}}>{title}</Typography>

                {/* los childrens será los componentes específicos de cada una de las páginas */}
                { children }
            </Grid>

        </Grid>
    )
}
