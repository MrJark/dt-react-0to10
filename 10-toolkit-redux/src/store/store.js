import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';


// para crear esto, estoy siguiendo las indicaciones de la siguiente pág -> <https://redux-toolkit.js.org/tutorials/quick-start>
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})