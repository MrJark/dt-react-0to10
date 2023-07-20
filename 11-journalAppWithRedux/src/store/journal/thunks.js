// A TENER EN CUENTA para hacer dispatch de funciones asíncronas, echas mano de los thunks, sino usas los reducers
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firabase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './';
import { loadNotes } from '../../helpers';


const newNote = {
    title: '',
    body: '',
    date: new Date().getTime(),
};

export const startNewNote = () => {
    return async( dispatch, getState ) => { // el return de los thunks tienen dos argumentos, el segundo es una funcion que devuelve el contenido del usuario
        
        const { uid } = getState().auth;// sacas el uid a través del getState ya que te hace falta para la authentication del usuario y recoger las notas qe tenga o en este caso, añadir nuevas
        
        
        // const newNote = {
        //     title: '',
        //     body: '',
        //     date: new Date().getTime(),
        // };
        
        dispatch( savingNewNote( newNote ) );
        
        const newDock = doc( collection( FirebaseDB, `${uid}/journal/notes` ) ); // la ruta es 'inventada' es decir, puedes poienr lo que quieres pero la más lógica es esta. Que a través de un uid tengas el journal y dentro de este, las notas
        const setDocRes = await setDoc( newDock, newNote ); // si falla da un error sino, no da nada ( en el log sale undefined )
        /* con esto solo, te dará error. Lo que debes hacer es lo siguiente:
        1. ir a Firebase
        2. entrar a través del menú a Firestore DB
        3. Ir a Rules
        4. Donde pone ' request.time < timestamp.date(2023, 8, 18); ' o ' false ', cambiarlo y colorcar lo siguiente: ' request.auth != null; ' Esto quiere decir que vas a dejar pasar las request aunqeu la persona no esté authenticated
        */
        
        newNote.id = newDock.id; // le creas la propiedad a la nota, una vez que la has cogido el id del doc
        
        // puedes hacer tantos dispatch como quieras
        dispatch( setActiveNote( newNote ) );
        dispatch( addNewEmptyNote( newNote ) );
    };
};

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error (`The UID: ${uid} don't exist`); // este error nunca debería salir ya que no se debe poder acceder sin tener un uid

        const notes = await loadNotes(uid);
        
        dispatch( setNotes( notes ));
    }
}