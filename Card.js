import './Card.css';
import coverimg from './images/cover 1.png';
import like from './images/like.PNG';
import save from './images/save.PNG';

const Card = () =>{
    return(
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
        
    );

}

export default Card;