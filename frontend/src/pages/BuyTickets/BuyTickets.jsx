import React, { useEffect, useState } from 'react'
import {useLocation, Navigate, useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useFetch } from '../../Hooks/useFetch'
import {PiMountainsDuotone} from 'react-icons/pi'
import {BsFillCircleFill} from 'react-icons/bs'
import Loader from '../../components/Loader'
import './BuyTickets.module.css/buyTickets.css'  
  
  const BuyTickets = () => {
    const [isForeigner, setIsForeigner] = useState(false)
    const [nationality, setNationality] = useState('')
    const [country, setCountry] = useState('India')
    const [adultVisitors, setAdultVisitors] = useState(0)
    const [childrenVisitors, setChildrenVisitors] = useState(0)
    const [noOfMaleAdult, setNoOfMaleAdult] = useState(0)
    const [noOfMaleChildren, setNoOfMaleChildren] = useState(0)
    const [noOfFemaleAdult, setNoOfFemaleAdult] = useState(0)
    const [noOfFemalechildren, setNoOfFemaleChildren] = useState(0)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [nxtDates, setNxtDates] = useState(date)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('query');
    if(!query){
        
        return <Navigate to={'/'}/>
    }


    const { data: getTicket } = useFetch(`http://localhost:3000/tours/api/tickets?query=${query}`);
    const {data} = useFetch(`http://localhost:3000/tours/api/placedetails?location=${query}`)
    // console.log(getTicket);
    const details = data[0]

    const url = 'http://localhost:3000/tours/api/booktickets'
    const handleSubmit = async (e) => {

        e.preventDefault()
       try {
        const payload = {
            visitorCountry: country,
            city: details.city,
            country: 'India',
            place: query,
            noOfFemaleAdult: noOfFemaleAdult,
            noOfFemalechildren: noOfFemalechildren,
            noOfMaleAdult: noOfMaleAdult,
            noOfMaleChildren: noOfMaleChildren,
            adultVisitors: adultVisitors,
            childrenVisitors: childrenVisitors,
            nationality: nationality,
            date: date,
            email: email,
            phone: phone
        }
        localStorage.setItem('bookTickets', JSON.stringify(payload))
        // console.log(payload);
        // const response =  await axios.post(url, payload) 
        setLoader(true)

        setTimeout(() => {
            // console.log(hi);
            navigate(`/checkout?query=${query}&adults=${adultVisitors}&children=${childrenVisitors}`)
        }, 2000);
       } catch (error) {
        console.log(error);
       }

    }

    useEffect(() => {
        
        if(nationality == 'Foreigner'){
            setIsForeigner(true)
        }else{
            setIsForeigner(false)
        }

    }, [nationality])


    if (loader) return <Loader/>
  if (details && !loader) return (
    <>
    <Navbar/>
    <div className="buy-tickets">
        <div className="spacing"></div>
        <div className="header-container">
        <div className="buy-tickets-header">
            <h2>{details.location}</h2>
            <div className="icon-tags">
                <PiMountainsDuotone/>
                <ul>
                    {
                        details.recommendation && details.recommendation.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        <hr />
        <div className="location-availability">
            <h3>{details.city}, India</h3>
            <div className="availability">
                <span className='not-cancellable'><BsFillCircleFill/>Fast Filling</span>
                <span className='available'><BsFillCircleFill/>Available</span>
                <span className='fast-filling'><BsFillCircleFill/>Not Available</span>
            </div>
        </div>
        </div>
            <div className="ticket-form">
                <div className="ticket-form-heading-status">
                <h1>Fill Up Ticket Form!</h1>
                <div className='ticket-status'>
                <span className='date-status'>{date.slice(0, 10).split("-").reverse().join("-")}</span>
                {/* <span className='status not-cancellable' style={getTicket ? {display: 'flex'} : {display: 'none'}}><BsFillCircleFill/>Fast Filling</span> */}
                <span className='available status' style={ (Object.keys(getTicket).length != 0) ? {display: 'flex'} : {display: 'none'}}><BsFillCircleFill/>Available</span>
                <span className='status fast-filling' style={ (Object.keys(getTicket).length != 0) ? {display: 'none'} : {display: 'flex'}}><BsFillCircleFill/>Not Available</span>
                </div>
                </div>
                <form action="" className='ticket-details-form' onSubmit={(e) => {(Object.keys(getTicket).length != 0) && handleSubmit(e)}}>
                <div className="adult">
                    <h2>Adult Ticket</h2>
                    <label htmlFor="adult">Total no of visitors</label>
                    <input  required type="text" className='adult-numbers placeholder-color' placeholder='Eg: 5' onChange={(e) => {setAdultVisitors(e.target.value)}}/>
                    <label htmlFor="Number of male">Number of male</label>
                    <input  required type="text" placeholder='Eg: 2'className='placeholder-color' onChange={(e) => {setNoOfMaleAdult(e.target.value)}}/>
                    <label htmlFor="Number of female">Number of female</label>
                    <input  required type="text" placeholder='Eg: 2' className='placeholder-color' onChange={(e) => {setNoOfFemaleAdult(e.target.value)}}/>
                </div>
                <div className="children">
                    <h2>Children Ticket</h2>
                    <label htmlFor="children">Total no of visitors</label>
                    <input  required type="text" className='children-numbers placeholder-color' placeholder='Eg: 5' onChange={(e) => {setChildrenVisitors(e.target.value)}}/>
                    <label htmlFor="Number of male">Number of male</label>
                    <input  required type="text" placeholder='Eg: 2' className='placeholder-color' onChange={(e) => {setNoOfMaleChildren(e.target.value)}}/>
                    <label htmlFor="Number of female">Number of female</label>
                    <input  required type="text" placeholder='Eg: 2' className='placeholder-color' onChange={(e) => {setNoOfFemaleChildren(e.target.value)}}/>
                </div>
                <div className="calender-isForeigner-email-phone">
                    <div className="radio-btn">
                        <label htmlFor="Indian">Indian</label>
                        <input  required type="radio" name="nationality" className='placeholder-color' value="Indian" onChange={(e) => {setNationality(e.target.value)}} />
                        <label htmlFor="Foreigner">Foreigner</label>
                        <input  required type="radio" name="nationality" className='placeholder-color' value="Foreigner" 
                       onChange={(e) => {setNationality(e.target.value)}}/>
                    </div>
                    <div className="ifForeigner" style={isForeigner ? {display: 'flex'} : {display: 'none'}} >
                    <label htmlFor="country">Enter Country</label>
                    <input  required type="text" value={country} className='placeholder-color' placeholder='Eg: England' onChange={(e) => {setCountry(e.target.value)}}/>
                    </div>
                    <div className="calender">
                        <label htmlFor="calender">Enter date and estimated time of arrival</label>
                        <input  required type="date" className='placeholder-color' onChange={(e) => {setDate(e.target.value)}} />
                    </div>
                    <div className="email">
                    <label htmlFor="email">Enter Email</label>
                    <input  required type="email" className='placeholder-color' placeholder='Eg: johndoe@gmail.com' onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="phone">
                    <label htmlFor="country">Enter Phone Number</label>
                    <input  required type="text" className='placeholder-color' placeholder='Eg: 226458859' onChange={(e) => {setPhone(e.target.value)}}/>
                    </div>
                    <button className='tickets-from-submit' style={(Object.keys(getTicket).length == 0) ? {opacity: 0.7} : {opacity: 1}}> {(Object.keys(getTicket).length != 0) ? 'Submit' : 'Ticket Not Available'}</button>
                </div>
                <div className="isCrowdy" style={(date.slice(0, 10).split("-").reverse().join("-") == '03-08-2023') ? {display: 'flex'} : {display: 'none'}}>
                    <h2>Too Much Crowdy On {date.slice(0, 10).split("-").reverse().join("-")}.</h2>
                    <h3>You can try booking tickets for below dates.</h3>
                    <div className="available-dates">
                    <span className='date-status'>
                    05-08-2023
                    </span>
                    <span className='date-status'>
                    06-08-2023
                    </span>
                    <span className='date-status'>
                    07-08-2023
                    </span>
                    <span className='date-status'>
                    08-08-2023
                    </span>
                    </div>
                </div>
                </form>
            </div>
    </div>
    </>
  )
}

export default BuyTickets