const fs = require('node:fs').promises;
const path = require('node:path');

const readData = async (filename) => {
  const filePath = path.join(__dirname, '../data', filename);

  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeData = async (filename, data) => {
  const filePath = path.join(__dirname, '../data', filename);
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      throw new Error('Something went wrong');
    }
  });
};

module.exports = { readData, writeData };
