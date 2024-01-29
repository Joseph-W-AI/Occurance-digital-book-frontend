import './Main.scss'
import SideNav from './SideNav'
import MainContent from './MainContent'
import Navbar from './Navbar'
function Main() {
    return (
        <div className="container">
            <div className="nav">
                <Navbar/>
            </div>
            <div className='main'>
           <div className="side-nav">
           <SideNav />
           </div>
           <div className="main-content">
           <MainContent />
           </div>
        </div>
        </div>
        
    )
}

export default Main