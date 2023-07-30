import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import SearchItem from './SearchItem';

const Hero = ({data}) => {

  const [search, setSearch] = useState('')
  const result = data && data.filter((item) => {

    return search && item && item.place && item.place.toLowerCase().includes(search)

  })


  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1>
          <Typewriter
            options={{
              strings: [
                'Find Your Next Destination!',
                'Book Your Tickets Now.',
              ],
              pauseFor: 3000,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      <div className="search">
        <input type='search' placeholder='Type your destination'onChange={(e) => setSearch(e.target.value)}/>
        <input type="button" className='btn' value="Search" />
        <div className="search-item-container">
          {
            result.length === 0 && search.length > 0 ? <div className='not-found'>No match found.</div> :  result.map((item) => {
              return <SearchItem key={item._id} item={item.place}/>
            })
          }
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
