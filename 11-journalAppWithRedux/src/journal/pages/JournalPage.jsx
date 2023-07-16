// import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothigSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';


const drawerWidth = 240;

export const JournalPage = () => {



    return (
        <>
            <JournalLayout>

                {/* <Typography variant='h1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate quaerat ad rerum modi expedita vitae, similique quo nulla impedit.
                </Typography> */}
                <NothigSelectedView/>
                {/* <NoteView/> */}

                <IconButton
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
