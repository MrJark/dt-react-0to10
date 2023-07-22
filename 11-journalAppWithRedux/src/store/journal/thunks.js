// A TENER EN CUENTA para hacer dispatch de funciones asíncronas, echas mano de los thunks, sino usas los reducers
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firabase/config';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNotes, setSaving, updatedNote } from './';
import { fileUpload, loadNotes } from '../../helpers';


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
    };
};

export const startSaveNote = () => {
    return async( dispatch, getState ) => {
        dispatch( setSaving() );

        // para guardar las las config de las notas necesitas necesitas saber quien es el user (traer el uid) y cual es el id de la nota mas la ruta hacia donde apunta
        const { uid } = getState().auth; // traes el uid
        const { active: activeNote } = getState().journal; // traes la nota activa del journal pero el activo, para no confundir, la renombras

        const noteToFirestore = {...activeNote};
        delete noteToFirestore.id; // esto elimina el id del activeNote y antes tengo que hacer el spread para poder hacerlo

        const docReference = doc( FirebaseDB, `${uid}/journal/notes/${activeNote.id}`); // creando la ruta para las modificaciones de la nota
        await setDoc( docReference, noteToFirestore, {merge: true});

        dispatch( updatedNote( activeNote ) );
    };
};

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => { // getState aquí no se utiliza ya que no requieres ningún método de identificación
        dispatch( setSaving() );

        // await fileUpload( files[0] ); // el problema de esra línea es que solo es válida para el primer elemento 
        // files.forEach( async(file) => { // el problema del ciclo for es que va de uno en uno
        //     await filesUpload(file);
        // }); 
        const fileUploadPromises = []; // prar disparar varias promesas a la vez
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file)) // creación del arreglo de promesas con todas ellas
        };

        const photosUrls = await Promise.all(fileUploadPromises); // esto es lo que te crea la resolución de todas las promesas ( Promise.all() ) n el mismo orden que se mandaron
        
        dispatch( setPhotosToActiveNotes(photosUrls) );
    };
};

export const startDeletingNote = () => {
    return async( dispatch, getState ) => { // asquí si hace falta el getState porque se necesita el uid del user y el id del note

        const { uid } = getState().auth; // consigues el uid del user
        const { active:activeNote } = getState().journal; // consigues la nota activa que dentro de esta está el id de la misma

        // console.log({uid, activeNote});

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${activeNote.id}`); // ruta hacia la nota concreta
        await deleteDoc(docRef); // eliminación de la ruta y por tanto de la nota a través de deleteDoc que es específico de Firebase

        dispatch( deleteNoteById( activeNote.id )); // para eliminar la nota por completo
        // Tarea: creart la funcionalidad en journalSlice para eliminar la nota ( deleteNoteById )❌ lka he eliminado solo de firebase pero lo demás o he sabido hacerlo ( al hacer el reload del browser si sale pero debería hacerse por completo)

        
    };
};