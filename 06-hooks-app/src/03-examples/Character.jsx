import { useCounter, useFetch } from '../hooks';



export const Character = () => {

    const { data } = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`)

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const randCharacter = randomNum(0, 19);

    const { results } = !!data && data;
    console.log(data);

    const { name, status, image, id } = !!results && results[randCharacter];
    console.log( name, status, image, id);
    
  return (
    <div>
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <img src={image} alt={name} />
    </div>
  )
}
