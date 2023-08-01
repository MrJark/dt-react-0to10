
import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cris Birthday',
    notes: 'Congratulate',
    start: new Date(),
    end: addHours( new Date(), 2), // esto es coger la fecha ( actual) y sumarle dos horas
    user: {
        _id: '123',
        name: 'Chema'
    }
}

export const calendarSlice = createSlice({
   name: 'calendar',
   initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null,
    },
   reducers: {
        onSetActiveEvent: ( state, {payload} ) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: ( state, { payload } ) => {
            state.events.push( payload ); // para añadir la nota
            state.activeEvent = null; // limpias el evento activo (lo cierra)
        },
        onUpdateEvent: ( state, { payload } ) => {
            // viene ta con un id proque es un update
            state.events = state.events.map(event => { // para sobreescribir el evento, ya que el map te crea una copia del objeto que le des con las cambios que le digas, con las modificaciones que hayas hecho

                if ( event._id === payload._id ){
                    return payload;
                }
                return event;
            });
        },
        onDeleteEvent: ( state ) => { // no hace un payload
            if (state.activeEvent) { // solo lo hará cuando exista una nota activa
                state.events = state.events.filter( event => event._id !== state.activeEvent._id ); // filtra todas las notas y trae aquellas que no sean iguales al id que no queires, por tanto, en se elimina del state
                state.activeEvent = null;
            }
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;