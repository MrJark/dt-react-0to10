// const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


// creación de como será un usuario por dentro
const EventSchema = Schema({

    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true
    },
    user: { // para hacer la referencia al user
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

EventSchema.method('toJSON', function() { // esto es solo para cambiar el _id por id
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Event', EventSchema)