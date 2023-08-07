const {response} = require('express'); // para cargar el y tenerlo de forma que salga el autocompletado andemás tb tienes que ponerlo en la const en la parte del res com  express.response
const { validationResult } = require('express-validator')


const createUser = (req, res = response ) => {

    const { name, email, password } = req.body;

    // gracias al express-validator puedes quitar esta validación
    // if ( name.length < 3 ){
    //     return res.status(400).json( {
    //         ok: false,
    //         mgs: 'Your user name require at least 3 words'
    //     })
    // }

    // manejo de errores pero lo haces desde el middleware
    // const errors = validationResult( req );
    // if ( !errors.isEmpty() ) {
    //     return res.status(400).json({
    //         ok: false,
    //         errors: errors.mapped(),
    //     })
    // }

    res.json({
        ok:  true,
        msg: 'register',
        name,
        email,
        password
    })
};

const loginUser = (req, res = response ) => {

    const { email, password } = req.body;

    res.json({
        ok:  true,
        msg: 'login',
        email,
        password
    })
};

const revalidateToken =  (req, res = response ) => {
    res.json({
        ok:  true,
        msg: 'renew'
    })
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
}