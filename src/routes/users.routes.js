const { Router } = require('express');
const router = Router();

const { create, getAll, getOneById, login } = require('../controllers/users.controller');
const Auth = require('../middlewares/auth.middleware');

router.get('/', Auth, getAll)
router.get('/:id', Auth, getOneById)
router.post('/', create)
router.post('/login', login)

module.exports = router