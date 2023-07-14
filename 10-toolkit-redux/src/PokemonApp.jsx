import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getPokemons());
    }, [])

    return (
        <>
            <h1>PokeApp</h1>
            <hr />
            <span>Loading: { !true ? 'True' : 'False' }</span>
            <ul>
                {/* {pokemonApi.map()} */}
                <li>Hola</li>
                <li>Cómo</li>
                <li>Estás</li>
            </ul>
        </>
    )
}
