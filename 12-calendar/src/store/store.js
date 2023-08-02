import  { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui';
import { calendarSlice } from './calendar';



export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ // para evitar errores en la consola de la Date
        serializableCheck: false,
    })
})