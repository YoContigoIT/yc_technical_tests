const express = require('express')
const morgan = require('morgan')
const { isString, Auth } = require('./middleware')
const sequelize = require('./model/config')
require('./model')
const dotenv = require('dotenv');

const { User } = require('./model')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/users', Auth, (req, res) => {
  const queryName = req.query.name
  if (queryName) {
    const usersResponse = users.filter(user => user.name === queryName)
    res.send(usersResponse)
  }
  res.send(users)
})

app.get('/api/users/:userId', isString, (req, res) => {
  const userId = req.params.userId
  const user = users.find((user) => user.id === userId)
  
  if (!user) {
    res.status(404).send({
      statusCode: 404,
      message: 'Usuario no encontrado'
    })
  }

  res.json(user)
})

app.post('/api/users', async (req, res) => {
  const user = await User.create(req.body)

  res.json({
    message: 'Usuario creado',
    data: user
  })
})

const PORT = process.env.PORT

sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
  })
})