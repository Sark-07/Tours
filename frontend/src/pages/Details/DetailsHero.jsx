import React from 'react'
import {AiTwotoneLike} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const DetailsHero = ({landscapeImg, interested, recommendation, portraitImg, eventhappening, liked, tag, location}) => {
  const navigation = useNavigate()
  return (
    <>
    <div className="details-hero">
            <div className="details-left">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1576137056125-b98071fda628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkYWtoJTIwdG91cmlzbXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="loc-info">
                    <div className="title-tag">
                    <h1 className="title">{location}</h1>
                    <p>{tag}</p>
                    </div>
                    <div className="likes-people">
                      <div className="likes">
                      <AiTwotoneLike/>
                        <p>{liked}</p>
                      </div>
                        <p>People liked this place.</p>
                    </div>
                    <div className="events-happening">
                        <div className="event-info">
                        <h3 className="event-name">{eventhappening}</h3>
                        <p>{interested} people interested</p>
                        </div>
                        <button className='notify-btn'>Notify Me</button>
                    </div>
                    <div className="tags">
                        
                      {
                        recommendation && recommendation.map((item, index) => {
                          return <span key={index}><a href="#">{item}</a></span>
                        })
                      }
                    </div>
                    <button className="book-tickets" onClick={() => navigation(`/buytickets?query=${location}`)}>Book Tickets</button>
                </div>
            </div>
            <div className="details-right">

            </div>
        </div>
    </>
  )
}

export default DetailsHero