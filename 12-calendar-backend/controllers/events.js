/*
    *Tarea: hacer lo mismo que el auth pero para el events del calendario
        - Crear las rutas get, post, put y delete
        - Crear las funciones getEvents, createEvent, updateEvent, deleteEvent
        - Que se muestres en ellas los mensajes de opk: true cuando esté bien y el ok: false cuando no se de bien con sus respectivos msg
        ----
        Todo bien salvo el validar token que no lo he añadido, se me ha olvidado
*/ 

const { response } = require('express');
const Event = require('../models/Event')

const getEvents = async ( req, res = response ) => {

    const event = await Event.find().populate('user','name'); // esto es para extraer la info del evento y del user
    // el .find() te da todo el usuario
    // .populate() puedes especificar que es lo que quieres. En este caso quiero el user y de el solo voy a querer el name

    try {

        res.json({
            ok: true,
            msg: 'All Rigth in getEvents',
            event
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            ok: false,
            msg: 'All Wrog in getEvents',
        })
    }
};
const createEvent = async ( req, res = response ) => {

    const event = new Event( req.body );

    try {
        event.user = req.uid;

        const saveEvent = await event.save(); // para guardar el evento
        res.json({
            ok: true,
            msg: 'All Rigth in createEvent',
            event: saveEvent,
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            ok: false,
            msg: 'All Wrog in createEvent',
        })
    }

};
const updateEvent = async ( req, res = response ) => {

    try {

        res.json({
            ok: true,
            msg: 'All Rigth in updateEvent',
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            ok: false,
            msg: 'All Wrog in updateEvent',
        })
    }

};
const deleteEvent = async ( req, res = response ) => {

    try {

        res.json({
            ok: true,
            msg: 'All Rigth in deleteEvent',
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            ok: false,
            msg: 'All Wrog in deleteEvent',
        })
    }

};



module.exports = {
    getEvents, 
    createEvent,
    deleteEvent,
    updateEvent,
}