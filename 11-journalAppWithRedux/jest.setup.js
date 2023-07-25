// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { getEnvinments } from './src/helpers/getEnvironments';


// configuración para los test, en este caso porque queremos usar el .env.test pero por defecto no hace falta porque usa el .env
require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvinments: () => ({...process.env})
}));
