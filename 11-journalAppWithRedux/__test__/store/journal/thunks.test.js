import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal';
import {startNewNote} from '../../../src/store/journal/thunks';
import { FirebaseDB } from '../../../src/firabase/config';

describe(' test in thunks in journal', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should create a new note', async() => {

        const uidTest = 'TEST-UID';
        getState.mockReturnValue( { auth: { uid: uidTest } } ); // es la creación del auth que está en el thunks con la función getState ( aquí solo estás intentando recrear esa función, no la estás trayendo de ahí que le estés haciendo el mock)

        await startNewNote()(dispatch, getState); // estos son los segundos argumentos (los que están en el return) que recibe el startNewNote
        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
            body: '',
            title: '',
            date: expect.any( Number ),
            id: expect.any( String )
        }) );
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            body: '',
            title: '',
            date: expect.any( Number ),
            id: expect.any( String )
        }) );
        // este test me estaba dando error porque el payload al inicio me daba undefined y se debía a que tenia el newNote en el thunk fuera del export const  por tanto, siempre iba a dar error, no había nada que renderizar y por tanto, no había ningún title ni datos

        // Boorar datos de firebase para no sobrecargar con las pruebas 
        // 1º debes apuntar a la collecion que estás creando con la ruta -> ${uid}/journal/notes que es el newDoc
        const collectionRef = collection( FirebaseDB, `${uidTest}/journal/notes`); // referencia
        const docs = await getDocs( collectionRef ); // para tener cada una de las entradas

        const deletePromises = [] ; // creas el arreglo donde van a estar todas las promesas a borrar
        docs.forEach( doc => deletePromises.push( deleteDoc )); // le envias por cada doc, el deleteDoc importado de Firebase para que elimine

        await Promise.all( deletePromises ); // llamas a la función
    });
});