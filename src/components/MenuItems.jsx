import './MenuItems.scss'
import Logout from '../assets/logout.svg'
import Views from '../assets/video.png'
import Inbox from '../assets/inbox.png'
import Status from '../assets/star.png'
import Reports from '../assets/briefcase.png'


function MenuItems() {
    const menuItems = [
        {
            title: 'Log Incidents',
            icon: Inbox
        },
        {
            title: 'Reports',
            icon: Reports
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
                        <div className="menuitem" key={index}>
                            <div className="menuItemLeft">
                                <img className='icon' src={item.icon} alt={item.title} />
                                {
                                    item.value ? (
                                        <span style={{ color: '#2563EB' }}> {item.title}</span>
                                    ) : (
                                        <span className='noNotificationStyle'>{item.title}</span>
                                    )
                                }
                            </div>
                         
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MenuItems