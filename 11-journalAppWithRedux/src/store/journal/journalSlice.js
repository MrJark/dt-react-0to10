import { createSlice } from '@reduxjs/toolkit';



export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false,
       massageSaved: '',
       notes: [],
       active: null,
       // forma en la cual se va a estructurar una nota
    //    active: {
    //     id: '',
    //     title: '',
    //     body: '',
    //     date: '',
    //     imageURL: [],
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
        },

        setNotes: ( state, action) => {
            
        },

        setSaving: ( state) => {
            
        },

        updateNote: ( state, action) => {
            
        },

        deleteNoteById: ( state, action) => {
            
        },

    },
});

// Action creators are generated for each case reducer function
export const { 

    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,

} = journalSlice.actions;