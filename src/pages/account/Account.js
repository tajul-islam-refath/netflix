import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./account.scss";

const Account = () => {
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
                <p>Password: **********</p>
                <p>Phone: 01792383999</p>
              </div>

              <div className="account_email">
                <p>
                  <Link to="/" className="edit_btn">
                    Change Name
                  </Link>
                </p>
                <p>
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
                <p>45.01 TL ICINEMA credit</p>
                <p>Your account is paid until January 29, 2022.</p>
              </div>

              <div className="account_email">
                <p>
                  <Link to="/" className="edit_btn">
                    Manage payment info
                  </Link>
                </p>
                <p>
                  <Link to="/" className="edit_btn">
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

              <div className="account_email">
                <p>
                  <Link to="/" className="edit_btn">
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

      {/* <Footer /> */}
    </>
  );
};

export default Account;
