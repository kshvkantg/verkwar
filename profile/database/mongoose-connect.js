const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const mongoURI = 'mongodb+srv://' + process.env.MONGO_USERNAME+':'+process.env.MONGO_PASSWORD+'@'+process.env.MONGO_DB+'.nz5l9ze.mongodb.net/?retryWrites=true&w=majority&appName='+process.env.MONGO_DB;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
async function connectToDb() {
    mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}


// Close the Mongoose connection when the Node.js process ends
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected through app termination');
      process.exit(0);
    });
  });

module.exports = connectToDb;