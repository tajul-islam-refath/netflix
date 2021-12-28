import "./login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const signIn = () => {
    navigate('/browse');
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <div className="wrapper_inside">
          <img
            className="logo"
            src="images/icinema_logo.png"
                      alt=""
                      style={{height:'40px'}}
            />
            <span>iCinema</span>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="container_inside">
        <img
            className="logo_mbl"
            src="images/icinema_logo.png"
                      alt=""
                      
        />
          <span>iCinema</span>
          </div>
        <form>
          
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton" onClick={signIn}>Sign In</button>
          <span>
            New to ICINEMA? <b><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Sign up now</Link></b>
          </span>
          {/* <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small> */}
        </form>
      </div>
    </div>
  );
}