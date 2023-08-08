//* otra forma sería: ( pèro no se porqué no ha ido)
// const express = require('express');
// const router = express.Router;

/*
    Rutas de Usuarios / Auth:
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator'); // el check es el encargado de validar un campo en concreto
const { fieldValidator } = require('../middlewares/fieldValidator');
const { createUser, loginUser, revalidateToken } = require ('../controllers/auth');
const { jwtValidator } = require('../middlewares/jwtValidator')


// router.post(
//     '/', 
//     [
//         check('email',' The email is required').isEmail(), 
//         check('password',' The password must be 8 characters').isLength({ min: 8}), 
//         fieldValidator,
//     ],
//     loginUser);

// router.get('/renew', revalidateToken);


router.post(
    '/new', 
    [ // middlewares
        check('name',' The name is required').not().isEmpty(), // este middleware dice que tiene que existir y que no debe estar vacio
        check('email',' The email is required').isEmail(), 
        check('password',' The password must be 8 characters').isLength({ min: 8}), 
        fieldValidator, // para implementar el custom middleware de validar campos. Se implementa al final
    ],
    createUser
);

router.post(
    '/',
    [
        check('email',' The email is required').isEmail(), 
        check('password',' The password must be 8 characters').isLength({ min: 8}), 
        fieldValidator,
    ],
    loginUser
);

router.get('/renew', jwtValidator, revalidateToken);


module.exports = router;