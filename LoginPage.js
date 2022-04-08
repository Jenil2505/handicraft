import './LoginPage.css';

const LoginPage = () =>{
    return(
<div>
    <div className="cont">
        <div className="form sign-in">
            <h2>Sign In</h2>
            <label>
                <span>Email Address</span>
                <input type="email" name="email"></input>
            </label>
            <label>
                <span>Password</span>
                <input type="password" name="password"></input>
            </label>
            <button class="submit" type="button">Sign In</button>

        </div>
        <div className="sub-cont">
    <div className="img">
        <div className="img-text m-up">
            <h2>New here?</h2>
            <p>Sign Up and  share your amazing idea
                   on handicarft</p>
        </div>
        <div className="img-btn">
            <span className="m-up">Sign Up</span>
        </div>
    </div>
</div>
    </div>

</div>
    );
}

export default LoginPage;