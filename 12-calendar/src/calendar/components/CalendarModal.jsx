import { useState, useMemo } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';
import DatePicker from 'react-datepicker';




import 'react-datepicker/dist/react-datepicker.css';
import { useUiStore } from '../../hooks';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const {isDateModalOpen, closeDateModal} = useUiStore();
    // const [isOpenModal, setIsOpenModal] = useState(true);// esto lo puedes eliminar porque el hook useUiStore hace dicha función
    
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [fromValue, setFromValue] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours( new Date(), 2),
    });
    
    const titleClass = useMemo(() => {

        if( !formSubmitted ) return '';

        return ( fromValue.title.length > 0 )
            ? 'is-valid'
            : 'is-invalid'

    }, [fromValue.title, formSubmitted] )

    const onInputChange = ( { target } ) => { // se hace para poder cambiar los valores del form
        setFromValue( {
            ...fromValue,
            [target.name]: target.value,
        })
    };

    const onDateChange = ( event, changing ) => {
        setFromValue({
            ...fromValue,
            [changing]: event,
        })
    }

    const onCloseModal = ( ) => {
        // console.log('close');
        // setIsOpenModal( false ); // no valen por el hook useUiStore
        // setFormSubmitted(true)
        closeDateModal();
    }

    const onSubmitBtn = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        
        // fecha final > fecha inicial
        const difference = differenceInSeconds( fromValue.end, fromValue.start);
        
        if( isNaN( difference ) || difference <= 0 ){
            Swal.fire('Ops! Something wrong', 'Please, review your dates', 'error')
            return;
        }
        if ( fromValue.title.length === 0 ) return;
    }

    return (
        <Modal
            isOpen= {isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container"
                onSubmit={onSubmitBtn}
            >

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker 
                        selected={fromValue.start}
                        className="form-control mb-2"
                        onChange={ (event) =>  onDateChange( event, 'start')}
                        dateFormat="Pp"
                        showTimeSelect
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                    minDate={fromValue.start}
                        selected={fromValue.end}
                        className="form-control mb-2"
                        onChange={ (event) =>  onDateChange( event, 'end')}
                        dateFormat="Pp"
                        showTimeSelect
                    />
                </div>
                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ fromValue.title}
                        onChange={onInputChange}
                        />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className={`form-control`}
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ fromValue.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-submit-color btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
/**
 * 
 * <DatePicker 
        selected={fromValue.start}
        className="form-control"
        onChange={ (event) =>  onDateChange( event, 'start')}
    />
 */