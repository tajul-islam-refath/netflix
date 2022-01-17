import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rings } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [email_view, setEmailView] = useState(true);
  //const [otp_view, setOtpView] = useState(false);
  const [pass_view, setPassView] = useState(false);
  const [username_view, setUsernameView] = useState(false);

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    //setEmail(emailRef.current.value);
    if (email !== "") {
      setPassView(false);
      setEmailView(false);
      setUsernameView(true);
    } else {
      toast.error("Please enter an email.");
    }
  };

  const handleUsername = (e) => {
    e.preventDefault();

    if (username !== "") {
      //setUsername(usernameRef.current.value);
      setPassView(true);
      setEmailView(false);
      setUsernameView(false);
    } else {
      toast.error("Please enter a username.");
    }
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (password !== "") {
      //setPassword(passwordRef.current.value);
      try {
        await axios.post("auth/register", { email, username, password });
        toast.success("Registration Successful. Login to your account.");
        setLoader(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (err) {
        toast.error("Email or username already exists");
        setLoader(false);
      }
    } else {
      toast.error("Please enter password.");
      setLoader(false);
    }
  };

  const backToEmail = () => {
    setUsernameView(false);
    setPassView(false);
    setEmailView(true);
  };

  const backToUsername = () => {
    setPassView(false);
    setUsernameView(true);
    setEmailView(false);
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <div className="wrapper_inside">
              <img
                className="logo"
                src="images/icinema_logo.png"
                alt=""
                style={{ height: "40px" }}
              />
              <span>iCinema</span>
            </div>
            <Link to="/login">
              <button className="loginButton">Sign In</button>
            </Link>
            {/* <Link to="/login" className="loginButton">Sign In</Link> */}
          </div>
        </div>
        <div className="container">
          <h1 data-aos="fade-down" data-aos-delay="0" data-aos-duration="500">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 data-aos="fade-down" data-aos-delay="250" data-aos-duration="500">
            Watch anywhere. Cancel anytime.
          </h2>
          <p data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {/* {!email ? ( */}
          {email_view && (
            <>
              <div
                className="input"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="500"
              >
                <input
                  type="email"
                  placeholder="email address"
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="registerButton" onClick={handleStart}>
                  Get Started
                </button>
              </div>
            </>
          )}

          {/* ) : ( */}
          {username_view && (
            <>
              <motion.form
                className="input"
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              >
                <input
                  type="text"
                  placeholder="Username"
                  ref={usernameRef}
                  maxLength={15}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Link
                  to="#"
                  className="registerButton"
                  onClick={(e) => handleUsername(e)}
                >
                  Next
                </Link>
              </motion.form>
              <div className="password_back_btn" onClick={backToEmail}>
                Back
              </div>
            </>
          )}

          {pass_view && (
            <>
              <motion.form
                className="input"
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              >
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {loader === false ? (
                  <>
                    <Link
                      to="#"
                      className="registerButton"
                      onClick={(e) => handleFinish(e)}
                    >
                      Start
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="#" className="registerButton">
                      <Rings
                        arialLabel="loading-indicator"
                        color="white"
                        height={60}
                        width={60}
                      />
                    </Link>
                  </>
                )}
              </motion.form>
              <div className="password_back_btn" onClick={backToUsername}>
                Back
              </div>
            </>
          )}

          {/* )} */}
        </div>
      </div>
    </>
  );
}
