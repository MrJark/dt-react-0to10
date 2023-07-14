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

        },
    }
});

export const { loadingPokemon, setPokemon } = pokemonSlice.actions;