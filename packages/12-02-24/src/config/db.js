const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:EaAafG12edDG2cEHbb2Fgee2gHfaGCb1@roundhouse.proxy.rlwy.net:49185").then(() => {
    console.log('Conexión exitosa a la base de datos MongoDB');
}).catch(err => {
    console.error('Error al conectar a la base de datos MongoDB:', err);
});

module.exports = mongoose.connection;