// custom hook para el uso del store y con esto te evitas tener que estar siempre con el useSelector y useDispatch 
import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpneDateModal } from '../store/ui';


export const useUiStore = () => {
    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state => state.ui );

    const openDateModal = () => {
        dispatch( onOpneDateModal() ); // necesitas el dispatch para llegar a la acción open
    };

    /**
        Tarea: hacer el closeDateModal ✅ 
        Los pasos eran: 
            1º hacer esta función, 
            2º hacer el dispatch del onCloseDateModal 
            3º en el CalendarModal.jsx llamar la función closeDateModal en el onCloseModal porque aquí es donde está el onRequestClose que es la función que hace que el modal se cierre
     */
    const closeDateModal = () => {
        dispatch( onCloseDateModal() );
    };

    const toggleDateModal = () => { // implementación del toggle y dependiendo de su estado, cambia al otro
        (isDateModalOpen)
            ? dispatch( openDateModal() )
            : dispatch( closeDateModal() );
    };

    return {
        //* Properties
        isDateModalOpen,

        //* Methods 
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }
}  