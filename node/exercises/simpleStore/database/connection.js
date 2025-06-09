const { Client } = require('pg');

// const client = new Client({
//   database: 'postgres',
//   port: 5432,
//   user: 'jon',
//   password: 'postgres',
// });

// client
//   .connect()
//   .then(() => {
//     console.log('Connected to database...');
//     client
//       .query('SELECT NOW()')
//       .then((value) => {
//         console.log(value.rowCount);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// client.on('end', () => {
//   console.log('connetion closed');
// });

const checkIfDatabaseExists = (config, targetDB) => {
  const client = new Client(config);

  client
    .connect()
    .then(() => {
      console.log(`Connected to ${config.database}`);
      return client
        .query(`SELECT 1 FROM pg_database WHERE datname=$1`, [targetDB])
        .then((result) => {
          if (result.rowCount === 0) {
            client.query(`CREATE DATABASE ${targetDB}`).then((value) => {
              console.log('Database created successfully...');
            });
          } else {
            console.log('Database already exists');
          }
        });
    })
    .catch((err) => {
      console.log(err.stack);
    });
};

checkIfDatabaseExists(
  {
    database: 'postgres',
    port: 5432,
    user: 'jon',
    password: 'postgres',
  },
  'simplestore',
);
