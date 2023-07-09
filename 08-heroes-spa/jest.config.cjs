

// module.exports = {
//     transform: {
//         '^.+\\.jsx?$': 'babel-jest',
//     },
//     testEnvironment: 'jest-environment-jsdom',
//     setupFiles: ['./jest.setup.js']
// }

module.exports = {

    testEnvironment: "jest-environment-jsdom",
  
    setupFiles: ["./jest.setup.js"],
  
    moduleNameMapper: {
  
      "^animate.css$": "<rootDir>/mocks/animate.css.js",
  
    },
  
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
  
};