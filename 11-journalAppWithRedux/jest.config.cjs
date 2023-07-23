module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [], // añadido para el testing de los distintos providers
}
// cualquier cambio que se haga aquí, tienes que bajar y subir el test suite para que se actualice sino no funcionará