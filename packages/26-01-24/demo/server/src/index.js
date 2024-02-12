const crypto = require('crypto');
const fs = require("fs");
const express = require("express");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const USERS_FILE = "./users.json";

const app = express();

app.use(express.json());

// Crea el archivo json si no lo encuentra y le asigna un array vacio
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

app.post("/users", Auth, async (req, res) => {
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

app.post("/login", async (req, res) => {
  const loginPayload = req.body;

  fs.readFile(USERS_FILE, async (err, data) => {
    if (err) {
      res.status(500).send("Error al leer el archivo");
      return;
    }
    let users = JSON.parse(data);

    const user = users.find((user) => {
      return user.email === loginPayload.email
    });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const isValid = await bcrypt.compare(loginPayload.password, user.password)

    if (!isValid) return res.status(401).send('Credenciales inválidas');

    res.status(200).send({
      token: jwt.sign({ user: user.id }, 'super_secreto_123', { expiresIn: '10m' })
    });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
