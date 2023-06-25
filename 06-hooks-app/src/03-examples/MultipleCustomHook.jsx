import { useFetch } from '../hooks/useFetch';


export const MultipleCustomHook = () => {

    const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character')

    console.log({ data, isLoading, hasError });
    return (
        <>
            <h1>Rinck and Morty Characters</h1>
        </>

    )
}
