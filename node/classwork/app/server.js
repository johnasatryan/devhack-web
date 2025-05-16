const express = require('express');
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

// const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8');

// const PORT = envFile.split('=')[1];

// console.log(PORT);

// eval(envFile);

// console.log(process.pid);
// console.log(process.cwd());
// console.log(process.env.PORT);
const app = express();

const PORT = 3001;

const usersFile = path.join(__dirname, 'users.json');
const users = require(usersFile);

const writeToFile = (userData) => {
  users.push(userData);

  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

app.use(express.json());

const customMiddleware = (req, res, next) => {
  const apiKey = req.headers['apikey'];
  if (!apiKey) {
    res.status(401).json({ message: 'Authenticon required' });
    return;
  }
  if (apiKey !== process.env.API_KEY) {
    res.status(401).json({ message: 'Your key is invalid' });
    return;
  }
  next();
};

app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.status(200).json({ user: user, apiKey: process.env.API_KEY });
});

app.get('/api/protected', customMiddleware, (req, res) => {
  res.status(200).send('<h1> Protected</h1>');
});
app.post('/api/users/register', (req, res) => {
  console.log('endpoint register');
  const { username, password, address } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Username and password required' });
    return;
  }

  const user = users.find((u) => u.username === username);

  if (user) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }
  writeToFile({ username, password, address });

  res.status(201).json({ message: 'User created successfully' });
});
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});
app.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
