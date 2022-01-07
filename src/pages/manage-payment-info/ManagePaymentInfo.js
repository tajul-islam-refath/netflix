import React from "react";
import "./manage-payment-info.scss";
import { GiPadlock } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const ManagePaymentInfo = () => {
  return (
    <>
      <div className="manage_payment_info_div">
        <GiPadlock className="manage_payment_info_lock_icon" />
        <div className="manage_payment_info_main">
          <h4>Manage Payment Info</h4>
          <p>
            Edit your payment details, add a backup, or switch your preferred
            payment method.
          </p>
          <p>Credit 45.01 TL</p>
          <p>Add a payment method for when your credit runs out.</p>
          <div className="manage_payment_info_main_btn_div">
            <Link to="/payment-picker" className="manage_payment_info_main_btn">
              <span>
                <AiOutlinePlus className="manage_payment_info_main_btn_plus_icon" />
              </span>
              Add Payment Method
            </Link>
            <Link
              to="/account"
              className="manage_payment_info_main_back_to_account"
            >
              Back to Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagePaymentInfo;
