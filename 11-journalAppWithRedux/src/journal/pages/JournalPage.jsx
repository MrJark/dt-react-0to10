// import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothigSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal';


const drawerWidth = 240;

export const JournalPage = () => {
    const dispatch = useDispatch();

    const onClickNewNote = () =>  {
        dispatch( startNewNote() ); // se puede mandar el id del user pero no hace falta aquí
    }

    return (
        <>
            <JournalLayout>

                {/* <Typography variant='h1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate quaerat ad rerum modi expedita vitae, similique quo nulla impedit.
                </Typography> */}
                <NothigSelectedView/>
                {/* <NoteView/> */}

                <IconButton
                    onClick={onClickNewNote}
                    size='large'
                    sx={{
                        color: 'background.light',
                        backgroundColor: 'secondary.main',
                        ':hover': { backgroundColor: 'secondary.400'},
                        position: 'fixed',
                        right: 60,
                        bottom: 60,
                    }}
                    
                >
                    <AddOutlined sx={{ fontSize: 30}}/>
                </IconButton>
            </JournalLayout>
        </>
    )
}
