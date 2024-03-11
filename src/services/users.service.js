const UserModel = require('../database/models/user.model');

const findAll = async () => {
  return await UserModel.findAll();
}

const findOneById = async(userId) => {
  return await UserModel.findByPK(userId);
}

const create = async (user) => {
  return await UserModel.create(user);
}

module.exports = {
  findAll,
  findOneById,
  create
}
