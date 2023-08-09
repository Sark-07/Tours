import React, { useState } from 'react';
import { GiAbstract019 } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa6';
import '../components/__test__/navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout} = useAuth();
  const [hover, setHover] = useState(false)

  return (
    <>
      <nav>
        <div>
          <a href='/' className='logo'>
            <GiAbstract019 className='logo-icon'></GiAbstract019>
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
          <li className='profile-menus' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Link to='/signin' className='sign-up-btn' style={token && {display: 'none'}}>Sign In</Link>
            <FaUser style={token ? {display: 'block', color: 'aliceblue', fontSize: 1.2+'rem'} : {display: 'none'}}/>
            <div className="profile-parent">
            <div className='profile-container'>

                <div className="name-email">
                  <div className="profile-name" >{token && token.user.name}</div>
                  <div className="profile-email" >{token && token.user.email}</div>
                </div>
                <div className='border'/>
                <ul className="profile-menus">
                  <li className='profile-items'><a href="#">Bookings</a></li>
                  <li className='profile-items'><a href="#">Bucket</a></li>
                  <li className='profile-items'><a href="#">Offers</a></li>
                  <li className='profile-items'><a href="#">Contact US</a></li>
                </ul>
                <div className='border'/>
                <div className="profile-settings-logout">
                  <div className='settings profile-items'>Settings</div>
                  <div className='logout profile-items' onClick={() => logout()}>Logout</div>
                </div>

                </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
