# Theory

En esta sección se va a basar en explicar conceptos de JavaScript los cuales ya he tocado en el curso que hico de js-moderno que tengo en este GitHub
La teoría se basa en los ejercicios hechos en la carpeta src donde también hay explicaciones

## Objetos literales

Se inicializan con { } y funcionan con pares de valores. Una 'key' y un 'value'.
Dentro de estos objetos pueden existir otros objetos donde el objeto, el nombre del mismo, sería la key y el value, el objeto dentro del objeto principal

### Copias de objetos literales

La forma correcta es usando el operador **spread, ...**
Ej:
  const persona = 'Tony';
  const persona2 = {...persona};
  persona2 = 'Peter';
  log -> Perona = Tony y Persona2 = Peter

## Arreglos o Arrays

### Copias

Son colecciones de información que se encuentran dentro de una misma variable
Cunado quieras añadir información a un arreglo, **no debes usar el método .push()** porque este modifica el arreglo inicial. Se debe **hacer con el spread**
Ej:
  const arreglo = [1, 2, 3, 4];
  let arreglo2 = [...arreglo, 5]; -> de esta forma mantengo el original y expando el arreglo par que se vea "bien" en arreglo2 y le añado el 5

### "Copias" y alteraciones

Esto lo puedes hacer con le método .map( callback ). Donde este método recibe un callback, es decir, una función dentro del método map en el cual le indicas que cómo quieres que sea el nuevo array. No son copias literales, son copias a las cuales les haces una modificación de sus elementos a través de este callback

## Functions

## Desestructuración de objetos y arreglos

MDN: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

## Exportaciones

Para las exportaciones por defecto, el elemento a exportar no va entre {}, pero si no es por defecto, sí.
Y si del mismo file, tienes uno por default y otro 'normal', el default no llevará los {} mientras que el otro sí
Ej:
  **import heroes {owner} from './src/data/heroes'**

## Promesas

Estas **por default son asíncronas**, es decir, primero se ejecuta todo el código síncrono y después se ejecutan las promesas.
(Un código síncrono es aquel que se ejecuta con forme se va leyendo)
MDN: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise>

Estas promesas se dan a través de callback, funciones como argumentos. Los argumentos que tiene son el **resolve**, cuando se da de forma exitosa la promesa, y el **reject** que es cunado no se ha podido cumplir

## Fetch API

MDN: <https://developer.mozilla.org/es/docs/Web/API/Fetch_API>
Giphy API: <https://developers.giphy.com>

## Operador ternario


