import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
//import { MovieContext } from "../../context/movieContext/MovieContext";
//import { getMovies } from "../../context/movieContext/apiCalls";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import ListModal from "../list/ListModal";

const Navbar = ({
  searchTerms,
  setSearchTerms,
  searchPlaceHolder,
  setSearchPlaceHolder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);

  const navigate = useNavigate();

  // const [searchPlaceHolder, setSearchPlaceHolder] = useState("");

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname === "/music") {
  //     setSearchPlaceHolder("Search by Music");
  //   } else {
  //     setSearchPlaceHolder("Search by Movie/Series");
  //   }
  // }, [pathname]);

  // useEffect(() => {
  //   setSearchTerm(searchTerm);
  // }, [searchTerm]);

  const searchMovie = (e) => {
    setSearchTerms(e.target.value);
    navigate("/search");
    console.log(searchTerms);
    // if (searchTerm !== "") {
    //   navigate("/search");
    // } else {
    //   navigate(-1);
    // }
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [selectedId, setSelectedId] = useState(null);
  const [startVideo, setStartVideo] = useState(false);
  const [more_detail, setMoreDetail] = useState(null);

  const openScroll = () => {
    document.querySelector("body").style.overflowY = "auto";
  };

  if (selectedId !== null) {
    setTimeout(() => {
      setStartVideo(true);
    }, 4000);
  }

  // const openModal = () => {
  //   setSelectedId(item_id);
  //   setMoreDetail(info);

  //   document.querySelector("body").style.overflow = "hidden";
  // };

  const { dispatch } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(res);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
    return () => {
      setMovies([]); // This worked for me
    };
  }, []);

  const signOut = (e) => {
    e.preventDefault();

    dispatch(logout());
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
    // document.querySelector(".notifications").style.opacity = 0;
    setNotiOpen(true);
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

  // const closeNoti = () => {

  //   document.querySelector(".notifications").style.opacity = 0;
  //   document.querySelector(".notifications").style.pointerEvents = "none";
  // };

  const openNoti = (e) => {
    // document.querySelector(".options").style.visibility = "visible";
    // document.querySelector(".options").style.transition = "0.5s";
    e.stopPropagation();
    setNotiOpen(!notiOpen);

    if (notiOpen === true) {
      document
        .querySelector(".notifications")
        .classList.add("notifications_active");
      document.querySelector(".noti_icon").classList.add("noti_icon_red");
      document.querySelector(".notifications").style.opacity = 1;
      document.querySelector(".notifications").style.pointerEvents = "auto";
      document.querySelector("body").addEventListener("click", () => {
        document
          .querySelector(".notifications")
          .classList.remove("notifications_active");
        document.querySelector(".noti_icon").classList.remove("noti_icon_red");
        document.querySelector(".notifications").style.opacity = 0;
        document.querySelector(".notifications").style.pointerEvents = "none";
        if (window.innerWidth <= 990) {
          document.querySelector("body").style.overflowY = "auto";
        }
        setNotiOpen(true);
      });
      if (window.innerWidth <= 990) {
        document.querySelector("body").style.overflowY = "hidden";
      }
    } else {
      document
        .querySelector(".notifications")
        .classList.remove("notifications_active");
      document.querySelector(".noti_icon").classList.remove("noti_icon_red");
      document.querySelector(".notifications").style.opacity = 0;
      document.querySelector(".notifications").style.pointerEvents = "none";
      if (window.innerWidth <= 990) {
        document.querySelector("body").style.overflowY = "auto";
      }
    }
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

  const musicAnimate = () => {
    document.querySelector(".music").classList.add("animate__pulse");
  };
  const musicAnimateClose = () => {
    document.querySelector(".music").classList.remove("animate__pulse");
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
    <>
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
            <Link
              className="navbar_left_link animate__animated music"
              to="/music"
              style={{ textDecoration: "none", color: "white" }}
              onMouseEnter={musicAnimate}
              onMouseLeave={musicAnimateClose}
            >
              <span>Music</span>
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
              placeholder={searchPlaceHolder}
              autoComplete={"off"}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => searchMovie(e)}
            />
            {/* <span>KID</span> */}

            <div
              className="noti"
              // onMouseLeave={closeNoti}
              // onMouseEnter={openNoti}
              onClick={(e) => openNoti(e)}
            >
              <Notifications
                className="icon animate__animated noti_icon"
                onMouseEnter={notiAnimate}
                onMouseLeave={notiAnimateClose}
              />
              <div className="notifications">
                {movies
                  .filter((val) => val.type !== "Music")
                  .slice(0, 10)
                  .map((item, index) => (
                    <span
                      key={item._id}
                      onClick={() => {
                        setSelectedId(item._id);
                        setMoreDetail(item);
                        document.querySelector("body").style.overflow =
                          "hidden";
                        //console.log(item);
                      }}
                    >
                      <div className="noti_row" key={item._id}>
                        <img
                          src={AppUrl.base_url + item.imgSm}
                          alt="notification_pic"
                        />
                        <div className="noti_des">
                          <p>New Arrival</p>
                          <p>{item.title}</p>
                          <p>{item.createdAt.substr(0, 10)}</p>
                        </div>
                      </div>
                    </span>
                  ))}
                {/* <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
                    alt="notification_pic"
                  />
                  <div className="noti_des">
                    <p>New Arrival</p>
                    <p>Superman</p>
                    <p>2020-02-02</p>
                  </div>
                </div>
              </span>
              <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
                    alt="notification_pic"
                  />
                  <div className="noti_des">
                    <p>New Arrival</p>
                    <p>Superman</p>
                    <p>2020-02-02</p>
                  </div>
                </div>
              </span>
              <span>
                <div className="noti_row">
                  <img
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a"
                    alt="notification_pic"
                  />
                  <div className="noti_des">
                    <p>New Arrival</p>
                    <p>Superman</p>
                    <p>2020-02-02</p>
                  </div>
                </div>
              </span> */}
              </div>
            </div>

            <div
              className="profile"
              onMouseLeave={closeOption}
              onMouseEnter={openOption}
            >
              <img className="user_small_img" src="images/user.svg" alt="" />
              <ArrowDropDown className="arrow_icon" />
              <div className="options">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "0px",
                    fontSize: "16px",
                    backgroundColor: "#e72626",
                    padding: "10px 0px",
                  }}
                >
                  {JSON.parse(localStorage.getItem("user")).username}
                </div>
                {/* <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              /> */}
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
                    to="/my-downloads"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    My Downloads{" "}
                  </Link>
                </span>

                <span>
                  <Link
                    to="#"
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={(e) => signOut(e)}
                  >
                    Sign out
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListModal
        // key={selectedId}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        more_detail={more_detail}
        startVideo={startVideo}
        setStartVideo={setStartVideo}
        openScroll={openScroll}
      />
    </>
  );
};

export default Navbar;
