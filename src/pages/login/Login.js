import "./login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../context/authContext/apiCalls";
import { Rings } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { isFetching, dispatch } = useContext(AuthContext);

  const signIn = (e) => {
    e.preventDefault();

    if (username !== "" && password !== "") {
      login({ username, password }, dispatch);
      //navigate("/browser");
    } else {
      toast.error("Please fill up all the fields");
    }
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="login">
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
          </div>
        </div>
        <motion.div
          className="container"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container_inside">
            <img className="logo_mbl" src="images/icinema_logo.png" alt="" />
            <span>iCinema</span>
          </div>
          <form>
            <h1>Sign In</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isFetching ? (
              <>
                <div className="signin_loader">
                  <Rings
                    arialLabel="loading-indicator"
                    color="white"
                    height={50}
                    width={50}
                  />
                </div>
              </>
            ) : (
              <>
                <button className="loginButton" onClick={(e) => signIn(e)}>
                  SIGN IN
                </button>
              </>
            )}

            <span>
              New to iCinema?{" "}
              <b>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Sign up now
                </Link>
              </b>
            </span>
            {/* <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small> */}
          </form>
        </motion.div>
      </div>
    </>
  );
}
