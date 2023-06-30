# Reducer

[Documentation](https://es.react.dev/reference/react/useReducer)

Un Reducer es una función ( const reducer = () => {} ) común que debe ser pura y debe retornar un nuevo estado. Normalmente recibe dos estados:

  1. Valor inicial
  2. Accióin a ejecutar

Las fucniones puras son aquellas que:

  1. No tienen efectos secundarios
  2. No realizan funciones async
  3. Siempre retornan estados nuevos
  4. No llaman al localStorage o al sessionStorage
  5. Solo pueden requerir una función que tenga un argumento

useReducer es una alternativa al useState
