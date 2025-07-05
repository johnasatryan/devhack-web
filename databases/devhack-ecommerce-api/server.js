// const { MongoClient } = require('mongodb');
// require('dotenv').config();

// const client = new MongoClient(process.env.MONGO_URI);

// const run = async () => {
//   try {
//     const db = await client.db('example');
//     await client.connect();
//     const users = db.collection('users');

//     const result = await users.insertOne({
//       name: 'James',
//       age: 23,
//     });

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.close();
//   }
// };

// run();

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());

// connectDB().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`Server runing on: ${process.env.PORT}`);
//   });
// });

app.use('/users', userRouter);
const runServer = async () => {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server runing on: ${process.env.PORT}`);
  });
};

runServer();
