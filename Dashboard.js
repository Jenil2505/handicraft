import './Dashboard.css';
import img1 from './images/handicrafts.png';
import notf from './images/notification.png';
import prf from './images/person1.png';
import map from './images/gmap.PNG';
import dash from './images/dash.png';
import add from './images/plus.png';
import bmark from './images/spost.png';
import logout from './images/logout.png';
const Dashboard = () =>{
    return(
        <div>
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <img src={img1}></img>
                        <div className="logo_name">HANDICRAFT</div>
                    </div>

                </div>
                <ul className="nav_list">
                    <li>
                        <a>
                        <img src={dash}></img>
                    <span className="link_name">Dashboard</span>
                    </a>
                    </li>
                    <li>
                        <a>
                        <img src={add}></img>
                    <span className="link_name">Upload Post</span>
                    </a>
                    </li>
                    <li>
                        <a>
                        <img src={bmark}></img>
                    <span className="link_name">Saved Post</span>
                    </a>
                    </li>
                    <li>
                        <a>
                        <img src={logout}></img>
                    <span className="link_name">Logout</span>
                    </a>
                    </li>
                </ul>
            </div>
            <div className="title">
                <h3>handicraft Shop Near Me</h3>
            </div>
            <div className="notify">
                <img src={notf} alt="notification"></img>
            </div>
            <div className="profile">
                <img src={prf} alt="profile"></img>
            </div>
            <div className="map">
                <img src={map}></img>
            </div>
        </div>
    );

}

export default Dashboard;