import React from 'react';
import { useNavigate } from 'react-router-dom';
const SearchItem = ({item}) => {
const navigation = useNavigate()


  return <div className='search-item' onClick={() => navigation(`/location?query=${item}`)}>{item}</div>;
};

export default SearchItem;
