// Tarea: Counter App <https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757>
// Conseguida!!

import { useState } from "react"; // los Hooks en React empiezan con la palabra ' use '
// import './style.css'; // para hacer las pruebas ha de ser desactivado
import PropTypes from 'prop-types';


// const handleApp = () => { // si no interfiere el value del function component en la function, se coloca fuera para evitar espacio innecesario
//     // console.log(event);

// }; 

const CounterApp = ( { value } ) => {
    // const handleApp = (event) => { // si no tiene ninguna interacción con el value o dependencia con la functionComponent, es mejor tenerlo fuera para que no se renderice todas las veces que la mandes a llamar y no ocupe espacio en memoria
    //     console.log(event);
    // } 
    // const [ counter, setCounter ] = useState(0); // useState en este caso manda el valor inicial a la constante, en este caso counter y el segundo argumento que se le manda es para poder modificar el primer elemento, counter, y se sule empezar por la palabra ' set ' y aquí lo vaoms a usar para modificar el counter ya que el cauter en si no se puede modificar por ser una const
    const [ counter, setCounter ] = useState(value); // si aquí pongo el value, recibe el valor que le has asignado al padre que tenfa por defecto, en este caso el del main.jsx que es 1 
    const sumApp = () => {
        // console.log(event);
        // setCounter( counter + 1); // modificación permitida del counter
        setCounter( (t) => t +1 ); // otra manera de hacer la suma donde no hace falta saber el nombre de counter, simplemente puedes poner el nombre de lo que quieras en la función
    };
    // Mi Forma de realizar la tarea ( la mas larga pero se puede sinplificar quitando los {})
    const substractApp = () => {
        setCounter( (t) => t - 1);
    };
    // const substractApp = () => setCounter( (t) => t - 1);
    const resetApp = () => {
        setCounter( value );
    };
    // const resetApp = () => setCounter( value );
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2> {} 
            <button onClick={ sumApp /* se podría poner tb s(event) => handleApp(event) */ /*function(event) {console.log();*/ }> {/* creación de un boton con atributos donde pueden ser funciones. Aunque las buenas prácticas dicen que los elementos .js no deben estar dentro del html*/}
                +1
            </button>
            {/* Tarea: dar funcionalidad a los botones -1 y Reset. Conseguida!🎉 */}
            <button onClick={ substractApp }> -1 </button>
            <button aria-label="btn-reset" onClick={resetApp}> Reset </button>
        </>
    )
};

CounterApp.propTypes = { // la ' p ' minúscula !OJO¡
    value:  PropTypes.number.isRequired,
};

export default CounterApp