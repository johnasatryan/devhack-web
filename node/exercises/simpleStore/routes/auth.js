const express = require('express');
const { body, validationResult } = require('express-validator');
const { writeData, readData } = require('../utils/fileOperations');
const { initUsersTable, createUser } = require('../models/userModel');

initUsersTable();
const authRouter = express.Router();

authRouter.post(
  '/register',
  [
    body('email').isEmail(),
    body('username').isLength({ min: 2 }),
    body('password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
      return;
    }

    try {
      const result = await createUser(req.body);
      console.log(result);
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
);

authRouter.post('/', (req, res) => {});

module.exports = authRouter;
