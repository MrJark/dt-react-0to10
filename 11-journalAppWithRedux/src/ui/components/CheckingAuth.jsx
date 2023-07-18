import { CircularProgress, Grid } from '@mui/material';



export const CheckingAuth = () => {


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'background.darkmode', padding: 4 }}>
            
            <Grid
                container
                direction='row'
                justifyContent='center'
                sx={{ 
                    backgroundColor: 'background.dark', 
                    padding: 3, 
                    borderRadius: 4,
                    width: { sm: 600 }
                }}
            >
                <CircularProgress sx={{color:'primary.200'}}/>
            </Grid>

        </Grid>
    )
}
