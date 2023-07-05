import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DC, Hero, Marvel, Search } from '../pages';



export const HeroesRoutes = () => {

    // Tarea: crear dos rutas nuevas, search y hero en este archivo (conseguida)
    return (
        <>
            <Navbar/>

            <div className=''>
                <Routes>
                    <Route path='marvel' element={<Marvel/>}/>
                    <Route path='dc' element={<DC/>}/>

                    <Route path='search' element={<Search/>}/>
                    <Route path='hero/:id' element={<Hero/>}/>

                    <Route path='/*' element={<Navigate to='/marvel'/>}/>
                </Routes> 
            </div>
        </>
    )
}
