require('dotenv').config();

const settings = {
  PORT: process.env.PORT,
  SECRET: process.env.secret_key,
};

module.exports = settings;
