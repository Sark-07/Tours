const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide user name.'],
        trim: true
    },
    phone: {
        type: Number,
        required: [true, 'must provide phone number.']
    },
    email: {
        type: String,
        required: [true, 'Must provide email.'],
        unique: true
    },
    password: {
        type: String,
        required: true,
       min: [4, 'To short password.'] 
    }
});
const user = mongoose.model('users', schema);
module.exports = user;