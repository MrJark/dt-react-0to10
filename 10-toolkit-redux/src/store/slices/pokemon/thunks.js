// los thunks son acciones asincronas que disparan otras acciones
// voy a usar la api de pokeapi.co <https://pokeapi.co>

import { loadingPokemon, setPokemon } from "./pokemonSlice"


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( loadingPokemon() );
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = await res.json();
        console.log(data);
        
        dispatch( setPokemon({ pokemon: data.results, page: page + 1}) );
    }
}