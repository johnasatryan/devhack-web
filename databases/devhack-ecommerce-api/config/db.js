const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MondoDB connected...');
  } catch (err) {
    console.log(err);
    console.log('Something went wrong');
    process.exit(1);
  }
};

module.exports = connectDB;
