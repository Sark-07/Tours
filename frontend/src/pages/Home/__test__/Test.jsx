import React from 'react';
import { useFetch } from '../../../Hooks/useFetch';

const Test = () => {
  const {data} = useFetch('http://localhost:3000/tours/api/places');
  console.log(data);
  return <div>Test</div>;
};

export default Test;
