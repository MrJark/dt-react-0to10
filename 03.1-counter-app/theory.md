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
- Intalación de las **dependencias de types** -> yarn add -D @types/jest y en el script de del .json tienes que poner **"test": "jest --watchAll"** para que te muestre todo a la hora de hacer el test.

He hecho un cambio en el .json con respecto al **"test": "jest --watchAll"** ya que este me hacía que se me autorecargara la consola siempre, por ende, he tenido que poner solo el **--watch** sin el All. Así quedaría **"test": "jest --watch"** y esto me evita que se autorecargue

Cuando se ejecuta el **yarn test** puede dar el siguiente error: **You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously**, si esto te pasa, en la documentación de [Jest](https://jestjs.io/docs/getting-started) te dice que el archivo que debes crear para babel es **babel.config.js** tienes que cambiar el **.js** por **.cjs** y ya debería funcionar todo. Sino, aquí puedes oibtener más info al respecto [NodeJs](https://nodejs.org/docs/latest/api/modules.html#enabling)

**Testarchivos async**
En la consola, al hacer el test de los archivos de async y await, me salen unos errores en la consola por los módulos de node. Par asolucionarlos he tenido que crear, en el directorio padre, los archivos **jest.config.cjs**, debería ser tb js pero por el tipo de actualizaciones que tengo, necesito el .cjs, y son modulos de node, y **jest.setup.js**
Además he tenido que intalar un paquete en las dependencias de desarrollo **yarn add -D whatwg-fetch**
Este problema no existiría si estuvieras trabajando con **cra** porque ya vienen configurados pero al estar en vite, es necesario

### TESTING LIBRARY

Jest es muy bueno para hacer pruebas pero no tanto para hacerlas con React y ahí es donde entra esta librería: [(React-)Testing Library](https://testing-library.com)

Para instalarlo, necesito **yarn add --dev @testing-library/react**

