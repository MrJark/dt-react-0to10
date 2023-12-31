// hook para tener centralizado todos los movimientos/ eventos que se hagan en el calendario

import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar";



export const useCalendarStore = () => {
    // Tarea: proveer los eventos del calendario desde este hook ❌ No he sabido como hacerlo
    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    };

    const startSavingEvent = async( calendarEvent ) => {

        if( calendarEvent._id ) {
            // siginifa que estoy actualizando porque el _id existe pero estás tacando la nota
            dispatch( onUpdateEvent( calendarEvent ) ); 
            // dispatch( onUpdateEvent( {...calendarEvent} ) ); // esta es la forma más restrictiva porque con el spread te aseguras de mandar un nuevo objeto con todo igual
        } else {
            // estás creando la nota porque no existe el _id
            dispatch( onAddNewEvent( { ...calendarEvent, _id: new Date().getTime() } ) ) // ( cuando no hay backend) hay que mandarle un id pero como es nuevo, necesitas alho y para eso le mandas el spread y el id como si fuera la date ( mientras no haya backend)
        }
    }

    const startDeletingEvent = () => {
        // aquí se llama al backend para 
        dispatch( onDeleteEvent( ) );
    }

    return {
        //* Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, // sto es para saber si tenemos una  nota activa o no para mandarlo al btn del delete y que solo aparezca de forma condicional. si el activeEvent es null da false pero si no es null, da true

        //* Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
