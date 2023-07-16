import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './api';


// para crear esto, estoy siguiendo las indicaciones de la siguiente pág -> <https://redux-toolkit.js.org/tutorials/quick-start>
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware ), // un midelware es una función que se ejecuta antes que otra ( ojo: no importar el getDefaultMiddleware porque está obsoleto )
})