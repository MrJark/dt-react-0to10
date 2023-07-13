import { useDispatch, useSelector } from 'react-redux';


import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter);
  const dispatch = useDispatch();
  const numByIncrement = 2;
  
  return (
    // tarea: hacer el decrement function y el increment by 2 donde el 2 tiene que ser un argumento que se pueda modificar dependiendo del incremento. Que no sea estático
    // incremento ✅ y el incrementBy ❌ me salía el value como null y no sabía como cambiarlo
    // lo había hecho bien solo que al copiar del ejemplo, no había cambiado el value por el counter y claro, no existía
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>count is {counter}</h2>
      <div className="card">
        <button type='button' style={{ margin: 4}} onClick={() => {dispatch( increment() )}}>
          Increment
        </button>
        <button type='button' style={{ margin: 4}} onClick={() => {dispatch( decrement() )}}>
          Decrement
        </button>
        <button type='button' style={{ margin: 4}} onClick={() => {dispatch( incrementBy(numByIncrement) )}}>
          Increment by {numByIncrement}
        </button>
      </div>
    </>
  )
}

export default App
