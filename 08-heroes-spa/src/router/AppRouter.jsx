import { Routes, Route } from 'react-router-dom';

import { AboutPage, LoginPage } from '../auth'; 
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './';

// import { Marvel, DC } from '../heroes';


// he simplidficado todas las imports gracias a los barrels

export const AppRouter = () => {


    return (
        <>
            <Routes>

                {/* <Route path='about' element={<AboutPage/>}/> */}{/* por ahroa esta ruta no es util */}
                <Route path='login' element={<LoginPage/>}/>

                {/* Puedo eliminar estas rutas de aquí porque ya las tengo en el HeroesRoutes además, tiene más sentido que estén en el route de los heroes pero tienes que crear la ruta que te lleve al HeroesRoutes*/}

                <Route path='/*' element= {
                  <PrivateRouter>

                    <HeroesRoutes/>

                  </PrivateRouter>
                }
                
                />
                {/* <Route path='/*' element={<HeroesRoutes/>}/> */}
                {/* <Route path='marvel' element={<Marvel/>}/>
                <Route path='dc' element={<DC/>}/> */}

                {/* <Route path='/*' element={<Navigate to='/marvel'/>}/> */}
            </Routes>
        </>
    )
}
