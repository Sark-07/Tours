import React from 'react';
import { useFetch } from '../../../Hooks/useFetch';
import { useAuth } from '../../../context/useAuth';
const Test = () => {
  // const {data} = useFetch('http://localhost:3000/tours/api/places');
  // console.log(data);

  const today = new Date()
const tomorrow = new Date(today)
console.log(tomorrow.setDate(tomorrow.getDate() + 1))
  return <div style={{color: 'aliceblue'}}>hi</div>;
};

export default Test;
