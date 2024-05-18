const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: String,
    user_display_name: String,
    user_bio: String,
    user_why_me: String,
    occupation_name: String,
    user_experience_id: [String],
    user_offering_id: [String],
    user_details: userPersonalDetail
  });


  const userPersonalDetail = new mongoose.Schema({
    address: String,
    country_code: String,
    phone_number_without_code: String,
    email: String,
    zip_code: String
  })

  module.exports = userSchema;