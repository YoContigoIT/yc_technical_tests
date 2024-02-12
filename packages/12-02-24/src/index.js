const express = require("express");
const dbConnection = require('./config/db');
const app = express();
require('dotenv').config();
// .env no me funciono

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/api', userRoutes);


const PORT = 3001;

dbConnection.once('open', () => {
  console.log('Conexión establecida correctamente con MongoDB');

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});

dbConnection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));