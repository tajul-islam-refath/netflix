import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchbar, setSearchbar] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const searchbarActive = (e) => {
    e.stopPropagation();
    setSearchbar(!searchbar);
    document.getElementById("search_bar").focus();
  };

  document.onclick = () => {
    setSearchbar(false);
  };

  useEffect(() => {
    document.querySelector(".options").style.pointerEvents = "none";
    document.querySelector(".notifications").style.pointerEvents = "none";
  }, []);

  const closeOption = () => {
    // setTimeout(function () {
    //   document.querySelector(".options").style.visibility = "hidden";
    // }, 400);
    document.querySelector(".options").style.pointerEvents = "none";
  };

  const openOption = () => {
    // document.querySelector(".options").style.visibility = "visible";
    // document.querySelector(".options").style.transition = "0.5s";
    document.querySelector(".options").style.pointerEvents = "auto";
  };

  const closeNoti = () => {
    // setTimeout(function () {
    //   document.querySelector(".options").style.visibility = "hidden";
    // }, 400);
    document.querySelector(".notifications").style.pointerEvents = "none";
  };

  const openNoti = () => {
    // document.querySelector(".options").style.visibility = "visible";
    // document.querySelector(".options").style.transition = "0.5s";
    document.querySelector(".notifications").style.pointerEvents = "auto";
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/">
            <img src="images/icinema_logo.png" alt="logo" />
          </Link>
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="search_icon" onClick={(e) => searchbarActive(e)} />
          <input
            type="text"
            className={searchbar ? "search_bar_active" : "search_bar"}
            id="search_bar"
            placeholder="Search by Movie/Series"
            onClick={(e) => e.stopPropagation()}
          />
          {/* <span>KID</span> */}
          <div
            className="noti"
            onMouseLeave={closeNoti}
            onMouseEnter={openNoti}
          >
            <Notifications className="icon" />
            <div className="notifications">
              <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABalHHD1Gt_H5YZ_RyeJSkkOjRBvGtMI-6kXn0AGx00Z_boCVoE8KRaZJxIL36-r6mtXKPi262TkL997GVDFkApoPJn9z.webp?r=76a"
                    alt="notification_pic"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat ratione atque dolorum cupiditate impedit
                  </p>
                </div>
              </span>
              <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABalHHD1Gt_H5YZ_RyeJSkkOjRBvGtMI-6kXn0AGx00Z_boCVoE8KRaZJxIL36-r6mtXKPi262TkL997GVDFkApoPJn9z.webp?r=76a"
                    alt="notification_pic"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat ratione atque dolorum cupiditate impedit
                  </p>
                </div>
              </span>
              <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABalHHD1Gt_H5YZ_RyeJSkkOjRBvGtMI-6kXn0AGx00Z_boCVoE8KRaZJxIL36-r6mtXKPi262TkL997GVDFkApoPJn9z.webp?r=76a"
                    alt="notification_pic"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat ratione atque dolorum cupiditate impedit
                  </p>
                </div>
              </span>
            </div>
          </div>

          <div
            className="profile"
            onMouseLeave={closeOption}
            onMouseEnter={openOption}
          >
            <img
              className="user_small_img"
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <ArrowDropDown className="arrow_icon" />
            <div className="options">
              <span>Account </span>
              <span>Help Center</span>
              <span>Sign out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
