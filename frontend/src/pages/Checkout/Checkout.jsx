import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import './__test__/checkout.css'
import Loader from '../../components/Loader'
import {FaBucket} from 'react-icons/fa6'
import {AiOutlineInfoCircle, AiOutlineCheckCircle} from 'react-icons/ai'
import {GiTicket} from 'react-icons/gi'
import {FcDonate} from 'react-icons/fc'
import {useFetch} from '../../Hooks/useFetch'
const Checkout = () => {

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];    
const [loader, setLoader] = useState(false)
const {data} = useFetch('http://localhost:3000/tours/api/places');
const search = useLocation().search;
const query = new URLSearchParams(search).get('query');
const adults = new URLSearchParams(search).get('adults');
const children = new URLSearchParams(search).get('children');
const result = data && data.filter((item) => {
    
    return query && data && item.place && item.place === query
    
})

console.log(query, adults, children, result);


 
 
const {data: getTicket} = useFetch(`http://localhost:3000/tours/api/tickets?query=${query}`);
console.log(getTicket);


const handleClick = async (e) => {


    try {
        
        // const adultTicket = document.getElementById('adultTicket').getAttribute('data-value')
        // // const adultTicketAmount = document.getElementById('adultTicketAmount').getAttribute('data-value')
        // const childrenTicket = document.getElementById('childrenTicket').getAttribute('data-value')
        // // const childrenTicketAmount = document.getElementById('childrenTicketAmount').getAttribute('data-value')
        // // const convinienceFee = document.getElementById('convinienceFee').getAttribute('data-value')
        // const subtotal = document.getElementById('subtotal').getAttribute('data-value')

        const payload = {

            item: [
                {
                    name: query,
                    price: getTicket.price,
                    quantity: adults
                },
                {
                    name: query,
                    price: getTicket.price,
                    quantity: children
                },
                {
                    name: `Convenience Fee`,
                    price: 122,
                    quantity: 1
                },
                {
                    name: `Cotribution for the place`,
                    price: 1,
                    quantity: Number(adults) + Number(adults)
                },
            ],
        }

        console.log(payload);
        const {data: {url}} = await axios.post('http://localhost:3000/tours/api/payment', payload)
        // console.log(url);
        window.location = url
    } catch (error) {
        console.log(error.message);
    }




}

if (loader){
    return <Loader/>
}

  return (

    <>
    <div className="checkout">
        <div className="checkout-header">
            <div className="ticket-details">
                <h3>{result[0] && result[0].place}: {result[0] && result[0].tag}</h3>
                <span><p>{result[0] && result[0].city}, {result[0] && result[0].country}</p>|<p>{new Date().getDate()} {monthNames[new Date().getMonth()]}, {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p></span>
            </div>
        </div>
        <section className='booking-details-section'>

            <div className="booking-details-left">
                <div className="banner-img">
                    <img src="../../../src/assets/images/Checkout-banner2.jpg" />
                </div>
                <div className="essentials-text">
                    <h2>Recommended Places for You!</h2>
                    <p>Faster Booking Means Faster Entry To The Place.</p>
                </div>
                <div className="essentials-items">
                        

                    {
                       data && data.map((items) => {
                            return <div key={items._id} className="item">
                            <div className="item-left-img">
                                <img src={items.img} alt="" width={300} height={300}/>
                            </div>
                            <div className="item-right-content">
                                <div className="item-details">
                                <h3 className="title">{items.place}</h3>
                                <p>{items.city}, {items.country}</p>
                                </div>
                                <div className="cost-add-btn">
                                    <span className='bucket-list'><a href='#'><FaBucket/> Bucket</a></span>
                                    <span className='view-btn'>View</span>
                                </div>
                            </div>
                        </div>
                        
                        })
                    }
                    
                </div>
            </div>

            <div className="booking-details-right">
            <div className='booking-details-summary'>
                <div className='inner'>
                <div className="booking-summary">
                    <h3>Booking summary</h3>
                    <div className="adult-ticket">
                        <span className='ticket' id='adultTicket' data-value={2} >Adult ({adults} Tickets)</span>
                        <span className='amount' id='adultTicketAmount' data-value={900} >Rs. {getTicket.price} x {adults}</span>
                    </div>
                    <div className="children-ticket">
                        <span className='ticket'id='childrenTicket' data-value={2} >Children ({children} Tickets)</span>
                        <span className='amount' id='childrenTicketAmount' data-value={900} >Rs. {getTicket.price} x {children}</span>
                    </div>
                    <div className="convenience-fee">
                        <span><AiOutlineCheckCircle/>Convenience Fee</span>
                        <span id='convinienceFee' data-value={122} >Rs. 122</span>
                    </div>
                    <hr />
                    <div className="sub-total">
                        <span>Sub Total</span>
                        <span id='subtotal' data-value={1022} >Rs. {getTicket.price * (Number(adults) + Number(children)) + 122}</span>
                    </div>
                </div>
                    <div className="contribution">
                        <div className="contribution-amount">
                        <div className="contribution-logo-title">
                                <FcDonate/>
                            <h3>Contribution For the Place</h3>
                        </div>
                        <span>Rs. {Number(adults) + Number(children)}</span>
                        </div>
                        <p>Rs. 1 per ticket has been added <a href='#' className='learn-more'>learn more.</a></p>
                    </div>
                    <div className="current-state">
                        <p>Your Current state is <span className='state'>west Bengal</span></p>
                    </div>
                    </div>
                    <div className="amount-payable">
                        <span>Amount Payable</span>
                        <span>Rs. {(getTicket.price * (Number(adults) + Number(children))) + 122 + (Number(adults) + Number(children))}</span>
                    </div>
                </div>
                    <div className="ticket-type">
                        <div className="icon-ticket"><GiTicket/><h3>M-Ticket</h3></div>
                        <p>Show the m-ticket QR Code on your mobile to enter to the place.</p>
                    </div>
                    <div className="proceed">
                        <p><AiOutlineInfoCircle/>By proceeding, I express my consent to complete this transaction.</p>
                        <button className='total' onClick={(e) => {setLoader(true), handleClick(e)}}><p>Total: Rs. {(getTicket.price * (Number(adults) + Number(children))) + 122 + (Number(adults) + Number(children))}</p><p>Proceed</p></button>
                    </div>
            </div>

        </section>
    </div>
    </>
  )
}

export default Checkout