const booking = require('../model/booking')
const ticket = require('../model/tickets')
const sendMail = require('../helpers/mailHelper')

const bookTickets = async (req, res) => {


    const { item, adultVisitors, visitorCountry, city, place, childrenVisitors, country, transactionDate, transactionId, visitDate, email, nationality, noOfFemaleAdult, noOfFemalechildren, noOfMaleAdult, noOfMaleChildren, phone } = req.body

    if (adultVisitors && childrenVisitors && country && visitDate && email && nationality && noOfFemaleAdult && noOfFemalechildren && noOfMaleAdult && noOfMaleChildren && phone) {

        const info = await sendMail(`<div style='display: flex; flex-direction: column; gap: 1em; justify-content: flex-start; width: fit-content; height: fit-content;'>
                            <p>${place}</p>
                            <p>${city}</p>
                            <p>Total Adult Visitors: <b>${adultVisitors}</b></p>
                            <p>Total Children Visitors: <b>${childrenVisitors}</b></p>
                            <p>Nationality: <b>${nationality}</b></p>
                            <p>Visit Date: <b>${visitDate}</b></p>
                            <p>Tansaction Date: <b>${transactionDate}</b></p>
                            <p>Tansaction ID: <b>${transactionId}</b></p>
                        </div>`)

        console.log(info);

        const newBooking = await booking.create({ item: item, visitorCountry: visitorCountry, city: city, place: place, noOfAdult: adultVisitors, noOfChildren: childrenVisitors, noOfAdultMale: noOfMaleAdult, noOfAdultFemale: noOfFemaleAdult, noOfChildrenMale: noOfMaleChildren, noOfChildrenFemale: noOfFemalechildren, nationality: nationality, country: country, dateTime: visitDate, email: email, phone: phone, transactionDate: transactionDate, transactionId: transactionId })

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

        return res.status(200).json({})
    }

    res.status(400).json({ message: 'Bad Request.' })
}

module.exports = { bookTickets, ticketController }