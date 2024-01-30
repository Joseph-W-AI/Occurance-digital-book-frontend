import './Navbar.scss'
import NavIcon from '../components/NavIcon'
import Button from '../components/Button'
import logo from '../assets/logo.png'
import searchIcon from '../assets/search.png'
import notification from '../assets/notification.png';
import chevrondown from '../assets/chevron-down.png';
import avator from '../assets/Avatar.png';
import SearchForm from '../components/SearchForm'
import { Link } from 'react-router-dom';

// /log-incidents
function Navbar() {

    const item =      
        {
          title: 'Log Incidents',
          link: '/log-incidents',
        }
      
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="no" />
                <h2>D.O.B</h2>
            </div>
            <div className="nav-body">
            <div className="nav-input">
                <SearchForm/>
            </div>
                <div className="nav-body_right">
                <Link to={item.link}>
                <Button msg="Create An Incident" sign={true} />
                 </Link>
                    
                    <NavIcon url={searchIcon} />
                    <NavIcon url={notification} />
                    <div className="userAvator">
                        <NavIcon url={avator} />
                        <img className='userAvatorImg' src={chevrondown} alt="nopic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar