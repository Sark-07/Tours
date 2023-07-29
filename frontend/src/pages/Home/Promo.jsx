import React from 'react';
import { FaAmazonPay, FaGooglePay, FaPaypal } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';

const Promo = () => {
  return (
    <div className='promo-section'>
      <div className='promo-section-left'>
        <ul>
          <li>
            <a href='#'>Events</a>
          </li>
          <li>
            <a href='#'>Festivals</a>
          </li>
          <li>
            <a href='#'>Rituals</a>
          </li>
        </ul>
        <h1>Attend Live Events</h1>
        <p className='promo-text'>
        "Experience the pulse of our vibrant city as you immerse yourself in an array of captivating events. From electrifying music festivals to captivating art exhibitions, our tourist-friendly destination offers a cultural extravaganza that will leave you craving for more."
        </p>
        <div className='payment-icons'>
          <FaAmazonPay />
          <FaGooglePay />
          <SiPaytm />
          <FaPaypal className='paypal'/>
        </div>
        <p className='terms-conditions'>Terms and conditions applies. <span className='see-more'>See details.</span></p>
      </div>
      <div className='promo-section-right'></div>
    </div>
  );
};

export default Promo;
