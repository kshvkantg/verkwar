const mongoose = require('mongoose');
const user = require('../../basic_info/model/user');

const experienceSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        description: "User ID of the user who has the experience"
    },
    title: {
        type: String,
        required: true,
        description: "Title of the past experience"
    },
    company: {
        type: String,
        required: true,
        description: "Company where the experience was gained"
    },
    startDate: {
        type: Date,
        required: true,
        description: "Start date of the experience"
    },
    endDate: {
        type: Date,
        description: "End date of the experience (if applicable)"
    },
    description: {
        type: String,
        description: "Description of the experience"
    }
});

module.exports = mongoose.model('UserExperience', experienceSchema);

