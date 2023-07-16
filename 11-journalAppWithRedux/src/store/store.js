import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';

// esta es la fuente única de la verdad. Como quieres que se vea la app

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
})