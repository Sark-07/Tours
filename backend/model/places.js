const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    city: {
        type: String
    },
    location: {
        type: String
    },
    tag: {
        type: String
    },
    liked: {
        type: String
    },
    interested: {
        type: String
    },
    overview: {
        type: String
    },
    eventHappening: {
        type: String
    },
    aboutEvent: {
        type: String
    },
    recommendation: {
        type: Array
    },
    landscapeImg: {
        type: String
    },
    portraitImg: {
        type: String
    },
    noticablePlaceL: {
        type: Array
    },
    upComingEvents: {
        type: Array
    }

});
const place = mongoose.model('places', schema);
module.exports = place;