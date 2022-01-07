import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./account.scss";
import { AnimatePresence, motion } from "framer-motion";
import swal from "sweetalert";

const Account = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [selectedModalEmail, setSelectedModalEmail] = useState(null);
  const [selectedModalPass, setSelectedModalPass] = useState(null);
  const [selectedModalPhone, setSelectedModalPhone] = useState(null);

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

  const openPhoneModal = (e, phone) => {
    e.preventDefault();
    setSelectedModalPhone(phone);
  };

  const changeName = (e) => {
    e.preventDefault();
    setSelectedModal(null);
    swal({
      title: "Congrats!",
      text: "Your name has been changed!",
      icon: "success",
    });
  };
  const changeEmail = (e) => {
    e.preventDefault();
    setSelectedModalEmail(null);
    swal({
      title: "Congrats!",
      text: "Your email has been changed!",
      icon: "success",
    });
  };
  const changePass = (e) => {
    e.preventDefault();
    setSelectedModalPass(null);
    swal({
      title: "Congrats!",
      text: "Your password has been changed!",
      icon: "success",
    });
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
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="image_account"
          />
          <p>Member since June 2021</p>
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
                <p>Netflix</p>
                <p>netflix@gmail.com</p>
                <p>Password: *****</p>
                <p>Phone: 01792383999</p>
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
                <p>
                  <Link
                    to="#"
                    className="edit_btn"
                    onClick={(e) => openPhoneModal(e, "change_phone")}
                  >
                    Change Phone
                  </Link>
                </p>
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
                <p>Premium</p>
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
              <motion.input
                type="password"
                placeholder="Old Password"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.input
                type="password"
                placeholder="New Password"
                className="change_name_input"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.input
                type="password"
                placeholder="Confirm Password"
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
