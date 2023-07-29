import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaPatreon} from 'react-icons/fa'
import {GiAbstract084} from 'react-icons/gi'
import './__test__/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div>
                <a href="/" className="footer-logo">
                <GiAbstract084 className='footer-logo-icon'/>
                <h6>Tours</h6>
                </a>
            </div>
            <div className="social-links">
                <a href='#'><BsFacebook/></a>
                <a href='#'><BsTwitter/></a>
                <a href='#'><BsInstagram/></a>
                <a href='#'><FaPatreon/></a>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <ul className="footer-bottom-left">
               <li><a href="#">About</a></li>
               <li><a href="#">Help</a></li>
               <li><a href="#">Policy</a></li>
               <li><a href="#">Advertising</a></li> 
            </ul>
            <ul className="footer-bottom-right">
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Your privacy</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Explore</a></li>
            </ul>
        </div>
        <div className="copyright">
            <p>Copyright &#xa9; {new Date().getFullYear()} All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer