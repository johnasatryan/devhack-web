const db = require('../database/database');
const bcrypt = require('bcrypt');

const initUsersTable = async () => {
  await db(
    `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(50) NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`,
  );
};

const createUser = async (user) => {
  const { username, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  return await db(
    `
    INSERT INTO users (username, email, password) VALUES(
    $1, $2, $3
    )
    `,
    [username, email, hashedPassword],
  );
};

module.exports = { initUsersTable, createUser };
