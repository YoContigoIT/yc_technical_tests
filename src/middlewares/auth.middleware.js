const jwt = require('jsonwebtoken');
const env = require('../config/env');

const Auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = Auth;