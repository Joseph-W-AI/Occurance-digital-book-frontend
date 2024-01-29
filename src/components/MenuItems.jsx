import './MenuItems.scss'
import Logout from '../assets/logout.svg'
import Views from '../assets/video.png'
import Inbox from '../assets/inbox.png'
import Status from '../assets/star.png'
import Reports from '../assets/briefcase.png'
import { Link } from 'react-router-dom'


function MenuItems() {
    const menuItems = [
        {
            title: 'Log Incidents',
            icon: Inbox,
            link: '/log-incidents',
          },
          {
            title: 'Reports',
            icon: Reports,
            link: '/reports',
          },
      
        {
            title: 'status',
            icon: Status,
        },
        {
            title: 'View Incidents',
            icon: Views,
        },
        {
            title: 'Logout',
            icon: Logout,
        }
    ]
    return (
        <div className='menuitems'>
            {
                menuItems && menuItems.map((item, index) => {
                    return (
                        <div className='menuitems'>
                    {menuItems.map((item, index) => (
        <Link to={item.link} key={index} className="menuitem">
          <div className="menuItemLeft">
            <img className='icon' src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
                    )
                })
            }

        </div>
    )
}

export default MenuItems