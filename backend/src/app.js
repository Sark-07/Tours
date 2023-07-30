const express = require('express')
const cors = require('cors')
require('dotenv/config')
const connection = require('../config/connection')
const authRoutes = require('../routes/authRoute')
const placesRoutes  = require('../routes/placesRouter')
const paymentRoute = require('../routes/paymentRoute')
const bookTicketsRoutes = require('../routes/bookticketsRoute')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors(
    {origin: '*'}
))



// parsing all json and url encoded data
app.use(express.json())
app.use(express.urlencoded({extended: false}));


// middleware for the routes
app.use('/tours/api/auth', authRoutes)
app.use('/tours/api', placesRoutes)
app.use('/tours/api', bookTicketsRoutes)
app.use('/tours/api', paymentRoute)

// global error handler
app.use(function (err, req, res, next){

    console.log(err);
    res.status(err.statusCode || 500).json({message: err.message || 'Internal server error.'})
})

// test
app.get('/', (req, res) => {
    res.send('hi')
})

//  route 404
app.all('*', (req, res) => {

    res.status(404).send("Page not found");
})

const connectDatabase = async () => {

    try {
        
        await connection(process.env.Mongo_URI)
        app.listen(PORT, () => console.log(`Database connected and listening to port ${PORT}...`));
    } catch (error) {
        
        console.log(error)
    }
  
}
connectDatabase()