import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from "./store/slices/pokemon";



export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemon, page} = useSelector(state => state.pokemon)

    useEffect( () => {
        dispatch( getPokemons());
    }, [])

    return (
        <>
            <h1>PokeApp</h1>
            <hr />
            <span>Loading: { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemon.map( pokemon => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
            </ul>

            <button
                disabled = { isLoading }
                onClick={ () => dispatch( getPokemons(page))}
            >
                Next 
            </button>
        </>
    )
}
