import { useCounter, useFetch } from '../hooks';
import { Character, Loading } from '../03-examples';




export const Layout = () => {

    
    // const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon')
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`)
    const { increment } = useCounter();
    

    return (
        <>
            <h1>Rinck and Morty Characters</h1>
            <hr />

            {
                (isLoading)
                    ? <Loading/>
                    : <Character/>
            }

            <button className='btn btn-primary mt-3'  onClick={ () => increment() }>
                Random Character
            </button>
            


        </>

    )
}
