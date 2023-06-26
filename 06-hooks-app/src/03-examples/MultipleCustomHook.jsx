import { useCounter, useFetch } from '../hooks';
import { BtnRandom, Character, Loading } from './index';




export const MultipleCustomHook = () => {

    const { isLoading } = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`);
    const { increment } = useCounter();
    /**
     * 

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon')
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`)

    // if( isLoading ){
    //     return(
    //         <h1>Cargando...</h1>
    //     )
    // }

    // console.log({ data, isLoading, hasError });

    // Como se que en la pag 1 hay 20 characters, hago un número aleatorio entre el 0 y el 19
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const randCharacter = randomNum(0, 19);

    const { results } = !!data && data;
    console.log(data);
    const { name, status, image, id } = !!results && results[randCharacter]; // hago esto así porque sino me da error al desestructurar algo de undefined al igual que en la data
    console.log( name, status, image, id);
    // console.log(results[0].name); // habilitando este comentario y recargando el navegador me da error debido al undefined
     * 
     */



    return (
        <>
            <h1>Rinck and Morty Characters</h1>
            <hr />

            {
                (isLoading)
                    ? <Loading/>
                    : <Character/>
            }
            
            {/* <BtnRandom/> */} 

            {/* { // usa las validaciones ternarias solo y tan solo si son pocas líneas de código
                (isLoading) 
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                    : (
                        <div>
                            <h2>{name}</h2>
                            <p>Status: {status}</p>
                            <img src={image} alt={name} />
                        </div>
                    )
            } */}

            <button className='btn btn-primary mt-3'  onClick={ () => increment() }>
                Random Character
            </button>
            


        </>

    )
}
