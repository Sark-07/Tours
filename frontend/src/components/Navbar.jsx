import React from 'react';
import { GiAbstract084 } from 'react-icons/gi';
import '../components/__test__/navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <a href='/' className='logo'>
            <GiAbstract084 className='logo-icon'></GiAbstract084>
            <h6>Tours</h6>
          </a>
        </div>
        <ul>
          <li>
            <select name='city' id='city'>
              <option value='Kolkata'>Kolkata</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Delhi'>Delhi</option>
              <option value='Bangalore'>Bangalore</option>
              <option value='Ladakh'>Ladakh</option>
            </select>
          </li>
          <li>
            <a href='#'>Places</a>
          </li>
          <li>
            <a href='#'>Activites</a>
          </li>
          <li>
            <a href='#' className='sign-up-btn'>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
