// Nuestra key de JWT
const secretKey = 'secreto123';
const express = require('express');
const router = express.Router();
const userController = require("./../controllers/userController");
const auth = require("./../middleware/auth");

router.post('/users', userController.register);
router.post('/login', userController.login);
router.get('/users', auth.authenticateToken, userController.getAllUsers);

module.exports = router;