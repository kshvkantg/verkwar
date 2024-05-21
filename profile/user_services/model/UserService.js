const mongoose = require('mongoose');
// Define the schema for a single service
const serviceSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    description: "Unique identifier for the User Associated with the service"
  },
  serviceId: {
    type: String,
    required: true,
    description: "Unique identifier for the service"
  },
  serviceName: {
    type: String,
    required: true,
    description: "Name of the service"
  },
  description: {
    type: String,
    description: "Description of the service"
  },
  price: {
    type: Number,
    required: true,
    description: "Price of the service"
  },
  currency: {
    type: String,
    description: "Duration of the service (e.g., '1 hour')"
  },
  time: {
    type: String,
    description: "Duration of the service (e.g., '1 hour')"
  }
});

// Create the model from the schema and export it
module.exports = mongoose.model('UserService', serviceSchema);
