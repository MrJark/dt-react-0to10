# Intalaciones del Directorio

- **React Router Dom**

A través de yarn add react-router-dom@6

- Intalación de [Matrial UI](https://mui.com/material-ui/getting-started/installation/)

  He intalado el paquete de mui con **yarn add @mui/material @mui/styled-engine-sc styled-components**, la fuente ROboto de google con el link en el html y el paquete de icons con **yarn add @mui/icons-material**

- Repositorio de mui

Para saber como intalar los packages y como está estructurado, tienes que ir al[Github de mui](https://github.com/mui/material-ui/tree/master/examples/material-cra)

- **Para añadir React-Redux**

[React Redu](https://react-redux.js.org)

Instalación de reduxtoolkit -> **yarn add @reduxjs/toolkit react-redux**

- **Backend**

Voy a usar [Firebase](https://firebase.google.com)

Y para ello también me pide instalar firebase **yarn add firebase**

Hay otros métodos de authentication que pueden ser útiles ( y algunos gratias hasta cierto punto ) como [Auth0](https://auth0.com)

- Estilos

He utilizado [Animate.css](https://animate.style)

- Mensajes de alerta con [Sweetalert2](https://sweetalert2.github.io/#download)

Lo he instalado como **yarn add sweetalert2**

- Para las imágenes voy a usar [Cloudinary](https://cloudinary.com)

Es recomendable usar distintos almacenajes para imagenes y texto por posibles ataques con virus y que el contenido se vea expuesto

## Para el testing:

  1. Instalaciones:
    yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
    yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

  2. Opcional: Si usamos Fetch API en el proyecto:
    yarn add --dev whatwg-fetch
    Actualizar los scripts del package.json
      "scripts: {
        ...
        "test": "jest --watchAll"
      }

  3. Crear la configuración de babel babel.config.cjs
      module.exports = {
        presets: [
          [ '@babel/preset-env', { targets: { esmodules: true } } ],
          [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
      };

  4. Opcional, pero eventualmente necesario, crear Jest config y setup:
      jest.config.cjs
        module.exports = {
            testEnvironment: 'jest-environment-jsdom',
            setupFiles: ['./jest.setup.js']
        }

      jest.setup.js
      // En caso de necesitar la implementación del FetchAPI
      import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

## Variables de entorno

Se neceitan tener un archivo para manejalas que sea **.env** y no es recomendable tener 2 variables de entorno pero en este caso, como tenemso dos entornos, el de desarrollo y el de build, vamos a hacerlo.

Siempre van a ser string y no números por tanto, no hacen falta las '' y para trabajar con variables de entorno, se recomienda crear un nuevo archivo, en mi caso, **getEnvironments.js**

En VITE solo funcionan aquellas que empiecen por 'VITE' y siempre capitalizado y en snake_case

Además, he intalado el dotenv -> **yarn add -D dotenv** y algunas modificaciones en el **jset.setup.js**
