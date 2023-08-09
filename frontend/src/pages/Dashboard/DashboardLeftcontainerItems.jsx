import React, {useState} from 'react'
import {TbAntennaBars5} from 'react-icons/tb'
import {HiUsers} from 'react-icons/hi'
import {FaUserLock} from 'react-icons/fa6'
import {IoNotificationsSharp} from 'react-icons/io5'
import {IoIosSettings} from 'react-icons/io'
import {BiSolidCloudUpload} from 'react-icons/bi'
const DashboardLeftcontainerItems = () => {

    const [active, setActive] = useState(0)

    let item = [<><TbAntennaBars5 style={active == 0 && {color: '#6366f1'}}/>Overview</>, <><HiUsers style={active == 1 && {color: '#6366f1'}}/>Customers</>, <><FaUserLock style={active == 2 && {color: '#6366f1'}}/>Account</>, <><IoNotificationsSharp style={active == 3 && {color: '#6366f1'}}/>Notifications</>, <><BiSolidCloudUpload style={active == 4 && {color: '#6366f1'}}/>Tickets Upload</>, <><IoIosSettings style={active == 5 && {color: '#6366f1'}}/>Settings</>]

  return (
    <ul className='dashboard-items-container'>       
        {
            item.map((items, index) => {
                return <li key={index} onClick={() => setActive(index)} className={`${index === active && 'active-bg'}`}>{items}</li>
            })
        }
    </ul>
  )
}

export default DashboardLeftcontainerItems