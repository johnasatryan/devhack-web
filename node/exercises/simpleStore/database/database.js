const { Pool } = require('pg');

const pool = new Pool({
  database: 'simplestore',
  port: 5432,
  user: 'jon',
  password: 'postgres',
});

const db = async (text, data) => {
  try {
    await pool.query(text, data);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = db;
