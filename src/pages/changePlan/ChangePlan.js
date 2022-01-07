import React from "react";
import "./changePlan.scss";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChangePlan = () => {
  const cardCheckBasic = () => {
    document
      .querySelector(".basic_check_icon")
      .classList.add("active_change_plan_card_check_icon");
    document.querySelector(".basic_plan_card").style.border = "3px solid red";
    document
      .querySelector(".basic_plan_card")
      .style.setProperty("--main-color", "rgba(51, 55, 107, 0.733)");

    document
      .querySelector(".standard_check_icon")
      .classList.remove("active_change_plan_card_check_icon");
    document.querySelector(".standard_plan_card").style.border =
      "3px solid gray";
    document
      .querySelector(".standard_plan_card")
      .style.removeProperty("--main-color", "rgba(51, 55, 107, 0.733)");

    document
      .querySelector(".premium_check_icon")
      .classList.remove("active_change_plan_card_check_icon");
    document.querySelector(".premium_plan_card").style.border =
      "3px solid gray";
    document
      .querySelector(".premium_plan_card")
      .style.removeProperty("--main-color", "rgba(51, 55, 107, 0.733)");
  };

  const cardCheckStandard = () => {
    document
      .querySelector(".standard_check_icon")
      .classList.add("active_change_plan_card_check_icon");
    document.querySelector(".standard_plan_card").style.border =
      "3px solid red";
    document
      .querySelector(".standard_plan_card")
      .style.setProperty("--main-color", "rgba(51, 55, 107, 0.733)");

    document
      .querySelector(".basic_check_icon")
      .classList.remove("active_change_plan_card_check_icon");
    document.querySelector(".basic_plan_card").style.border = "3px solid gray";
    document
      .querySelector(".basic_plan_card")
      .style.removeProperty("--main-color", "rgba(51, 55, 107, 0.733)");

    document
      .querySelector(".premium_check_icon")
      .classList.remove("active_change_plan_card_check_icon");
    document.querySelector(".premium_plan_card").style.border =
      "3px solid gray";
    document
      .querySelector(".premium_plan_card")
      .style.removeProperty("--main-color", "rgba(51, 55, 107, 0.733)");
  };

  const cardCheckPremium = () => {
    document
      .querySelector(".premium_check_icon")
      .classList.add("active_change_plan_card_check_icon");
    document.querySelector(".premium_plan_card").style.border = "3px solid red";
    document
      .querySelector(".premium_plan_card")
      .style.setProperty("--main-color", "rgba(51, 55, 107, 0.733)");

    document
      .querySelector(".basic_check_icon")
      .classList.remove("active_change_plan_card_check_icon");
    document.querySelector(".basic_plan_card").style.border = "3px solid gray";
    document
      .querySelector(".basic_plan_card")
      .style.removeProperty("--main-color", "rgba(51, 55, 107, 0.733)");

    document
      .querySelector(".standard_check_icon")
      .classList.remove("active_change_plan_card_check_icon");
    document.querySelector(".standard_plan_card").style.border =
      "3px solid gray";
    document
      .querySelector(".standard_plan_card")
      .style.removeProperty("--main-color", "rgba(51, 55, 107, 0.733)");
  };
  return (
    <>
      <div className="change_plan_div">
        <h4>Change Streaming Plan</h4>

        <div
          className="change_plan_card basic_plan_card"
          onClick={() => cardCheckBasic()}
        >
          <BsCheckCircleFill className="change_plan_card_check_icon basic_check_icon" />
          <div className="basic_plan_card_inside_header">
            <p className="basic_text">Basic</p>
          </div>
          <div className="change_plan_card_inside">
            <p>
              Good video quality in SD (480p). Watch on any phone, tablet,
              computer or TV.
            </p>
            <p>26.99 TL/month</p>
          </div>
        </div>

        <div
          className="change_plan_card standard_plan_card"
          onClick={() => cardCheckStandard()}
        >
          <BsCheckCircleFill className="change_plan_card_check_icon standard_check_icon" />
          <div className="basic_plan_card_inside_header">
            <p>Standard</p>
          </div>
          <div className="change_plan_card_inside">
            <p>
              Great video quality in Full HD (1080p). Watch on any phone,
              tablet, computer or TV.
            </p>
            <p>40.99 TL/month</p>
          </div>
        </div>

        <div
          className="change_plan_card premium_plan_card"
          onClick={() => cardCheckPremium()}
        >
          <BsCheckCircleFill className="change_plan_card_check_icon premium_check_icon" />
          <div className="basic_plan_card_inside_header">
            <p>Premium</p>
          </div>
          <div className="change_plan_card_inside">
            <p>
              Our best video quality in Ultra HD (4K) and HDR. Watch on any
              phone, tablet, computer or TV.
            </p>
            <p>54.99 TL/month</p>
          </div>
        </div>

        <p className="change_plan_footer1">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
        </p>
        <p className="change_plan_footer2">
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>

        <div className="change_plan_buttons">
          <Link to="/account" className="change_plan_btn1">
            Go Back
          </Link>
          <Link to="#" className="change_plan_btn2">
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChangePlan;
