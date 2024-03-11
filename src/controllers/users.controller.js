const jwt = require('jsonwebtoken');
const env = require('../config/env');
const bcrypt = require('bcrypt');
const UserService = require('../services/users.service');
const findAllUseCase = require('../use-cases/users/find-all');

const getAll = async (req, res) => {
  const users = await findAllUseCase()
  res.status(200).json(users);
}

const getOneById = async (req, res) => {
  const user = await UserService.findOneById(req.params.id);
  res.status(200).json(user);
}

const create = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  const user = await UserService.create({
    ...req.body,
    password: hashedPassword
  });
  res.status(201).json(user);
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({
    message: 'User logged in',
    token: jwt.sign({ id: user.id }, env.JWT_SECRET)
  });
}

module.exports = {
  getAll,
  getOneById,
  create,
  login
}
