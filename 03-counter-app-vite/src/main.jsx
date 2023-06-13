import React from 'react'; // importación de React
import  ReactDOM  from 'react-dom/client'; // Herramienta para renderizar
import  App  from './FirstApp';
// import { App } from './HelloWordApp';

// estas dos imports son las que necesitas para hacer el render de la app

// Creación de la función más básica. Componente (normalmente y por buenas prácticas debe ir en otros archivos)
// function App() {
//     // el código siguiente es como si dijeras: document.createElement.....
//     return <h1>Hola Mundo</h1>;
// };

// Render de la app en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title='Hola, soy Goku!'/> {/* title y subTitle son las props que se pueden predeterminar aquí y se añaden así:  <App title="Hola, soy Goku" subTitle={123}/>*/}
    </React.StrictMode>
);