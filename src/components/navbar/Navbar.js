import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  //const [notiOpen, setNotiOpen] = useState(false);

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
    document.querySelector(".notifications").style.opacity = 0;
    // setNotiOpen(false);
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

  // const toggleNoti = () => {
  //   setNotiOpen(!notiOpen);

  //   if (notiOpen === true) {
  //     document.querySelector(".notifications").style.pointerEvents = "auto";
  //     document
  //       .querySelector(".notifications")
  //       .classList.add("notifications_hover");
  //   } else {
  //     document.querySelector(".notifications").style.pointerEvents = "none";
  //     document
  //       .querySelector(".notifications")
  //       .classList.remove("notifications_hover");
  //   }
  // };

  const closeNoti = () => {
    // setTimeout(function () {
    //   document.querySelector(".options").style.visibility = "hidden";
    // }, 400);
    document.querySelector(".notifications").style.opacity = 0;
    document.querySelector(".notifications").style.pointerEvents = "none";
  };

  const openNoti = () => {
    // document.querySelector(".options").style.visibility = "visible";
    // document.querySelector(".options").style.transition = "0.5s";
    document.querySelector(".notifications").style.opacity = 1;
    document.querySelector(".notifications").style.pointerEvents = "auto";
  };

  const homeAnimate = () => {
    document.querySelector(".homes").classList.add("animate__pulse");
  };
  const homeAnimateClose = () => {
    document.querySelector(".homes").classList.remove("animate__pulse");
  };

  const seriesAnimate = () => {
    document.querySelector(".series").classList.add("animate__pulse");
  };
  const seriesAnimateClose = () => {
    document.querySelector(".series").classList.remove("animate__pulse");
  };

  const moviesAnimate = () => {
    document.querySelector(".movies").classList.add("animate__pulse");
  };
  const moviesAnimateClose = () => {
    document.querySelector(".movies").classList.remove("animate__pulse");
  };

  const popularAnimate = () => {
    document.querySelector(".popular").classList.add("animate__pulse");
  };
  const popularAnimateClose = () => {
    document.querySelector(".popular").classList.remove("animate__pulse");
  };

  const mylistAnimate = () => {
    document.querySelector(".mylists").classList.add("animate__pulse");
  };
  const mylistAnimateClose = () => {
    document.querySelector(".mylists").classList.remove("animate__pulse");
  };

  const searchbarAnimate = () => {
    document.querySelector(".search_icon").classList.add("animate__pulse");
  };
  const searchbarAnimateClose = () => {
    document.querySelector(".search_icon").classList.remove("animate__pulse");
  };

  const notiAnimate = () => {
    document.querySelector(".noti_icon").classList.add("animate__swing");
  };
  const notiAnimateClose = () => {
    document.querySelector(".noti_icon").classList.remove("animate__swing");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/browse" className="navbar_logo">
            <img src="images/icinema_logo.png" alt="logo" />
            <span className="logo_text">iCinema</span>
          </Link>
          <Link
            className="navbar_left_link animate__animated homes"
            to="/browse"
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={homeAnimate}
            onMouseLeave={homeAnimateClose}
          >
            <span>Home</span>
          </Link>
          <Link
            className="navbar_left_link animate__animated series"
            to="/series"
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={seriesAnimate}
            onMouseLeave={seriesAnimateClose}
          >
            <span>Series</span>
          </Link>
          <Link
            className="navbar_left_link animate__animated movies"
            to="/movies"
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={moviesAnimate}
            onMouseLeave={moviesAnimateClose}
          >
            <span>Movies</span>
          </Link>
          <Link
            className="navbar_left_link animate__animated popular"
            to="/popular"
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={popularAnimate}
            onMouseLeave={popularAnimateClose}
          >
            <span>New and Popular</span>
          </Link>
          <Link
            className="navbar_left_link animate__animated mylists"
            to="/my-list"
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={mylistAnimate}
            onMouseLeave={mylistAnimateClose}
          >
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search
            className="search_icon animate__animated"
            onClick={(e) => searchbarActive(e)}
            onMouseEnter={searchbarAnimate}
            onMouseLeave={searchbarAnimateClose}
          />
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
            <Notifications
              className="icon animate__animated noti_icon"
              onMouseEnter={notiAnimate}
              onMouseLeave={notiAnimateClose}
            />
            <div className="notifications">
              <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
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
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
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
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
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
              src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
              alt=""
            />
            <ArrowDropDown className="arrow_icon" />
            <div className="options">
              <span>
                <Link
                  to="/account"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Account{" "}
                </Link>
              </span>
              {/* <span>Help Center</span> */}

              <span>
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign out
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
