# Instalaciones

Hay que intalar el react router a través de **yarn add react-router-dom@6**

Para los estilos he usado Boostrap.com y Animate.style

Para simplificar elementos del query (si te envian mas de uno) he intalado **yarn add query-string** y parsearlo de una manera mas sencilla

## Build App

Si quieren hacer el build de la app para hacer el deploy, si se fijan verán que los assets con las imágenes no se copian automáticamente a la carpeta dist con el build de producción.

Esto es debido a Vite y como estamos creando las URL's de las imágenes en HeroCard.jsx.

Si importamos directamente una imagen con import imgUrl from '/assets/heroes/marvel-spider.jpg', Vite se encargará de gestionarlo y añadirá el archivo al build de producción, pero nosotros estamos creando la URL con const heroImageUrl = `/assets/heroes/${ id }.jpg`;, de ahí que Vite no las copie automáticamente.

La solución sería crear una carpeta llamada public en la raíz del proyecto (al mismo nivel que package.json o index.html) y dentro de esta carpeta mover la carpeta heroes que contiene todas las imágenes.

De esta forma ya añadimos la carpeta heroes al build de producción.

Para acceder a "public" tenemos que usar la ruta raíz /, por lo que ahora modificaremos la URL de heroImageUrl en el archivo HeroCard.jsx quedando: const heroImageUrl = `/heroes/${ id }.jpg`;.

De esta forma ya se copian automáticamente las imágenes, y funciona nuestra app tanto en desarrollo como producción.

## Testing (config)

1. Instalaciones:

  yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
  yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

2. Opcional: Si usamos Fetch API en el proyecto: (para este proyecto de heroes no la hemos utilizado por tanto, no hace falta)

  yarn add --dev whatwg-fetch

3. Actualizar los scripts del package.json
  "scripts: {
    ...
    "test": "jest --watchAll"
  }

4. Crear la configuración de babel babel.config.cjs
  module.exports = {
      presets: [
          [ '@babel/preset-env', { targets: { esmodules: true } } ],
          [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    };

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

  jest.config.cjs

  module.exports = {
      testEnvironment: 'jest-environment-jsdom',
      setupFiles: ['./jest.setup.js']
    }
  jest.setup.js

  // En caso de necesitar la implementación del FetchAPI
  import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
