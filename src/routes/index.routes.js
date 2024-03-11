const { Router } = require('express');
const router = Router();

const usersRouter = require('./users.routes');

router.use('/users', usersRouter);

module.exports = router;