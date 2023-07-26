import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { addHours } from 'date-fns';
import { CalendarBoxEvent, CalendarModal, Navbar } from '../components';

import { getChangeIcons, localizer } from '../../helpers';
import { useState } from 'react';


const events = [{
    title: 'Cris Birthday',
    notes: 'Congratulate',
    start: new Date(),
    end: addHours( new Date(), 2), // esto es coger la fecha ( actual) y sumarle dos horas
    user: {
        _id: '123',
        name: 'Chema'
    }
}]

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log({event, start, end, isSelected});

        // estilos para las notas en el calendario
        const style = {
            backgroundColor: '#96DEDF',
            color: '#020D0D',
            boderRadius: 'none',   
        }
        return {
            style
        }
    };

    const onDobleClick = ( event ) => {
        
    }
    const onOneClick = ( event ) => {
        
    }
    const onViewChange = ( event ) => {
        // para almacenar en el LocalStorage la última vista del usuario y necesitas el useState y el defaultView del Calendar
        localStorage.setItem('lastView', event );
        setLastView( event );
    }

    return (
       <>
        <Navbar/>

        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={ getChangeIcons() }
            eventPropGetter={ eventStyleGetter }
            components={{
                event: CalendarBoxEvent
            }}
            onDoubleClickEvent={ onDobleClick }
            onSelectEvent={ onOneClick }
            onView={ onViewChange }
            defaultView={ lastView }
            style={{ 
                height: 'calc(100vh - 80px)', 
                background: '#Fff' 
            }}
        />

        <CalendarModal/>

       </>
    )
}
