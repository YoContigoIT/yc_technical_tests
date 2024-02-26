const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Solicitud no autorizada. Token de autenticación no proporcionado.' });
  }

  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Solicitud no autorizada. Formato de token inválido.' });
  }

  const authToken = tokenParts[1];

  jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Solicitud no autorizada. Token inválido.' });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
