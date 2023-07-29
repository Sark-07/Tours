import React from 'react'
import {Link} from 'react-router-dom'
const CancelPayment = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center w-full">
    <div className="bg-white p-6 px-10 rounded md:mx-auto">
      <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
          <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
          </path>
      </svg>
      <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Cancelled</h3>
          <p className="text-white-600 my-2">Your Payment session has been cancelled.</p>
          {/* <p className="text-white-600 my-2">Ticket details have been sent to your email.</p> */}
          <p className='text-white'> Please try booking tickets Agail!  </p>
          <div className="py-10 text-center">
              <Link to='/' className="px-12 bg-red-400 rounded text-black hover:text-black hover:bg-red-500 font-semibold py-3">
                  Home 
             </Link>
          </div>
      </div>
  </div>
</div>
  )
}

export default CancelPayment