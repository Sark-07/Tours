import React from 'react'
import {Link, useLocation, Navigate} from 'react-router-dom'
import {MdCancel} from 'react-icons/md'
import './CancelPayment.module.css/cancelPayment.css'
const CancelPayment = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('Id');
  if (!query) {
    return <Navigate to={'/'} />
  }
  localStorage.removeItem('bookTickets');
  return (
    <div className="main-holder">
          <div className="holder">
            <MdCancel className='failed'/>
            <div className="texts">
                <h2 className="">Payment Cancelled!</h2>
                <p className="">Your Payment session has been cancelled.</p>
                {/* <p className="">Ticket details have been sent to your email.</p> */}
                <p className=''> Please try booking tickets again.</p>
                <div className="btn-holder">
                    <Link to='/' className="cancel-link">
                        Home 
                   </Link>
                </div>
            </div>
        </div>
      </div>
  )
}

export default CancelPayment