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

    const eventId = req.params.id; // para obtener el id del propio evento
    const uid = req.uid; // para extraer el uid del usuario. Solo puede haber un uid por user pero pueden haber muchos eventId
    console.log(`Id del evento ${eventId}`);
    console.log(`Id del user ${uid}`);

    try {

        const event = await Event.findById( eventId ); // para encontrar el event
        console.log(event);

        if ( !event ) { // si el evento no existe
            return res.status(404).json({
                ok: false,
                msg: 'This event id dont exist',
            })
        }

        if ( event.user.toString() !== uid ) { // si el user no es el indicado para modificar el evento
            return res.status(401).json({
                ok: false,
                msg: 'Your id does not allow you to modify this event',
            })
        };

        const newUpdateEvent = {
            ...req.body,
            user: uid,
        };

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newUpdateEvent, {new: true} );

        res.json({
            ok: true,
            msg: 'All Rigth in updateEvent',
            eventId,
            event: updatedEvent,
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            ok: false,
            msg: 'All Wrog in updateEvent. Talk with Admin',
        });
    }

};
const deleteEvent = async ( req, res = response ) => {
    //* Tarea: hacer el deleteEvent ✅ solo era cambiar el findByIdAndUpdate por el findByIdAndDelete

    const eventId = req.params.id; 
    const uid = req.uid; 
    console.log(`Id del evento: ${eventId}`);
    console.log(`Id del user: ${uid}`);

    try {
        const event = await Event.findById( eventId );
        console.log(event);

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'This event id dont exist',
            })
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Your id does not allow you to modify this event',
            })
        };

        const newDeleteEvent = {
            ...req.body,
            user: uid,
        };

        const deletedEvent = await Event.findByIdAndDelete( eventId ); 


        res.json({
            ok: true,
            msg: 'All Rigth in deleteEvent',
            deletedEvent,
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