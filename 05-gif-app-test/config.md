# Para el Test

Pasos a seguir para lo que se necesita del test -> <https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177>

Los pasos siguientes son para trabajar con vite, si se trabaja con CRA la mayoria de pasos ya están intalados y configurados

Pasos a seguir:

1. Intalación requerias:

    yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react
    yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

2. Si usas Fetch API en el proyecto, neceitas intalar:

    yarn add --dev whatwg-fetch

3. Actualilzar los package.json:

    "test": "jest --watchAll"

4. Crear la configuración de babel babel.config.jcs

    module.exports = {
        presets: [
            [ '@babel/preset-env', { targets: { esmodules: true } } ],
            [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    };

5. Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.jcs

    module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    }
