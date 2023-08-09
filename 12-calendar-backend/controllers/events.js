/*
    *Tarea: hacer lo mismo que el auth pero para el events del calendario
        - Crear las rutas get, post, put y delete
        - Crear las funciones getEvents, createEvent, updateEvent, deleteEvent
        - Que se muestres en ellas los mensajes de opk: true cuando esté bien y el ok: false cuando no se de bien con sus respectivos msg
*/ 

const { response } = require('express');

const getEvents = async ( req, res = response ) => {
    // {
    //     ok: true,
    //     msg:'getEvents'
    // }
    try {

        res.json({
            ok: true,
            msg: 'All Rigth in getEvents'
        });

    } catch (err) {
        console.log(err);

        res.json({
            ok: false,
            msg: 'All Wrog in getEvents'
        })
    }
};
const createEvent = async ( req, res = response ) => {

    try {

        res.json({
            ok: true,
            msg: 'All Rigth in createEvent'
        });

    } catch (err) {
        console.log(err);

        res.json({
            ok: false,
            msg: 'All Wrog in createEvent'
        })
    }

};
const updateEvent = async ( req, res = response ) => {

    try {

        res.json({
            ok: true,
            msg: 'All Rigth in updateEvent'
        });

    } catch (err) {
        console.log(err);

        res.json({
            ok: false,
            msg: 'All Wrog in updateEvent'
        })
    }

};
const deleteEvent = async ( req, res = response ) => {

    try {

        res.json({
            ok: true,
            msg: 'All Rigth in deleteEvent'
        });

    } catch (err) {
        console.log(err);

        res.json({
            ok: false,
            msg: 'All Wrog in deleteEvent'
        })
    }

};



module.exports = {
    getEvents, 
    createEvent,
    deleteEvent,
    updateEvent,
}