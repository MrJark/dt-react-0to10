import { useFetch } from "../hooks";


export const Loading = () => {
    const {isLoading} = useFetch(`https://rickandmortyapi.com/api/character?page=${1}`)

  return (
    <div className="alert alert-info text-center" disabled={isLoading}>
        Loading...
    </div>
  );
};
