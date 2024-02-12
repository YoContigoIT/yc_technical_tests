const User = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: 'Error falta un campo' });
        }

        const user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const token = user.generateAuthToken();

        res.status(201).json({ message: "exito", token: token });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!email || !password) {
            res.status(400).json({ message: 'Error falta un campo' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ userId: user._id }, "secreto123", { expiresIn: '1h' });

        res.status(201).json({ message: "exito", token: token });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    register,
    login,
    getAllUsers
};