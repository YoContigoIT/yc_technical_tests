const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const authenticateToken = require('./middleware/authenticateToken');
require('dotenv').config();

const app = express();

app.use(express.json());

connectDB();

// Sin autenticación
app.use('/api/auth', authRoutes);

// Requieren autenticación
app.use('/api/users', authenticateToken, userRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error del servidor');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
