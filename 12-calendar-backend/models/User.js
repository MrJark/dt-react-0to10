// const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


// creación de como será un usuario por dentro
const UserSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }

});


module.exports = model('User', UserSchema)