import { useFetch } from '../hooks/useFetch';


export const MultipleCustomHook = () => {

    const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character')

    // if( isLoading ){
    //     return(
    //         <h1>Cargando...</h1>
    //     )
    // }

    console.log({ data, isLoading, hasError });

    return (
        <>
            <h1>Rinck and Morty Characters</h1>
            <hr />

            { // usa las validaciones ternarias solo y tan solo si son pocas líneas de código
                (isLoading) 
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    ) : 
                    (
                        <blockquote className='blockquote text-end'>
                            <p></p>
                            <footer className='blockquote-footer'>Naval</footer>
                        </blockquote>

                    )
            }

        </>

    )
}
