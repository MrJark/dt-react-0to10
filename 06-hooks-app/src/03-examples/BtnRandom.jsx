
import { useCounter, useFetch } from '../hooks';


export const BtnRandom = () => {

    // const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`)
    const { increment } = useCounter();

  return (
    <div>
        <button className='btn btn-primary mt-3' onClick={ () => increment() }>
            Random Character
        </button>
    </div>
  );
};
