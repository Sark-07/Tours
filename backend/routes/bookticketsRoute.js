const router = require('express').Router()
const use = require('../helpers/asyncWrapper')
const {bookTickets, ticketController} = require('../controller/bookticketsController')


router.post('/booktickets', use(bookTickets))

router.get('/tickets', use(ticketController))


module.exports = router