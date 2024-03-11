// Describe - Envolver las pruebas
// it/test - Pruebas
// expect - Asertar

// toEqual - Compara objetos
// toBe - Compara valores primitivos
// toHaveCalled - Verifica si una función fue llamada
// toHaveBeenCalledWith - Verifica si una función fue llamada con ciertos argumentos

const User = require('../../src/database/models/user.model');
const { findAll, findOneById, create } = require("../../src/services/users.service");
const { user } = require('../fixtures/user.mock');

jest.mock('../../src/database/models/user.model', () => {
  return {
    findAll: jest.fn(),
    findByPK: jest.fn(),
    create: jest.fn(),
  };
})

describe("Users Service", () => {
  describe('GetAllUser', () => {
    test("Debería retornar todos los usuarios", async () => {
      User.findAll.mockResolvedValue([user]);
      const result = await findAll();
      expect(User.findAll).toHaveBeenCalledTimes(1);
      expect(result).toEqual([user]);
    });
  })

  describe('GetUserById', () => {
    test("Debería retornar un usuario por su id", async () => {
      User.findByPK.mockResolvedValue(user);
      const result = await findOneById(user.id);
      expect(User.findByPK).toHaveBeenCalledTimes(1);
      expect(User.findByPK).toHaveBeenCalledWith(user.id);
      expect(result).toEqual(user);
    });
  })

  describe('CreateUser', () => {
    test("Debería crear un usuario", async () => {
      User.create.mockResolvedValue(user);
      const result = await create(user);
      expect(User.create).toHaveBeenCalledTimes(1);
      expect(User.create).toHaveBeenCalledWith(user);
      expect(result).toEqual(user);
    });
  })
});
