// const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


// creación de como será un usuario por dentro
const EventSchema = Schema({

    title: {
        type: String,
        require: true,
    },
    notes: {
        type: String,
        require: true,
    },
    start: {
        type: Date,
        require: true,
    },
    end: {
        type: Date,
        require: true
    },
    user: { // para hacer la referencia al user
        trype: Schema.Types.ObjectId,
        ref: 'User',
    },
});


module.exports = model('Event', EventSchema)