import { StarBorder } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';




export const NothigSelectedView = () => {


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh -100px)', backgroundColor: 'background.grey', padding: 4, borderRadius: 2 }}
        >
            <Grid item xs={12}>
                <StarBorder sx={{fontSize: 50, color: 'secondary.dark'}}/>
            </Grid>
            <Grid item xs={12}>
                <Typography color='letter.light' variant='h5'>Create an entry</Typography>
            </Grid>
        </Grid>
    )
}
