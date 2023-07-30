const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    item: {
        type: Array
    },
    visitorCountry: {
        type: String
    },
    city: {
        type: String
    },
    place: {
        type: String
    },
    country: {
        type: String
    },
    noOfAdult: {
        type: Number
    },
    noOfChildren: {
        type: Number
    },
    noOfAdultMale: {
        type: Number
    },
    noOfAdultFemale: {
        type: Number
    },
    noOfChildrenMale: {
        type: Number
    },
    noOfChildrenFemale: {
        type: Number
    },
    nationality: {
        type: String
    },
    dateTime: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    transactionDate: {
        type: String
    },
    transactionId: {
        type: String
    }

})

const booking = mongoose.model('billing', schema)

module.exports = booking