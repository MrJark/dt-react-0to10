const { response } = require('express');
const jwt = require('jsonwebtoken');


const jwtValidator = (req, res = response, next) => {
    // para enviar el token tienes que tenerlo de cierta manera y los estándares dicen que tiene que ser de la siguiente manera ' x- ' y añades lo que quieres y donde quieras, headers, params.,etc
    // en este caso, el token será: x-token y lo enviaré en los headers
    const token = req.header('x-token');
    
    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'An expected token',
        });
    };

    try {
        
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        
        req.uid = payload.uid
        req.name = payload.name

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'No valid token',
        })
    }

    next();
}


module.exports = {
    jwtValidator,
}