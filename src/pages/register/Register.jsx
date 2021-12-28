import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <div className="wrapper_inside">
          <img
            className="logo"
            src="images/icinema_logo.png"
                      alt=""
                      style={{height: '40px'}}
          />
            <span>iCinema</span>
            </div>
          <Link to="/login"><button className="loginButton">Sign In</button></Link>
          {/* <Link to="/login" className="loginButton">Sign In</Link> */}
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <Link to="/browse" className="registerButton" onClick={handleFinish}>
              Start
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}