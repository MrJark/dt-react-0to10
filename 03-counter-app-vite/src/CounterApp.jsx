// Tarea: Counter App <https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757>
// Conseguida!!

import { Fragment } from "react";
import './style.css';
import PropTypes from 'prop-types';


const CounterApp = ( { value } ) => {

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value * 3 } </h2>

        </>
    )
};

CounterApp.propTypes = {
    value:  PropTypes.number.isRequired,
};

export default CounterApp