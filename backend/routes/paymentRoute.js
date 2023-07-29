const router = require('express').Router()
const use = require('../helpers/asyncWrapper')
const paymentController = require('../controller/paymentController')


router.post('/payment', use(paymentController))


module.exports = router