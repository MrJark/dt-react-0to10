// los thunks son acciones asincronas que disparan otras acciones
// voy a usar la api de pokeapi.co <https://pokeapi.co>

import { loadingPokemon, setPokemon } from "./pokemonSlice"


export const getPokemons = ( page = 0 ) => {
    return ( dispatch, getState ) => {
        dispatch( loadingPokemon() );

        
        // dispatch( setPokemon() );
    }
}