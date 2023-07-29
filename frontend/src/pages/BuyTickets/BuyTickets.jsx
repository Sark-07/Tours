import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useFetch } from '../../Hooks/useFetch'
import {PiMountainsDuotone} from 'react-icons/pi'
import {BsFillCircleFill} from 'react-icons/bs'
import Loader from '../../components/Loader'
import './BuyTickets.module.css/buyTickets.css'  
  
  const BuyTickets = () => {
    const navigate = useNavigate()
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
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loader, setLoader] = useState(false)
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('query');
    if(!query){
        
        navigate('/')
    }
    let {data} = useFetch(`http://localhost:3000/tours/api/placedetails?location=${query}`)
    
    let details = data[0]



    const url = 'http://localhost:3000/tours/api/booktickets'
    const handleSubmit = async (e) => {

        e.preventDefault()
       try {
        const payload = {
            country: country,
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

        console.log(payload);
        const response =  await axios.post(url, payload) 
        if(response) setLoader(true)

        setTimeout(() => {
            navigate(`/checkout?query=${query}&adults=${adultVisitors}&children=${childrenVisitors}`)
        }, 3000);
        console.log(response);
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
                <span className='not-cancellable'><BsFillCircleFill/>Non-cancellable</span>
                <span className='available'><BsFillCircleFill/>Available</span>
                <span className='fast-filling'><BsFillCircleFill/>Fast Filling</span>
            </div>
        </div>
        </div>
            <div className="ticket-form">
                <div className="ticket-form-heading-status">
                <h1>Fill Up Ticket Form!</h1>
                <div className='ticket-status'>
                <span className='date-status'>{date.slice(0, 10).split("-").reverse().join("-")}</span>
                <span className='available status'><BsFillCircleFill/>Available</span>
                </div>
                </div>
                <form action="" className='ticket-details-form' onSubmit={(e) => handleSubmit(e)}>
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
                        <input  required type="datetime-local" className='placeholder-color' onChange={(e) => {setDate(e.target.value)}} />
                    </div>
                    <div className="email">
                    <label htmlFor="email">Enter Email</label>
                    <input  required type="email" className='placeholder-color' placeholder='Eg: johndoe@gmail.com' onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="phone">
                    <label htmlFor="country">Enter Phone Number</label>
                    <input  required type="text" className='placeholder-color' placeholder='Eg: 226458859' onChange={(e) => {setPhone(e.target.value)}}/>
                    </div>
                    <button className='tickets-from-submit'>Submit</button>
                </div>
                </form>
            </div>
    </div>
    </>
  )
}

export default BuyTickets