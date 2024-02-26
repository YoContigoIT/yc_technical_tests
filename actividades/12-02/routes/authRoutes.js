const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    const user = new User({
      name,
      email,
      password
    });

    // const hashedPassword = await bcrypt.hash(password, 10);

    // const user = new User({
    //   name,
    //   email,
    //   password: hashedPassword
    // });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Correo inválido' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña inválida' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    const message = "Login de usuario correctamente";

    res.json({ message, user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
