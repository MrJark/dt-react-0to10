// import { Typography } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothigSelectedView } from '../views';


const drawerWidth = 240;

export const JournalPage = () => {



    return (
        <>
            <JournalLayout>

                {/* <Typography variant='h1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate quaerat ad rerum modi expedita vitae, similique quo nulla impedit.
                </Typography> */}
                {/* <NothigSelectedView/> */}
                <NoteView/>

            </JournalLayout>
        </>
    )
}
