const express = require('express')



// se trae otra vez express y se le da el valo a la res de espress.response para que aparezca los autocompletados
const createUser = (req, res = express.response ) => {

    // console.log('se requiere el /');
    res.json({
        ok: true,
        msg: 'login',
    })
};

const loginUser =  (req, res) => {
    // console.log('se requiere el /');
    res.json({
        ok: true,
        msg: 'proof',
    })
};

const revalidateToken = (req, res) => {
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