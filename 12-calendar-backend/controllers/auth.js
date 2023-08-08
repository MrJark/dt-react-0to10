const {response} = require('express'); // para cargar el y tenerlo de forma que salga el autocompletado andemás tb tienes que ponerlo en la const en la parte del res com  express.response
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require ('../models/User');


// cuando se trabajes en basaes de datos, es bueno que lo hagas con trycatch ya que pueden surgir errores
const createUser = async (req, res = response ) => {

    const { email, password } = req.body;
    try {
        
        let user = await User.findOne( { email: email } ); // es una validación para saber si el email existe
        // console.log(user);
        if( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'This email already exist'
            })
        }

        user = new User( req.body );
        
        // Antes de guardar el user, necesitas encriptar la contraseña
        const salt = bcrypt.genSaltSync(); // a mas vueltas, más complicada es la encriptación y más segura pero requiere de mayor almacenamiento. Por default son 10
        user.password = bcrypt.hashSync(password, salt); // forma de encriptar la constraseña con bcrypt

        await user.save(); // para guardar el user en la bd

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


        res.status(201).json({
            ok:  true,
            uid: user.id,
            name: user.name
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            mag: 'Please, talk with admin'
        })
    }
};

const loginUser = async (req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne( { email: email } ); // es una validación para saber si el email existe
        // console.log(user);
        if( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'The user with this email do not exist'
            });
        };
        // confirmar los password
        const validPass = bcrypt.compareSync( password, user.password); // regresa un true si son iguales o false si no lo son
        if (!validPass ) {
            return res.status(400).json({
                ok: false,
                msg: 'The password is wrog!'
            });
        };
        // Generar el json web token
        res.json({
            ok:  true,
            uid: user.id,
            name: user.name,
        })


    } catch (error) {
        console.log(err);
        res.status(500).json({
            ok: false,
            mag: 'Please, talk with admin'
        })
    }
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