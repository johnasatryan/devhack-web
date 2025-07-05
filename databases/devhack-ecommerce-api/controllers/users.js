const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const users = User(req.body);
    users.save();
    res.status(201).json({ message: users });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createUser };
