import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"




export const NoteView = () => {

    return (
        <Grid 
            className="animate__animated animate__fadeIn animate__faster"
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{mb: 1}}
        >
            <Grid item>
                <Typography fontSize={40} fontWeight={'light'}>12 de Julio, 2023</Typography>
            </Grid>
            <Grid item>
                <Button sx={{color: 'primary.dark', padding: 2}}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>

                Save</Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter Title"
                    label='Title'
                    sx={{border: 'nones', mb: 1}}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What's happened today?"
                    sx={{border: 'nones', mb: 1}}
                />
            </Grid>

            <ImageGallery/>

        </Grid>
    )
}
