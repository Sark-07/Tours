import React from 'react'

const AboutEvent = ({upcomingEvents, aboutEvent}) => {
  return (
    <>
    
    <div className='overview'>
        <div className='about-para'>
          <h2>About The Event</h2>
          <p>
            {aboutEvent}
          </p>
        </div>
        <h2>Things to Observe</h2>
        <ul className='to-notice'>
          {upcomingEvents && upcomingEvents.map((item, index) => {
            return <li key={index}>
            <h3>{item.title}</h3>
            <p>
              {item.desc}
            </p>
          </li>
          })}
          
        </ul>
      </div>
    
    </>
  )
}

export default AboutEvent