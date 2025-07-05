const express = require('express');
const { createUser } = require('../controllers/users');
const router = express.Router();

router.post('/', createUser);
// router.get('/', getAllUser);
// router.get('/:id', getById);

module.exports = router;
