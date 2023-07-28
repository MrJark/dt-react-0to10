// hook para tener centralizado todos los movimientos/ eventos que se hagan en el calendario

import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store/calendar";



export const useCalendarStore = () => {
    // Tarea: proveer los eventos del calendario desde este hook ❌ No he sabido como hacerlo
    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    return {
        //* Properties
        events,
        activeEvent,

        //* Methods
        setActiveEvent,
    }
}
