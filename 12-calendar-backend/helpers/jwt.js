const jwt = require('jsonwebtoken');

// los parámetros que recibe serán los que quieres encriptar. El uid y el nombre en este caso
const generatorJWT = ( uid, name ) => {

    return new Promise( ( resolve, reject ) => {
        const payload = { uid, name };

        // firmas el token
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if( err ) {
                console.log(err)
                reject('Token failed to generate');
            }
            resolve( token );

        }) //son 4 los argumentops que recibe: el payload, la private key, el tiempo de expiración (opcional) y el callback
    })


}


module.exports = {
    generatorJWT,
}