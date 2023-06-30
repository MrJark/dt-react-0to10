import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, LogingPage } from './index'

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <hr />
        
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='login' element = {<LogingPage/>} />
          <Route path='about' element = {<AboutPage/>} />

          <Route path='/*' element = {<Navigate to='/'/>} />
        </Routes>
    </>
    // los path son la manera en la que puedes acceder al componente, en este caso, a las páginas, a través del url.
    // El / solo es el home pero el /login te lleva a la página del login y así sucesivamente
    /* --- */
    // El element Navegate permite a la rota que no haga match, /*, llevarla hacia donde tu queiras, normalmente es la 404, 
  )
}
