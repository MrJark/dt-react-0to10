import { createSlice } from '@reduxjs/toolkit';



export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null,
       // forma en la cual se va a estructurar una nota
    //    active: {
    //     id: '',
    //     title: '',
    //     body: '',
    //     date: '',
    //     imageURLs: [],
    //    }
    },
   reducers: { // lo que se coloca en el reducer debe ser trabajo síncrono
        savingNewNote: ( state ) => {
            // Tarea: el estado de isSaving debe cambiar y desabilitar el boton de newNote mientras está esta acción ✅ ( pero no se como quitarle el disbled cuando ya se ha saving. Lo que se me ocurre es que a través de la Date().setTime() se le sume cierto tiempo y hasta que no pase no se habilite. Ya sé que estbaa haciendo mal. Dependiendo de donde coloque el dispatch en el JournalPage se dispará antes o después, debo colocarlo justo despues de la creacion de la newNote y antes del newDoc)
            state.isSaving = true;


        },

        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload ); // para añadir una nueva nota (vacia)
            state.isSaving = false;
        },

        setActiveNote: ( state, action) => {
            state.active = action.payload; // con esto le dices que el payload es la propia nota que quieres que aparezca en pantalla
            // Tarea: mostrar las notas en el Redux cuando se le hace click en ella ❌ he añadido el evento para escuchar el id, se que tengo que hacerlo con eso pero no se como colocarlo en esta parte
            state.messageSaved = '';
        },

        setNotes: ( state, action) => {
            // Tarea: llamar al setNotes con las tareas que ya tengo y aparezcan en el chat de Redux ❌ no he sabido que colocar en este sección con el state y el action
            state.notes = action.payload // si que era esto, lo que no tenia bien era la llamada en el thunks
        },

        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },

        updatedNote: ( state, action) => {
            state.isSaving = false;
            // Tarea: conseguir actializar a tiempo real en el sideBar cuando pulso el btn save al cambiar el title o el body ❌ no he sabido que tenia que poner dentro del map para recorrer el arreglo
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ) {
                    return action.payload;
                }  // aquí se supone que el payload es un note actualizado
                return note;
            } );
            state.messageSaved = `Updated`; // podrías querer disparar el código del sweetalert aquí pero recuerda, los reducces no pueden tener otras dependencias y tienen que ser lo mas simples posibles

        },

        setPhotosToActiveNotes: (state, action ) => {
            state.active.imageURL = [ ...state.active.imageURL, ...action.payload ]; // el spread en el primer casp es para mantener las photos anteriores y el spread del payload es para añadir la nueva
            state.isSaving = false;
        },

        clearNotesLogout: ( state ) => { // para eliminar el contenido de las notas cuando se logout y cmo es síncrona, no hace peticiones, simplemente es borrar, se puede hacer en el slice y no en el thunk
            state.isSaving = false;
            state.messageSaved = '',
            state.notes = [];
            state.active = null;
            // es decir, vuelve al estado inicial, sin nada
        },

        deleteNoteById: ( state, action) => {
            state.active = null; // bien
            // state.active = action.payload; // no
            state.notes = state.notes.filter( note => note.id !== action.payload ); // gracias a redux-toolkit cono solo esta linea es sificiente
            //si no trabajas con toolkit, tendrías que hacer lo siguiente:
            // return {
            //     ...state,
            //     active: null,
            //     notes: state.notes.filter( note => note.id !== action.payload ),
            // }
        },

    },
});

// Action creators are generated for each case reducer function
export const { 

    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNotes,
    setSaving,
    updatedNote,

} = journalSlice.actions;