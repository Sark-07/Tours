import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
// import { data } from '../../data/cardData'

const CardsSection = ({ data }) => {
  return (
    <div className='card-section-wrapper'>
      <div className='card-section'>
        {data.map((item) => {
          return (
            <Link key={item._id} to={`/location?query=${item.place}`}>
              <Card
                tag={item.tag}
                city={item.city}
                country={item.country}
                name={item.place}
                img={item.img}
              />
            </Link>
          );
        })}
      </div>
        <BsChevronRight className='arrow-right' />
        <BsChevronLeft className='arrow-left' />
    </div>
  );
};

export default CardsSection;
