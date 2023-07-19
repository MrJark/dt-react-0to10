
import { createSlice } from '@reduxjs/toolkit';



export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: true,
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
        addNewEmptyNote: ( state, action ) => {

        },

        setActiveNote: ( state, action) => {

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
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById

} = journalSlice.actions;