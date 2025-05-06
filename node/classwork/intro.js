// (function (module, exports, require, __filename, __dirname) {
  
// });

// console.log(__filename);
// console.log(__dirname);
// console.log(module);

// const {} = require('./newModule');


// console.log(s)

// const a = require('./a');

// const b = 23;
// console.log(a)
// console.log(b)

const crypto = require('crypto');

const start = Date.now();
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// console.log('Hash:', Date.now() - start);

const maxSize = 30;
// process.env.UV_THREADPOOL_SIZE = 16

// for (let i = 0; i < maxSize; ++i) {
//   crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', (err, key) => {
//     console.log('Hash:', Date.now() - start)
//   });
// }

const https = require('https');


for (let i = 0; i < maxSize; ++i) {
  https.request('https://google.com', (res) => {
    res.on('data', () => { });
    res.on('end', () => {
      console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
  }).end();
}


const os = require('os');
console.log(os)