/*
    Rutas del Calendario:
    host + /api/evetnts
*/
const { Router } = require('express');
const router = Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');


// Obtener evento
router.get('/', getEvents)

// Crear evento
router.post('/', createEvent)

// Actualizar evento
router.put('/:id', updateEvent)

// Eliminar evento
router.delete('/:id', deleteEvent)

module.exports = router;