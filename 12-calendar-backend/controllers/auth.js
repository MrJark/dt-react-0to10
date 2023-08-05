const express = require('express')
const { validationResult } = require('express-validator');
const User = require('../models/User');

// se trae otra vez express y se le da el valo a la res de espress.response para que aparezca los autocompletados
const createUser = async(req, res = express.response ) => {
    // console.log('se requiere el /');

    // const { name, email, psassword } = req.body;

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

    // cuando se trabaja en bd, es bueno usar los trycatch por so surgen errores que no se quede pillado
    try {
        const user = new User( req.body );
        await user.save();// esto es para grabarlo en la db
    
        res.status(201).json({
            ok: true,
            msg: 'login',
            // name, // esto ya no es necesario porque se lo has especificado en el User
            // email,
            // psassword,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please, talk with Admin',
        })
    }
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