const mongoose = require('mongoose');
const schema = new mongoose.Schema({
   city: {
    type: String
   },
   place: {
    type: String
   },
   available: {
    type: Number
   },
   price: {
      type: Number
   },
   tag: {
      type: String
   }
});
const ticket = mongoose.model('tickets', schema);
module.exports = ticket;