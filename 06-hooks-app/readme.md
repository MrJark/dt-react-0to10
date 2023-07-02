# Buenas Prácticas

Es buena practica en React poner delante del nombre del componente la palabra **use** cuando vaya a ser un **hook**. Es un estandas, no una obligación pero ayuda a visualizar más rápido.

Un hook no es más que **una función** común y corriente que tiene un **return** que puede no ser la propia función

## Tener en cuenta

La desestructuración dependerá de la manera en que hagas el return del hook. Al ser un **objeto**, usas las **curly brackets**, { }, pero si fuera un **array**, ( ), tendrás que usar los **brackets normales**, [ ], para desestructurar.

API que voy a usar -> <https://rickandmortyapi.com>

## Memo

Es un componente importado de React que sirve para memorizar un componente y que no se vuelva a recargar cada vez que se nombre o llame otro elemento que no tenga dicho memo.
Su importación es **import { memo } from 'react';**

Esta funcionalidad **solo** se recomienda cuando son componentes muy pesados o se intenta renderizar componentes que, por su estructura y llamadas, puede ser útil no renderizarlo siempre

Y se usa colocándolo delante del functional component y envolviéndolo todo entre paréntesis. Ejemplo: **Small.jsx**

Otra forma es si estás usando CRA y no VITE. En vite tienes que imporar memo de react pero en cra como el contexto global ya está react, simplemente pones delante del memo **React.** y te lo autoimporta

### useMemo

Este componente de React <https://react.dev/reference/react/useMemo> se usa para guardar o memorizar en momeoria o caché aquello que queiras y que solo se renderice cuaando vuelveas a llamarlo y no al llamar a otros componentes.
Tiene 2 argumentos:

  1. Funcióm que llama a un elemento que quieres renderizar y momorizar.
  2. Dependencias que queires que tengan en cuentra para memorizarlo, es como si fuera un condicional, si cambia este segundo argumento, renderízalo otra vez.

## Para hacer testing

[Pasos a seguir para instalar Jest](https://cursos.devtalles.com/courses/take/react-cero-experto/lessons/36156011-inicio-de-proyecto-pruebas-sobre-hooks) un método de prueba para los elementos de la aplicación
