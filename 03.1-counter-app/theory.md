# First APP in React by VITE

[Reactjs.org/documentation](https://es.legacy.reactjs.org/docs/getting-started.html)

Los files de React funcionan con el .jsx donde decimos que vamos a poner código de js y react
Usaré dependencias de VITE y no de Create React App ya que esta última usa webpack que es algo distinta y máslenta que VITE

Para implementar fragmentos de código de JS en los fragmentos del html en React, tienes que ponerlos entre **{ }**

- **Props** = properties
Son las propiedades que se le mandan a los functional component y normalmente se desestructuran. No se mandan en el argumento como **' props '** sino que se usan las **{ }**
Las props son funcionalidades que fluyen del componente padre, en este caso el main.jsx, al hijo, el FirstApp.jsx
Las propos son objetos con información

- **Hooks**
[Hooks React](https://es.legacy.reactjs.org/docs/hooks-intro.html)

- **Jest**
[Jest](https://jestjs.io/docs/getting-started)

## Pruebas

Las pruebas son se hacen antes de hacer el launch de la app y constan de 3 partes:
  1. Inicialización
  2. Estímulo
  3. Observación del comportamiento... esperados

Para hacer las pruebas, el elemento o función a la cual le vayas a hacer la prueba, debe estar **export**
Además se debe crear en la carpeta test, en mi caso, un carpeta que se igual que la que contiene los files a los cuales le vas a hacer las pruebas y tendrá el mismo nombre pero la extensión debe ser: **(nombre archivo).test.js** o **(nombre archivo).test.jsx** dependiendo de si va a ser componente react o solo js

- Instalación de las **dependencias de Bable** -> yarn add --dev babel-jest @babel/core @babel/preset-env
- Intalación de las **dependencias de types** -> yarn add -D @types/jest y en el script de del .json tienes que poner **"test": "jest --watchAll"** para que te muestre todo a la hora de hacer el test
