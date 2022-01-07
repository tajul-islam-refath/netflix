import React from "react";
import "./payment-picker.scss";
import "../manage-payment-info/manage-payment-info.scss";
import { GiPadlock } from "react-icons/gi";
// import { AiOutlinePlus } from "react-icons/ai";
// import { MdArrowForwardIos } from "react-icons/md";

import { Link } from "react-router-dom";

const PaymentPicker = () => {
  return (
    <>
      <div className="manage_payment_info_div">
        <GiPadlock className="manage_payment_info_lock_icon" />
        <div className="manage_payment_info_main">
          <h4>Add Payment Information</h4>
          <p>
            Never miss a month. We'll only use your backup payment method if we
            can't process your main one.
          </p>

          <div className="manage_payment_info_main_btn_div">
            <Link
              to="/payment-picker"
              className="manage_payment_info_main_btn payment_picker_options"
            >
              {/* <span>
                <AiOutlinePlus className="manage_payment_info_main_btn_plus_icon" />
              </span> */}
              {/* bKash or Card */}
              <span>
                <img src="images/bkash_svg1.svg" alt="" />
              </span>
              <span>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
                  alt=""
                />
              </span>
              {/* <span>
                <MdArrowForwardIos className="payment_picker_arrow_icon" />
              </span> */}
            </Link>
            <Link
              to="/manage-payment-info"
              className="manage_payment_info_main_back_to_account"
            >
              Back to manage payment info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPicker;
