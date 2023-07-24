import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal';
import {startNewNote} from '../../../src/store/journal/thunks';

describe(' test in thunks in journal', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should create a new note', async() => {

        const uidTest = 'TEST-UID';

        getState.mockReturnValue( { auth: { uid: uidTest } } ); // es la creación del auth que está en el thunks con la función getState ( aquí solo estás intentando recrear esa función, no la estás trayendo de ahí que le estés haciendo el mock)

        await startNewNote()(dispatch, getState); // estos son los segundos argumentos (los que están en el return) que recibe el startNewNote
        // esta prueba da error porque a la hora del auth te pide autenticarte y aquí no lo estás haciendo por tanto, el test por 'culpa'de firebase te da error
        // he tenido que crear una nueva app para poder hacer el checking del usuario con la nueva nota pero queda borrar dicha nota de manera automática al igual que se ha creado
    
        espect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        
    });

});