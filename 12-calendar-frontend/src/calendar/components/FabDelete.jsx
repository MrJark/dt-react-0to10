
import { useCalendarStore, useUiStore } from '../../hooks';




export const FabDelete = () => {


    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => { // al hacer click se tiene que borrar el modal y aparecer uno limpio par que nop haya una nota activa
        startDeletingEvent();

    }


    return (
        <button
            className="btn btn-secondary fab-danger"
            onClick={ handleDelete }
            style={{
                display: hasEventSelected ? '' : 'none' // para hacer el btn que dependa de si hay nota seleccionada o no
            }}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    );
};
