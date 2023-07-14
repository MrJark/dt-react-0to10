import { createSlice } from '@reduxjs/toolkit';



export const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState: {
       page: 0,
       pokemon: [],
       isLoading: false,
    },
   reducers: {
       loadingPokemon: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemon:  ( state, action )  => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemon = action.payload.pokemon;
        },
    }
});

export const { loadingPokemon, setPokemon } = pokemonSlice.actions;