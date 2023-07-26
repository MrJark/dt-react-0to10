import { addHours } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import { useState } from 'react';
import Modal from 'react-modal';



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

    const [isOpenModal, setIsOpenModal] = useState(true);

    const [fromValue, setFromValue] = useState({
        title: 'Chema',
        notes: 'Too many',
        start: new Date(),
        end: addHours( new Date(), 2),
    });

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
        setIsOpenModal( false );
    }

    return (
        <Modal
            isOpen= {isOpenModal}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker 
                        selected={fromValue.start}
                        className="form-control mb-2"
                        onChange={ (event) =>  onDateChange( event, 'start')}
                        dateFormat="Pp"
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
                    />
                </div>
                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
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
                        className="form-control"
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