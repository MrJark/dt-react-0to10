import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { HomePage, AboutPage, LogingPage, Navbar } from './index'

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
          <Navbar/>
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
    /* -- */
    // El element Navegate permite a la rota que no haga match, /*, llevarla hacia donde tu queiras, normalmente es la 404
    /* -- */
    // Los elementos 'a' se usan normalmente para links EXTERNOS al sitio ya que renderizan todo de cero, si lo haces para tu página, estarás renderizando todo de nuevo y no es eficiente. Para ello, react tiene un componente llamado 'link' el cual hace lo mismo que un anchor pero sin el refesh pero tienens que importarlo de react-rputer-dom
    // Estos elementos Link, react los traduce a html como elementos 'a' por tanto, a la hora de darle estilos, en el css, deberás poner 'a' haciendo referencia al anchor o con clases. El 'href' de los 'a' los sustituye react por 'to' y el path a donde quieres que te lleve
  )
}
