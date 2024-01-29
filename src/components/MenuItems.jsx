import React from 'react';
import { Link } from 'react-router-dom';
import Views from '../assets/video.png';
import Inbox from '../assets/inbox.png';
import Status from '../assets/star.png';
import Reports from '../assets/briefcase.png';
import './MenuItems.scss';
import Logout from './accounts/Logout';

function MenuItems() {
  const menuItems = [
    {
      title: 'Home',
      icon: Status,
      link: '/main',
    },
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
      title: 'View Incidents',
      icon: Views,
      link: '/incidents',
    },
    {
      title: 'Logout',
      icon: Logout,
    },
  ];

  return (
    <div className='menuitems'>
      {menuItems.map((item, index) => (
        <div key={index} className="menuitem">
          {item.link ? (
            <Link to={item.link} className="menuItemLeft">
              <img className='icon' src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          ) : (
            <div className="menuItemLeft">
              {item.title === 'Logout' && <item.icon />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuItems;
