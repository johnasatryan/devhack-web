const express = require('express');
const { body, validationResult } = require('express-validator');
const { writeData, readData } = require('../utils/fileOperations');
const usersRouter = express.Router();

usersRouter.post('/', (req, res) => {});

module.exports = usersRouter;
