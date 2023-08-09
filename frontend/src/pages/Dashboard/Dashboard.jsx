import React from 'react'
import './Dashboard.module.css/dashboard.css'
import DashboardLeftContainer from './DashboardLeftContainer'

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <div className="dashboard-left">
            <DashboardLeftContainer/>
        </div>
        <div className="dashboard-right"></div>
    </div>
  )
}

export default Dashboard