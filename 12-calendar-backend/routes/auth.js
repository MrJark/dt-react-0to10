//* otra forma sería: ( pèro no se porqué no ha ido)
// const express = require('express');
// const router = express.Router;

/*
    Rutas de Usuarios / Auth:
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { createUser, revalidateToken, loginUser } = require('../controllers/auth')


router.get('/', loginUser);
router.post('/new', createUser );
router.post('/', revalidateToken);


module.exports = router;