import { Fragment } from "react";
import PropTypes from 'prop-types'; 
// import './style.css'; // con esta línea me da error



const App = ( { title, subTitle, name } ) => { 

    return (

        <>
            <h1 data-testid = "test-title">{title}</h1>
            <h2>{subTitle}</h2>
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
    subTitle: 'Soy un subtitulo',
    title: 'No hay título', // si lo quito, tengo que tenerlo en el main como title
}


export default App