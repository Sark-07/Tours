const router = require('express').Router()
const place = require('../controller/placesController')
const use =  require('../helpers/asyncWrapper')

router.get('/places', use(place.places))
router.get('/placedetails', use(place.placeDetails))


module.exports = router