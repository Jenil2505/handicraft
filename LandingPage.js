import './LandingPage.css';
import img1 from './images/handicrafts.png';




const LandingPage = () => {
    return(
        <div>
<div className="banner">
 <div className="navbar">
     <img src={img1} className="logo"></img>
     <h2>Handicraft</h2>
     <ul>
         <li><a>Signup</a></li>
         <li><button type='button'><span></span>Login</button></li>
     </ul>
</div>
<div className='content'>
    <h1>Share Your</h1>
    <h1>Creative Idea of Handicraft</h1>
    <p>Craft is passionately creating something with your hands.</p>

</div>
</div>
</div>
    );
}


export default LandingPage;