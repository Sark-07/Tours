const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    city: {
        type: String
    },
    place: {
        type: String
    },
    tag: {
        type: String
    },
    country: {
        type: String
    }
});
const placeList = mongoose.model('placelists', schema);
module.exports = placeList;