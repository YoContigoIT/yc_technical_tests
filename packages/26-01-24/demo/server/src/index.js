const crypto = require('crypto')
const fs = require("fs");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const USERS_FILE = "./users.json";

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json('server listening'))

// Crea el archivo json si no lo encuentra y le asigna un array vacio
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

//Authentication
function Auth (req, res, next){
  const token = req.headers.authorization?.split(' ')[1]

  if(!token){
    return res.status(401).json('Authentication missing')
  }

  next()
}

//Endpoint to create a new user
app.post("/createUser", async (req, res) => {
  const newUser = req.body;

  const hashed = await bcrypt.hash(newUser.password, 10)

  fs.readFile(USERS_FILE, (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }

    let users = JSON.parse(data);

    users.push({ id: crypto.randomUUID(), ...newUser, password : hashed });
    
    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        res.status(500).send("Error creating new user");
      } else {
        res.status(200).send("User created succesfully");
      }
    });
  });
});

//Endpoint to get all users **Authorization is needed**
app.get('/users', Auth, (req, res) => {
  fs.readFile(USERS_FILE, (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }

    const users = JSON.parse(data);

    res.json(users);
  });
});


//Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  fs.readFile(USERS_FILE, (err, data) => {
    if (err) {
      return res.status(500).json('Error reading file');
    }

    const users = JSON.parse(data);

    const user = users.find(u => u.username === username);

    if (!user) {
      return res.status(401).json('User not found');
    }

    bcrypt.compare(password, user.password, (err, isValid) => {
      if (err || !isValid) {
        return res.status(401).json('invalid password');
      }

      //secretKey protected
      const secretKey = process.env.JWT_SECRET_KEY;

      const token = jwt.sign({ user: user, role: user.role }, secretKey , { expiresIn: '1h' });
      res.json({ token });
    });
  });
});




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
