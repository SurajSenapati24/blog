const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongooseURI = process.env.MONGODB_URL;

mongoose.connect(mongooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

module.exports = mongoose.connection;