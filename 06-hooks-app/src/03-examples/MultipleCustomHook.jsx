import { useFetch } from '../hooks/useFetch';


export const MultipleCustomHook = () => {

    // const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon')
    const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character')

    // if( isLoading ){
    //     return(
    //         <h1>Cargando...</h1>
    //     )
    // }

    // console.log({ data, isLoading, hasError });
    const { results } = !!data && data;
    console.log(data);
    // console.log(results[0].name); // habilitando este comentario y recargando el navegador me da error debido al undefined

    return (
        <>
            <h1>Rinck and Morty Characters</h1>
            <hr />

            { // usa las validaciones ternarias solo y tan solo si son pocas líneas de código
                (isLoading) 
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1"></p>
                            <footer className="blockquote-footer"></footer>
                        </blockquote>

                    )
            }

        </>

    )
}
