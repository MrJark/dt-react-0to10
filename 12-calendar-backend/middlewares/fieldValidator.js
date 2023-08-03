const { response } = require('express');
const { validationResult } = require('express-validator');


// este middleware su función es frenar la lectura de los middlewares de los auth si hay un error y mostrarlo
const fieldValidation = ( req, res = response, next ) => {

    // manejo de errores
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        })
    }

    // si el código anterior no se ejecuta, sale el next y pasa al siguiente middleware
    next();
};

module.exports = {
    fieldValidation,
}