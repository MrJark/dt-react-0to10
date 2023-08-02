
import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';




export const FabAddNew = () => {


    const { openDateModal } = useUiStore(); // traes del ui la función que abre el modal
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => { // al hacer click se tiene que borrar el modal y aparecer uno limpio par que nop haya una nota activa
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2), // esto es coger la fecha ( actual) y sumarle dos horas
            user: {
                _id: '123',
                name: 'Chema'
            }
        });
        openDateModal();

    }


    return (
        <button
            className="btn btn-secondary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
        </button>
    );
};
