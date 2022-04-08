import './SideBar.css';
import img1 from './images/handicrafts.png';


const SideBar = () =>{
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
                    <span className="link_name">Dashboard</span>
                    </a>
                    </li>
                    <li>
                        <a>
                    <span className="link_name">Upload Post</span>
                    </a>
                    </li>
                    <li>
                        <a>
                    <span className="link_name">Saved Post</span>
                    </a>
                    </li>
                    <li>
                        <a>
                    <span className="link_name">Logout</span>
                    </a>
                    </li>
                </ul>
            </div>
            
        </div>
    );

}

export default SideBar;