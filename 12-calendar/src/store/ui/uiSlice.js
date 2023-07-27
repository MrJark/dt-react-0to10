import { createSlice } from '@reduxjs/toolkit';



export const uiSlice = createSlice({
   name: 'ui',
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