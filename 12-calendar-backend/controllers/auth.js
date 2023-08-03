const express = require('express')
const { validationResult } = require('express-validator');


// se trae otra vez express y se le da el valo a la res de espress.response para que aparezca los autocompletados
const createUser = (req, res = express.response ) => {
    // console.log('se requiere el /');

    const { name, email, psassword } = req.body;

    // gracias a express-validator puedo quitar esto
    // if ( name.length < 3 ) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'Your name need 3 letters'
    //     })
    // }

    // manejo de errore. Lo haces como un custom middleware
    // const errors = validationResult( req );
    // if ( !errors.isEmpty() ) {
    //     return res.status(400).json({
    //         ok: false,
    //         errors: errors.mapped(),
    //     })
    // }

    res.status(201).json({
        ok: true,
        msg: 'login',
        name,
        email,
        psassword,
    })
};

const loginUser =  (req,  res = express.response ) => {
    // console.log('se requiere el /');

    const { email, psassword } = req.body;

    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        })
    }

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        psassword,
    })
};

const revalidateToken = (req, res = express.response ) => {
    // console.log('se requiere el /');
    res.json({
        ok: true,
        msg: 'renew'
    })
};


// en node, no funciona el export const... sino 👇🏼
module.exports = {
    createUser,
    loginUser,
    revalidateToken,
}