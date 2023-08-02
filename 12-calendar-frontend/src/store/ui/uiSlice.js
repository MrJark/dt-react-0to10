import { createSlice } from '@reduxjs/toolkit';



export const uiSlice = createSlice({
   name: 'ui', // este nombre es el que se le da para cuando hagas el useSelector para el store y cogerlo 
   initialState: {
       isDateModalOpen: false
    },
   reducers: {
       onOpneDateModal: ( state ) => {
        // código dentro del toolkit 👇🏼
        state.isDateModalOpen = true;
        // código si trabajas fuera del toolkit👇🏼
        // return {
        //     ...state,
        //     isDateModalOpen: true
        // }

       },
       onCloseDateModal: ( state ) => {
        state.isDateModalOpen = false;
       },
    }
});

// Action creators are generated for each case reducer function
export const { onOpneDateModal, onCloseDateModal } = uiSlice.actions;