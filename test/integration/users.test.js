// Test: Integration test for the users route
const supertest = require('supertest');
const app = require('../../src/app');
const UserModel = require('../../src/database/models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('../../src/config/env');

describe.skip('Users', () => {
  it('/ Debería retornar status 200 y mensaje correcto', async () => {
    const response = await supertest(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  })
})
