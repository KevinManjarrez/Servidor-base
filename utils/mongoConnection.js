const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://kevin:uIs9cBRWhISGWCHE@cluster1.568gnhs.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => console.log('Conexion exitosa a mongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

module.exports = mongoose;

