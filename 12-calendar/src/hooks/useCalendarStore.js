// hook para tener centralizado todos los movimientos/ eventos que se hagan en el calendario

import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar";



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

        } else {
            // estás creando la nota porque no existe el _id
            dispatch( onAddNewEvent( { ...calendarEvent, _id: new Date().getTime() } ) ) // ( cuando no hay backend) hay que mandarle un id pero como es nuevo, necesitas alho y para eso le mandas el spread y el id como si fuera la date ( mientras no haya backend)
        }
    }

    return {
        //* Properties
        events,
        activeEvent,

        //* Methods
        setActiveEvent,
        startSavingEvent,
    }
}
