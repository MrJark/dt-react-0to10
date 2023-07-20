import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { setActiveNote, startSaveNote, updatedNote } from '../../store/journal';




export const NoteView = () => {
    const dispatch = useDispatch();

    const { active: noteActive } = useSelector(state => state.journal); // quieres obtener el active, quee es el note que has seleccionado pero para que sea más sencillo, la renombro como noteActive
    const { body, date, title, onInputChange, formState } = useForm(noteActive); // con esto manejas el formulario de la nota y traes aquello que te haga falta

    // para colocar la fecha, usas un useMemo porque la fecha como tal no cambia, pero el formulario si lo puede hacer y necesitas memo(rizar) la fecha 😂🤘🏽
    const dateString = useMemo( () => {
        const newDate = new Date( date );

        return newDate.toUTCString(); // para traer la fecha al formato utc
    }, [ date ]);

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    
    }, [formState]);
    
    const onSaveNote = () => { // 
        dispatch( startSaveNote() ); // como tienes que hacer una grabación en el Firebase, todo aquello que haga una petición http, es a través de un thunks porque es async
    }

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
                <Typography fontSize={20} fontWeight={'light'}>{ dateString }</Typography>
            </Grid>
            <Grid item>
                <Button 
                    onClick={ onSaveNote }
                    sx={{color: 'primary.dark', padding: 2}}>
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
                    name="title"
                    value={ title }
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What's happened today?"
                    sx={{border: 'nones', mb: 1}}
                    name="body"
                    value={ body }
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGallery/>

        </Grid>
    )
}
