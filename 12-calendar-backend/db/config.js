// archivo que utilizaré para conectarme a la base de datos de mongo

const mongoose = require('mongoose');

const dbConnection = async() => {
    // es async porque son peticiones al backend
    
    try {
        
        await mongoose.connect( process.env.DB_CNN );

        console.log('DB Onbline');
    } catch (error) {
        console.log(error);
        // throw new Error('Initialization Error')
    }
};


module.exports = {
    dbConnection,
}