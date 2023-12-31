import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar/pages';





export const AppRouter = () => {

    const authStatus = ''
    return (
       <Routes>
            {
                (authStatus === 'not')
                    ? <Route path='/auth/*' element= { <LoginPage/> }/>
                    : <Route path='/*' element= { <CalendarPage/> }/>
            }
            
            <Route path='/*' element={ <Navigate to="/auth/login"/>}/>
       </Routes>
    )
}
