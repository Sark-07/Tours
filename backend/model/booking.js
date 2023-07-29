const mongoose = require('mongoose')

const schema = new mongoose.Schema({

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
    country: {
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
    }

})

const booking = mongoose.model('billing', schema)

module.exports = booking