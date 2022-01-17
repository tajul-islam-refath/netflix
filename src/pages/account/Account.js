import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./account.scss";
import { AnimatePresence, motion } from "framer-motion";
import swal from "sweetalert";
import { UserContext } from "../../context/userContext/UserContext";
import { updateUser } from "../../context/userContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

const Account = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [selectedModalEmail, setSelectedModalEmail] = useState(null);
  const [selectedModalPass, setSelectedModalPass] = useState(null);
  const [selectedModalPhone, setSelectedModalPhone] = useState(null);

  const { user, error, dispatch } = useContext(UserContext);
  const { dispatch: authDispatch } = useContext(AuthContext);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const [id, setId] = useState(user._id);

  const openNameModal = (e, name) => {
    e.preventDefault();
    setSelectedModal(name);
  };

  const openEmailModal = (e, email) => {
    e.preventDefault();
    setSelectedModalEmail(email);
  };

  const openPassModal = (e, pass) => {
    e.preventDefault();
    setSelectedModalPass(pass);
  };

  // const openPhoneModal = (e, phone) => {
  //   e.preventDefault();
  //   setSelectedModalPhone(phone);
  // };
  // const changeUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  const changeName = (e) => {
    e.preventDefault();
    setSelectedModal(null);
    updateUser({ username }, id, dispatch);
    if (!error) {
      var user = JSON.parse(localStorage.getItem("user"));
      user["username"] = username;
      localStorage.setItem("user", JSON.stringify(user));

      swal({
        title: "Congrats!",
        text: "Your name has been changed! You will be signout!",
        icon: "success",
      }).then((willLogout) => {
        if (willLogout) {
          authDispatch(logout());
        } else {
          authDispatch(logout());
        }
      });
      setUsername(username);
    }
  };
  const changeEmail = (e) => {
    e.preventDefault();
    setSelectedModalEmail(null);
    updateUser({ email }, id, dispatch);

    if (!error) {
      var user = JSON.parse(localStorage.getItem("user"));
      user["email"] = email;
      localStorage.setItem("user", JSON.stringify(user));

      swal({
        title: "Congrats!",
        text: "Your email has been changed! You will be signout!",
        icon: "success",
      }).then((willLogout) => {
        if (willLogout) {
          authDispatch(logout());
        } else {
          authDispatch(logout());
        }
      });
      setEmail(email);
    } else {
      swal({
        title: "Oops!",
        text: "Your email cannot be changed!",
        icon: "error",
      });
    }
  };
  const changePass = (e) => {
    e.preventDefault();
    if (password !== "") {
      setSelectedModalPass(null);
      updateUser({ password }, id, dispatch);

      if (!error) {
        swal({
          title: "Congrats!",
          text: "Your password has been changed! You will be signout!",
          icon: "success",
        }).then((willLogout) => {
          if (willLogout) {
            authDispatch(logout());
          } else {
            authDispatch(logout());
          }
        });
      } else {
        swal({
          title: "Oops!",
          text: "Your password cannot be changed!",
          icon: "error",
        });
      }
    } else {
      swal({
        title: "Oops!",
        text: "Your need to enter a password!",
        icon: "error",
      });
    }
  };
  const changePhone = (e) => {
    e.preventDefault();
    setSelectedModalPhone(null);
    swal({
      title: "Congrats!",
      text: "Your phone number has been changed!",
      icon: "success",
    });
  };
  return (
    <>
      <div className="account">
        {/* <Navbar /> */}
        <div className="account_header">
          <h4>Account</h4>
          <img src="images/user.svg" alt="image_account" />
          <p>Member since {user.createdAt.substr(0, 10)}</p>
        </div>
        <div className="divider"></div>
        <div className="account_info">
          <div className="membership_billing_text">
            <p>Membership & Billing</p>
            <Link to="/" className="cancel_membership">
              Cancel Membership
            </Link>
          </div>

          <div className="account_column">
            <div className="account_row">
              <div className="account_email">
                <p>{username}</p>
                <p>{email}</p>
                <p>Password: *****</p>
                {/* <p>Phone: {user.phone}</p> */}
              </div>

              <div className="account_email account_buttons">
                <p>
                  <Link
                    to="#"
                    className="edit_btn"
                    onClick={(e) => openNameModal(e, "change_name")}
                  >
                    Change Name
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="edit_btn"
                    onClick={(e) => openEmailModal(e, "change_email")}
                  >
                    Change Email
                  </Link>
                </p>
                <p>
                  <Link
                    to="#"
                    className="edit_btn"
                    onClick={(e) => openPassModal(e, "change_pass")}
                  >
                    Change Password
                  </Link>
                </p>
                {/* <p>
                  <Link
                    to="#"
                    className="edit_btn"
                    onClick={(e) => openPhoneModal(e, "change_phone")}
                  >
                    Change Phone
                  </Link>
                </p> */}
              </div>
            </div>
            <div className="divider1"></div>

            <div className="account_row">
              <div className="account_email">
                {/* <img
                  src="images/icinema_logo.png"
                  alt="logo"
                  className="account_icinema_logo"
                /> */}
                <p>45.01 iCinema credit</p>
                <p>Your account is paid until January 29, 2022.</p>
              </div>

              <div className="account_email account_buttons account_buttons_second">
                <p>
                  <Link to="/manage-payment-info" className="edit_btn">
                    Payment info
                  </Link>
                </p>
                <p>
                  <Link to="/billing-details" className="edit_btn">
                    Billing details
                  </Link>
                </p>
                {/* <p>
                  <Link to="/" className="edit_btn">
                    Change Password
                  </Link>
                </p>
                <p>
                  <Link to="/" className="edit_btn">
                    Change Phone
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="divider2"></div>

        <div className="account_info">
          <div className="membership_billing_text">
            <p>Plan Details</p>
            <Link
              to="/"
              className="cancel_membership cancel_membership_mbl"
              style={{ opacity: 0 }}
            >
              Cancel Membership
            </Link>
          </div>

          <div className="account_column account_column_plan_details">
            <div className="account_row">
              <div className="account_email">
                <p>{user.pricingPlan}</p>
                {/* <p>netflix@gmail.com</p>
                <p>Password: **********</p>
                <p>Phone: 01792383999</p> */}
              </div>

              <div className="account_email account_buttons">
                <p>
                  <Link to="/change-plan" className="edit_btn">
                    Change Plan
                  </Link>
                </p>
                {/* <p>
                  <Link to="/" className="edit_btn">
                    Change Email
                  </Link>
                </p>
                <p>
                  <Link to="/" className="edit_btn">
                    Change Password
                  </Link>
                </p>
                <p>
                  <Link to="/" className="edit_btn">
                    Change Phone
                  </Link>
                </p> */}
              </div>
            </div>
            <div className="divider1" style={{ opacity: 0 }}></div>
          </div>
        </div>
      </div>

      {/* modals name change */}
      <AnimatePresence exitBeforeEnter>
        {selectedModal && (
          <>
            <div
              className="blur_bg_account"
              onClick={() => setSelectedModal(null)}
            ></div>
            <motion.div
              className="change_name_modal"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 100,
              // }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <motion.p
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Change your name
              </motion.p>
              <motion.input
                type="text"
                className="change_name_input"
                placeholder="Your Name"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <motion.div
                className="change_name_btn_div"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="#"
                  className="change_name_btn"
                  onClick={(e) => changeName(e)}
                >
                  Change
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}

        {selectedModalEmail && (
          <>
            {/* modals email change */}
            <div
              className="blur_bg_account"
              onClick={() => setSelectedModalEmail(null)}
            ></div>
            <motion.div
              className="change_name_modal"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 100,
              // }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <motion.p
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Change your email
              </motion.p>
              <motion.input
                type="text"
                placeholder="Your Email"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.div
                className="change_name_btn_div"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="#"
                  className="change_name_btn"
                  onClick={(e) => changeEmail(e)}
                >
                  Change
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}

        {selectedModalPass && (
          <>
            {/* modals pass change */}
            <div
              className="blur_bg_account"
              onClick={() => setSelectedModalPass(null)}
            ></div>
            <motion.div
              className="change_name_modal"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 100,
              // }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <motion.p
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Change your password
              </motion.p>
              {/* <motion.input
                type="password"
                placeholder="Old Password"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              /> */}
              <motion.input
                type="password"
                placeholder="New Password"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <motion.input
                type="password"
                placeholder="Confirm Password"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              /> */}
              <motion.div
                className="change_name_btn_div"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="#"
                  className="change_name_btn"
                  onClick={(e) => changePass(e)}
                >
                  Change
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}

        {selectedModalPhone && (
          <>
            {/* modals phone change */}
            <div
              className="blur_bg_account"
              onClick={() => setSelectedModalPhone(null)}
            ></div>
            <motion.div
              className="change_name_modal"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 100,
              // }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <motion.p
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Change your phone
              </motion.p>
              <motion.input
                type="text"
                placeholder="Your Phone Number"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />

              <motion.div
                className="change_name_btn_div"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="#"
                  className="change_name_btn"
                  onClick={(e) => changePhone(e)}
                >
                  Change
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* <Footer /> */}
    </>
  );
};

export default Account;
