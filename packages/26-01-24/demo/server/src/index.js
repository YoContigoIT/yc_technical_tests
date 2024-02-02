const crypto = require('crypto')
const fs = require("fs");
const express = require("express");
// Importamos jwt
const jwt = require('jsonwebtoken');

const USERS_FILE = "./users.json";

const app = express();

app.use(express.json());

// Crea el archivo json si no lo encuentra y le asigna un array vacio
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Nuestra key de JWT
const secretKey = 'secreto123';

// Nuestro middleware
function verificarToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    // Si el token no existe 
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    // Verificar el token esta correcto
    console.log(secretKey);
    const decoded = jwt.verify(token, secretKey);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token no válido.' });
  }
}

// Endpoint donde se logea el user
app.post('/login', (req, res) => {
  const { user } = req.body;

  // Crear un token JWT con la info
  const token = jwt.sign({ user: user }, secretKey, { expiresIn: '1h' });

  // Devolvemos el token
  res.json({ token });
});


app.post("/users", verificarToken,(req, res) => {
  const newUser = req.body;
  fs.readFile(USERS_FILE, (err, data) => {
    if (err) {
      res.status(500).send("Error al leer el archivo");
      return;
    }
    let users = JSON.parse(data);

    users.push({ id: crypto.randomUUID(), ...newUser });
    
    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        res.status(500).send("Error al guardar el usuario");
      } else {
        res.status(200).send("Usuario creado exitosamente");
      }
    });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
