const placeList = require('../model/placeList')
const placeInfo = require('../model/places')


const places = async (req, res) => {

    const place = await placeList.find({})
    res.status(201).json(place)

}


const placeDetails = async (req, res) => {
    const {location} = req.query
    const placeDet = await placeInfo.find({location: location})
    res.status(201).json(placeDet)
}

module.exports = {places, placeDetails}