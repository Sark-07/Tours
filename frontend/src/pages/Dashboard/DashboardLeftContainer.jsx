import React from 'react'
import DashboardLeftTitle from './DashboardLeftTitle'
import DashboardLeftcontainerItems from './DashboardLeftcontainerItems'

const DashboardLeftContainer = () => {
  return (
    <div className='dashboard-left-container'>
        <DashboardLeftTitle/>
        <DashboardLeftcontainerItems/>
    </div>
  )
}

export default DashboardLeftContainer