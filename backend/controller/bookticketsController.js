const booking = require('../model/booking')
const ticket = require('../model/tickets')


const bookTickets = async (req, res) => {

 
    const { adultVisitors, childrenVisitors, country, date, email, nationality, noOfFemaleAdult, noOfFemalechildren, noOfMaleAdult, noOfMaleChildren, phone } = req.body

    if (adultVisitors && childrenVisitors && country && date && email && nationality && noOfFemaleAdult && noOfFemalechildren && noOfMaleAdult && noOfMaleChildren && phone) {


        const newBooking = await booking.create({ noOfAdult: adultVisitors, noOfChildren: childrenVisitors, noOfAdultMale: noOfMaleAdult, noOfAdultFemale: noOfFemaleAdult, noOfChildrenMale: noOfMaleChildren, noOfChildrenFemale: noOfFemalechildren, nationality: nationality, country: country, dateTime: date, email: email, phone: phone })

        return res.status(201).json(newBooking)
    }

    return res.status(500).json({ message: 'Error in booking.' })



}


const ticketController = async (req, res) => {
    const { query } = req.query
    if (query) {


        const getTicket = await ticket.findOne({ place: query })
        if (getTicket) {
            return res.status(201).json(getTicket)
        }

        return res.status(404).json({ message: 'Ticket not Available.' })
    }

    res.status(400).json({ message: 'Bad Request.' })
}

module.exports = { bookTickets, ticketController }