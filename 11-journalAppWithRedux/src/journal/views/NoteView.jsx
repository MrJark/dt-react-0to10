import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';




export const NoteView = () => {
    const dispatch = useDispatch();

    const { active: noteActive, messageSaved, isSaving } = useSelector(state => state.journal); // quieres obtener el active, quee es el note que has seleccionado pero para que sea más sencillo, la renombro como noteActive
    const { body, date, title, onInputChange, formState } = useForm(noteActive); // con esto manejas el formulario de la nota y traes aquello que te haga falta

    // para colocar la fecha, usas un useMemo porque la fecha como tal no cambia, pero el formulario si lo puede hacer y necesitas memo(rizar) la fecha 😂🤘🏽
    const dateString = useMemo( () => {
        const newDate = new Date( date );

        return newDate.toUTCString(); // para traer la fecha al formato utc
    }, [ date ]);

    const fileInputRef = useRef(); // permite hacer un intercambio de funcionalidad entre elementos. En este caso lo utilizas para dar la funcionalidad del input al btn del UploadOutlined ya que el input como tal no se puede estilizar y se ve feo

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    
    }, [formState]);
    
    useEffect(() => { // para el sweetalert cada vez que cambia el mensaje y la dependencia será el propio mensaje, si cambia, se dispara
      if (messageSaved.length > 0 ) {
        Swal.fire('Updated note', messageSaved, 'success')
      };
    }, [messageSaved]);
    

    const onSaveNote = () => { // 
        dispatch( startSaveNote() ); // como tienes que hacer una grabación en el Firebase, todo aquello que haga una petición http, es a través de un thunks porque es async
    };

    const onFileInputChange = ( {target} ) => {
        if( target.file === 0 ) return;

        // como la subida de archivos es async se neceesita tenerlo en los thunks
        dispatch( startUploadingFiles( target.files ) )
    };

    const onDelete = () => {
        dispatch( startDeletingNote() ); // esto tiene que ser async ( porque hace la petición para borrar ) por tanto, se crea en thunks
    };

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


                <input
                    type="file"
                    ref={ fileInputRef }
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none'}}
                />

                <IconButton
                    sx= {{color: 'primary.dark'}}
                    disabled= { isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>

                <Button 
                    disabled={isSaving}
                    onClick={ onSaveNote }
                    sx={{color: 'primary.dark', padding: 2}}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Save</Button>

                
            </Grid>
            <Grid item
                display='flex'
                alignItems='center'
            >
                <Typography fontSize={20} fontWeight={'light'}>{ dateString }</Typography>

                <Button
                    onClick={ onDelete }
                    sx={{ ml: 2, color: 'error.main'}}
                >
                    <DeleteOutline/>
                    Delete
                </Button>
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

            <ImageGallery
                images={ noteActive.imageURL }
            />

        </Grid>
    )
}
