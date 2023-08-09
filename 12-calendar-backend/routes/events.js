/*
    Rutas del Calendario:
    host + /api/events
*/
const { Router } = require('express');
const router = Router();
const { jwtValidator } = require('../middlewares/jwtValidator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

// Como todas las peticiones tienen que pasar por el validar token, para no repetirlo puedes escribir la siguiente linea
router.use( jwtValidator );
// con esta linea le dices que todas las routes que tenga debajo, van a pasar por el jwtValidator

// Obtener evento
router.get('/', getEvents)

// Crear evento
router.post('/', createEvent)

// Actualizar evento
router.put('/:id', updateEvent)

// Eliminar evento
router.delete('/:id', deleteEvent)

module.exports = router;