import "./Upost.css";
import img1 from "./images/handicrafts.png";
import coverimg from './images/post.jpg';
import like from './images/like.PNG';
import save from './images/save.PNG';
import dash from './images/dash.png';
import add from './images/plus.png';
import bmark from './images/spost.png';
import logout from './images/logout.png';

const Upost = () => {
  return (
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
        <h3>Upload Post</h3>
      </div>
      <button type="button">
        <span></span>Upload
      </button>
      <form>
        <div class="row">
          <div class="column">
            <div className="stitched">Upload Image Here</div>
          </div>
          <div class="column">
            <label>
              <span>Title</span>
              <input type="text" name="title"></input>
            </label>
            <label>
              <span>Description</span>
              <input type="text" name="description"></input>
            </label>
            <label>
              <span>Location</span>
              <input type="text" name="location"></input>
            </label>
          </div>
        </div>
      </form>
      <div className="title2">
        <h3>Your Post</h3>
      </div>
      <div>
            <div className="post">
                <div className="info">
                    <div className="user">
                        <div className="profile-pic"><img src={coverimg} alt=""></img></div>
                        <p className="username">modern_web_channel</p>
                    </div>
                </div>
                <img src={coverimg} class="post-image" alt=""></img>
                <div className="post-content"> 
                <span>Wooden Bird</span>
                    <p class="description"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat.</p>
                </div>
                <div className="reaction-wrapper">
                        <img src={like} class="icon" alt=""></img><p class="likes">1,012 likes</p>
                        <img src={save} class="save icon" alt=""></img>
                    </div>
                </div>
        </div>
    
    </div>
  );
};

export default Upost;
