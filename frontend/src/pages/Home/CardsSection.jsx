import React from 'react'
import Card from './Card'
import { data } from '../../data/cardData'

const CardsSection = () => {
  return (
    <div className='card-section'>
      {
        data.map((item, index) => {
          return <Card key={index} tag={item.tag} city={item.city} country={item.country} name={item.name} img={item.img} />
        })
      }
    </div>
  )
}

export default CardsSection;