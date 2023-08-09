import React from 'react'
import {GiAbstract084} from 'react-icons/gi'
import {ReactComponent as TajMahal} from '../../assets/svg/taj-mahal.svg'

const DashboardLeftTitle = () => {
  return (
    <div className='Dashboard-left-title'>
        <div className="dashboard-logo">
        <GiAbstract084 className='logo-icon'></GiAbstract084>
          <h6>Tours</h6>
        </div>
        <div className="authority">
            <div className="name-tag">
                <h3>Taj Mahal</h3>
                <p>Heart of Agra</p>
            </div>
            <div className="authority-icon">
            <TajMahal/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLeftTitle