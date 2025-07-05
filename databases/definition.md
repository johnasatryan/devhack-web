# DevHack E-commerce API — Project Definition

---

## 🛒 Project Name

DevHack E-commerce API

---

## ✅ Core Features

An e-commerce API will handle:

- Products
- Users/Customers
- Carts
- Orders

Scope:

- No payments integration for now
- No complex authentication yet (or basic only)
- Focus on data modeling, CRUD, and relationships

---

## ✅ Data Models

### Users

| Field     | Type   | Notes                      |
|-----------|--------|----------------------------|
| name      | String | Required                   |
| email     | String | Required, unique           |
| password  | String | Hashed if we add auth      |
| address   | String | Optional                   |
| phone     | String | Optional                   |
| createdAt | Date   | auto                       |

---

### Products

| Field       | Type   | Notes      |

|-------------|--------|------------|
| name        | String | Required   |
| description | String | Optional   |
| price       | Number | Required   |
| category    | String | Optional   |
| stock       | Number | Optional   |
| createdAt   | Date   | auto       |

---

### Cart

| Field   | Type      | Notes              |
|---------|-----------|--------------------|
| userId  | ObjectId  | Refers to User     |
| items   | Array     | product + quantity |

Cart Item:

| Field      | Type      | Notes              |
|------------|-----------|--------------------|
| productId  | ObjectId  | Refers to Product  |
| quantity   | Number    | Required           |

---

### Orders

| Field        | Type      | Notes                        |
|--------------|-----------|------------------------------|
| userId       | ObjectId  | Refers to User               |
| items        | Array     | Product snapshots            |
| totalAmount  | Number    | Calculated                   |
| status       | String    | e.g. pending, shipped        |
| createdAt    | Date      | auto                         |

Order Item:

| Field      | Type      | Notes                       |
|------------|-----------|-----------------------------|
| productId  | ObjectId  | Refers to Product           |
| name       | String    | snapshot of product name    |
| price      | Number    | snapshot of product price   |
| quantity   | Number    | snapshot of quantity        |

---

## ✅ Relationships

- Users → Carts → One-to-One
- Users → Orders → One-to-Many
- Products → Orders → Many-to-Many (via embedded snapshots)

---

## ✅ Recommended Folder Structure

```
devhack-ecommerce-api/
├── .env
├── .gitignore
├── package.json
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
├── routes/
│   ├── users.js
│   ├── products.js
│   ├── carts.js
│   └── orders.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
├── middlewares/
│   └── errorHandler.js
└── utils/
    └── helpers.js
```

---

## ✅ Folder Details

---

### server.js

- Entry point
- Starts Express app
- Connects to MongoDB
- Loads middleware
- Loads routes

---

### config/

Configuration code, e.g. MongoDB connection logic.

Example:

```js
// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

### models/

Mongoose schemas for collections.

Example:

```js
// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
```

---

### routes/

Express routing definitions.

Example:

```js
// routes/products.js
const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', getProducts);

module.exports = router;
```

---

### controllers/

Logic for handling requests.

Example:

```js
// controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
```

---

### middlewares/

Express middleware, e.g. error handling.

Example:

```js
// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};
```

---

### utils/

Helper functions for the app.

Example:

```js
// utils/helpers.js
exports.calculateTotal = (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
```

---

### .env

Environment variables:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/devhackDB
```

---

## ✅ Example server.js

```js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

// Add other routes similarly

app.use(errorHandler);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`✅ Server running on port ${process.env.PORT}`);
  });
});
```

---

## ✅ API Endpoints Overview

### Users

```
POST /users
GET /users/:id
PUT /users/:id
DELETE /users/:id
```

---

### Products

```
POST /products
GET /products
GET /products/:id
PUT /products/:id
DELETE /products/:id
```

---

### Cart

```
POST /carts/:userId/add
GET /carts/:userId
PUT /carts/:userId/remove
DELETE /carts/:userId
```

---

### Orders

```
POST /orders/:userId
GET /orders/:userId
GET /orders/:orderId
```

---

## ✅ Why This Structure?

✅ Easy to scale as the app grows  
✅ Follows best practices  
✅ Easy to deploy  
✅ Teaches solid project organization

---

## ✅ Deployment

Students can deploy this to:

- DigitalOcean, AWS, Hetzner, etc.
- Render, Railway, Heroku
- Docker containers

Update:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/devhackDB
```

…and deploy!

---

Recommended folder structure:

```
server.js
config/
models/
routes/
controllers/
middlewares/
utils/
```

Deployable, scalable, and perfect for DevHack students!



Deployable, scalable, and perfect for DevHack students!


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
    match: /^[a-zA-Z]+$/,
    lowercase: true,
    uppercase: false,
    default: 'John Doe',
    enum: ['John Doe', 'Jane Smith'],
    immutable: false,
    select: true,
    alias: 'username',
    get: v => v.toUpperCase(),
    set: v => v.trim(),
  }
});