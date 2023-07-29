const mongoose = require('mongoose');
const schema = new mongoose.Schema({
   city: {
    type: String
   },
   place: {
    type: String
   },
   date: {
    type: String
   }
});
const ticket = mongoose.model('tickets', schema);
module.exports = ticket;