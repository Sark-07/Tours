import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const Card = ({name, tag, city, country, img}) => {
  return (
    <div className='card' style={{backgroundImage: "url('"+img+"')"}}>
      <div className='card-header'>
        <h4>{tag}</h4>
        <h3>{name}</h3>
      </div>
      <div className='card-footer'>
        <h5>{city}</h5>
        <h3 style={{display: 'flex', alignItems: 'center', gap: 0.25+'em'}}>
          <FaLocationDot /> {country}
        </h3>
      </div>
    </div>
  );
};

export default Card;
