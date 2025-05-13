// 1. Local modules
// 2. Built-in
// 3. Third party 


// const path = require('node:path');

// console.log(path.join('/folder1', 'folder2', 'file1'))
// console.log(path.extname(__filename))
// console.log(path.parse(__dirname))
// console.log(path.join(__dirname, '/folder1', '/folder2', 'file1'))


// const fs = require('node:fs');

// fs.writeFileSync('file.txt', "hello world");
// // fs.writeFileSync('file.txt', "bye", {flag: 'a'});
// // fs.appendFile('file.txt', "bye", {flag: 'a'});

// // const data = fs.readFileSync('file.txt', 'utf-8');

// // console.log(data)

// let currentData = null;

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log(data);
// });

// console.log(currentData)

const EventEmitter = require('node:events');

const event = new EventEmitter();


// event.on('order-burger', (arg) => {
//   console.log(arg)
//   console.log('Please take the order...');
// })

// event.emit('order-burger');
// event.emit('order-burger', 'with chees');


// console.log('hello world')


// event.once('some_listener', () => {
//   console.log('hello')
// });

// event.emit('some_listener')
// event.emit('some_listener')


// class CustomEvent extends EventEmitter {

// }

// const http = require('http');
// let data = "";
// const server = http.createServer((req, res) => {

//   console.log(req.headers);
//   req.on('data', (chunk) => {
    
//     data += chunk;

//   })
//   req.on("close", () => {
//     console.log(data);
//   })
//   res.end('<button> click </button>');
// });

// server.listen(3001, () => {
//   console.log('server is runing on port: 3001')
// });

// Event Loop in Node.js


// setTimeout(() => {
//   console.log('Timer Phase');
//   process.nextTick(() => {
//     console.log('Process 2')
//   })
// }, 500);

// Promise.resolve().then(() => {
//   console.log('Microtask: Promise phase')
// })

// process.nextTick(() => {
//   console.log('Microtask: Process phase');

//   setTimeout(() => {
//     console.log('Timeout 2')
//   }, 0)
// });

console.log('Synchronous');


// const fs = require('fs');

// fs.readFile(__filename, () => {
//   console.log('I/O phase');
// });

// setTimeout(() => {
//   console.log('Timer phase');
// }, 55);

// for (let i = 0; i < 20000000; ++i) {}

// setImmediate(() => {
//   console.log("Check phase");
// })

setTimeout(() => {
  console.log('Timer phase');
}, 1);


setImmediate(() => console.log('setImmediate'));