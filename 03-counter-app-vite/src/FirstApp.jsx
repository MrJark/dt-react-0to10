import { Fragment } from "react";
import './style.css';
import PropTypes from 'prop-types'; // tenemos que importarlas (yarn add prop-type o npm install prop-type) porque al ser VITE no vienen por defecto y esto servirá para hacer ciertos parámetros obligatorios como el title o subTitle

// const newMessage = 'Patatas con Jamón'; // no es buena práctica colocar const o funciones que no cambien dentro de la const que estás construyendo. Si no van a cambiar, se tienen que colocar fuera del scope de la función aunque no va a afectar a nada ya que se renderizaría cada vez que llamas a la función y sería espacio en memoria innecesario
// Se pueden enviar expresiones permitidas en JS como strings, números, arrays, boolean (aunque no se mostrarán en pantalla) pero no se pueden enviar objetos
// const newMessage = 123;
// const newMessage = true; // no se muestra en la consola
// const newMessage = [1,2,3,4,5,6,7,8,9]; // no se muestra en la consola
const newMessage = {
    message: 'Hola Mundo',
    name: 'Chema',
}; // solo se podría mandar un objeto si desestructuras sus keys y values ej: {newMessage.name}

// Tarea: crear una función saludando que se llame en el App (no conseguido. Hbai acreado un if con 'holaMundo' pero no había puesto el return )
const saludo = () => { // no pueden ser async porque se transforman en objetos
    return 'Hola Mundo';
    // if (true) {
    //     'Hola Mundo';
    // } else {
    //     'Nada'
    // }
    // return ;
};


const App = ( { title, subTitle, name } ) => { // puedes poner props o desestrusturarlo y solo poner lo que queires de ese prop

    // if (!title) { // este tipo de mensajes no se deben poner aquí
    //     throw new Error('Title is not exist');
    // }
    return (
        // Si quieres tener más de un elemento en el return, necesitas un padre ya que solo puede haber un elemento, aunque dentro de este elemento, puedan haber miles por tanto, el nodo padre es el div, el general y los demás son los que te hacen falta. Pero este div o padre, puede romper todos los elementos que tengo
        // La solución para tener más de un elemento en la raíz del function component, es la importación de Fragment desde React
        // <div class="flex">
        //     <h1>Chema</h1>
        //     <p>Hola</p>
        // </div>
        // ------
        // <Fragment>
        //     <h1>Chema</h1>
        //     <p>Hola</p>
        // </Fragment>
        // ------
        // Otro método para no tener que poder tener más de un elemenrto y evitar la import del Fragment, es colocar simplemente ' <> ' al inicio y al final ' </> 'y es sinónimo del Fragmento
        <>
            <h1>Chema</h1>
            <p>Soy un P</p>
            <h2> { 1+1 } </h2> {/* forma de añadir código JS al cuerpo, entre ' { } ' */}
            <h3>{newMessage.name}</h3>
            <h4>{JSON.stringify(newMessage)}</h4> {/* La manera que poduedes renderizar un objeto aunque se verá en formato JSON */}
            <h4>{saludo()}</h4>
            <h1>{title}</h1>
            <h1>{subTitle}</h1>
            <h2>{name}</h2>
        </>
    )
};


// Las props siempre se deben colocar al final
// lamadas a las propsTypes que lo que hace es ayudar a otros a saber como funciona el componente o por lo menos las properties
App.propTypes = {
    title: PropTypes.string.isRequired, // pones que es lo que queres tener, el título en este caso, pones la import del PropTipe y le mandas que queires que sea, en este caso quiero un string y si quieres que sea obligatorio, le pones el isRequired
    subTitle: PropTypes.string,
}
// otra manera de definir los default components.
// Dato: los defaultProps se renderizan ANTES que los propTypes
// Dato: tb puedes crear nuevos valores que no existen y tu mismo añadirlos. Ej: name
App.defaultProps = {
    name: 'Chema Ferrandez',
    subTitle: 'No hay subtitulo', // me daría un warning en la consola si mandando un string cuando en las porp le estaba diciendo que sea un number!!
    title: 'No hay título',
}


export default App