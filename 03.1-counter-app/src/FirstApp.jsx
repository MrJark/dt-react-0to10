import { Fragment } from "react";
import PropTypes from 'prop-types'; 
// import './style.css'; // con esta línea me da error



// const newMessage = {
//     message: 'Hola Mundo',
//     name: 'Chema',
// }; 

// const saludo = () => { 
//     return 'Hola Mundo';
// };


const App = ( { title, subTitle, name } ) => { 

    return (

        <>
            {/* <h2>Chema</h2>
            <p>Soy un P</p>
            <h2> { 1+1 } </h2>
            <h3>{newMessage.name}</h3>
            <h4>{JSON.stringify(newMessage)}</h4> 
            <h4>{saludo()}</h4> */}
            <h1>{title}</h1>
            <h1>{subTitle}</h1>
            <h2>{name}</h2>
        </>
    )
};

App.propTypes = {
    title: PropTypes.string.isRequired, 
    subTitle: PropTypes.string,
}

App.defaultProps = {
    name: 'Chema Ferrandez',
    subTitle: 'No hay subtitulo',
    // title: 'No hay título', // si lo quito, tengo que tenerlo en el main como title
}


export default App