import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./details.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  InfoOutlined,
} from "@material-ui/icons";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ListModalSeries from "../../components/list/ListModalSeries";
import AppUrl from "../../classes/AppUrl";
import axios from "axios";
import { UserContext } from "../../context/userContext/UserContext";

const Details = ({ user, singleUser }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { pathname } = useLocation();

  //const last_url = pathname.substring(pathname.lastIndexOf("/") + 1);
  const navigate = useNavigate();
  const [last_url, setLastUrl] = useState(
    pathname.substring(pathname.lastIndexOf("/") + 1)
  );

  const gotodetail = (e, id) => {
    e.preventDefault();
    setLastUrl(id);
    navigate("/details/" + id);
  };

  const [addToList, setAddToList] = useState(false);
  const [addtoLike, setAddtoLike] = useState(false);
  const [addtoDislike, setAddtoDislike] = useState(false);

  const addToFav = async (id, myList, myListId) => {
    setAddToList(true);

    try {
      const res = await axios.put("/users/addmylist/" + id, myList, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      console.log(res);
      //setMyList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromFav = async (id, myList, myListId) => {
    try {
      const res = await axios.put("/users/removemylist/" + id, myList, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      console.log(res);
      //setMyList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //like
  const addToLike = async (id, myLike, myLikeId) => {
    setAddtoLike(true);
    setAddtoDislike(false);

    try {
      const res = await axios.put(
        "/users/addmylike/" + id,
        { movie_id: myLikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/like/" + mov._id,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/users/removemydislike/" + id,
        { movie_id: myLikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removedislike/" + mov._id,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromLike = async (id, myLike, myLikeId) => {
    setAddtoLike(false);

    try {
      const res = await axios.put(
        "/users/removemylike/" + id,
        { movie_id: myLikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removelike/" + mov._id,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  //dislike
  const addToDislike = async (id, myDislike, myDislikeId) => {
    setAddtoDislike(true);
    setAddtoLike(false);

    try {
      const res = await axios.put(
        "/users/addmydislike/" + id,
        { movie_id: myDislikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/dislike/" + mov._id,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/users/removemylike/" + id,
        { movie_id: myDislikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removelike/" + mov._id,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromDislike = async (id, myDislike, myDislikeId) => {
    setAddtoDislike(false);

    try {
      const res = await axios.put(
        "/users/removemydislike/" + id,
        { movie_id: myDislikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removedislike/" + mov._id,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/", {
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

  const [mov, setMov] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + last_url, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(res);
        setMov(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
    return () => {
      setMov([]); // This worked for me
    };
  }, [last_url]);

  const [single_mov, setSingleMov] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + selectedId, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(res);
        setSingleMov(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
    return () => {
      setSingleMov([]); // This worked for me
    };
  }, [selectedId]);

  const cw = [
    {
      title: "Venom",
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2JfL0KO049JlNtybXwdPFushYF1a4uHhkLu7kDt6MouWGU_BB_F2oKBjKvm-RgqhOtMkpsjz2eXDwJkKYrqYBnEDZ2.webp?r=93b",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWIzyfeVo1klpHI-18mcNXtaydIqHOUwG17ItUW2x-oSGgwqqGR_Wa4DXG8N5pUX0Ad0a7OjwHm5uw2TuyCYh3F2GVoaJThfrAw.webp?r=2ae",
      des: "A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers.",
      year: "2018",
      age: "16+",
      time: "1h 52m",
      director: "Ruben Fleischer",
      cast: "Andrew Garfield, Emma Stone",
      writer: "Ruben Fleischer",
      genre: "Sci-Fi, Exciting, Offbeat",
    },
    {
      title: "Man Of Steel",
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkIkzfTFHfadapfd_BF-G-K_UpmHk8fFq6Ds_dMyZ0QGOM1crvrSDN-Uc6D36OWrMi-zhJC9GvWx-D_1gduTUKTsRjp.webp?r=7d1",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1",
      des: "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.",
      year: "2013",
      age: "13+",
      time: "2h 22m",
      director: "Lauren Schmidt Hissrich",
      cast: "Henry Cavill, Anya Chalotra",
      writer: "Lauren Schmidt Hissrich",
      genre: "Sci-Fi, Exciting",
    },
    {
      title: "Matrix",
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQ61jRcb0vcHYHcnkdgWM-BDuifM-ET2c3ZJAIZ5zktBvsP9QrK39hsUzikUPNwsEa7zsyM3arZNFOsn1wEZLn6uQnU.webp?r=ce8",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABep0NjoVU9WhGEoaHUM4_eSWSKYIe875G1ryVR7pxjtPyaK4zzIJken8NLLogOQ_QRok9T11TRfUwqcHOzMIrERLKZj__ibqqzM.webp?r=432",
      des: "What is The Matrix? That question leads computer hacker Neo down a rabbit hole — and to the mind-blowing truth about the world as he knows it.",
      year: "1999",
      age: "18+",
      time: "2h 16m",
      director: "Dhruv",
      cast: "Keanu Reeves, Laurance",
      writer: "Dhruv",
      genre: "Martial Arts, Sci-Fi",
    },
    {
      title: "Singham",
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmiBxFUhsJ0r_EVRLSAW8kLzbu4kzx8QejcWekq5f1K-ElLctQy5y46O1waNeZlNIIOJEFUOQmZlNKmJVYKQSn0IZio.webp?r=457",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABR4zyfQMmaoMlWWMmorajHsbLCUCgKExHUAve6Djt_D_5nQe0AjJ0n4EYoVDEGwY0v2-vHStQCjGht9KwnwJzTSzcAue6Wb95mM.webp?r=633",
      des: "A police inspector kills himself after a powerful gangster frames him for corruption -- but soon the thug faces the full force of cop Bajirao Singham.",
      year: "2011",
      age: "16+",
      time: "2h 21m",
      director: "Farah Khan",
      cast: "Ajay, Kajal Agarwal",
      writer: "Farah Khan",
      genre: "Emotional, Action",
    },
    {
      title: "Godzilla",
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVE_ix7Cpy7bHaIw5SL_h7lff-vHpY9GQ-D4GJhLSmL8rtHFLaC_pg7hrIcAOQSRqS7TQb_jSbO8vd9fMx-NtLXVFhxV.webp?r=b5a",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXypfKZ3I8V0BoWbj4GclPkM24RuHPj4uvNqNJb2tTB9uVQpHKjIDCSx9CNfbN-L4T0ppWaTowiV8c3OO7zl3eupqlUCJWItJoI.webp?r=46d",
      des: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
      year: "2019",
      age: "13+",
      time: "2hr 11m",
      director: "Hwang Dong-hyuk",
      cast: "Lee Jung-jae, Park Hae-soo",
      writer: "Hwang Dong-hyuk",
      genre: "Sci-FI, Exciting",
    },
    {
      title: "Hulk",
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUL1vKw0qM1BUE5C-Am-_MeX050ZUhPrkCjIP7hff44ZZL9J_oaTBNrH8DVCmep_bS5l3hWewuJdreuvv7X92XQiUg4g.webp?r=2dc",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaiQy3hoEZ1QlZlu1mGKveI-vg81g3zyfpCtMRhA9E92uwLG7eDC9buGeoAP2qui-biwCueNxCzxVOlbiNW6tuyGpY--4Stgz7o.webp?r=e8a",
      des: "An experiment gone wrong turns Dr. Bruce Banner into a hulking green monster when he grows angry and makes him a target of the military.",
      year: "2008",
      age: "13+",
      time: "1h 52m",
      director: "Nonso",
      cast: "Nonso Anozie, Christian Convery",
      writer: "Nonso",
      genre: "Quirky, Heart Felt",
    },
  ];

  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        <div className="details_video">
          <video
            src={AppUrl.base_url + mov.trailer}
            autoPlay={false}
            controls
            loop={false}
            playsinline
          />
        </div>

        <div className="details_info">
          <p
            className="detals_info_title"
            data-aos="fade-right"
            data-aos-offset="0"
            // data-aos-delay={1 * 150}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {mov.title}
          </p>

          <div
            className="details_info_top"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <span className="details_info_year">{mov.year}</span>
            <span className="details_info_age">{mov.age}</span>
            <span className="details_info_time">{mov.time}</span>
          </div>

          <div className="details_info_bottom">
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              {mov.desc}
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="900"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span>Starring:</span> {mov.cast}
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1000"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span>Director:</span> {mov.director}
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span>Genre:</span> {mov.genre}
            </p>
          </div>

          <div className="details_btns">
            <Link to={"/watch/" + mov._id}>
              <PlayArrow
                className="details_play_btn details_btn list_item_play_icon"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="1400"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              />
            </Link>
            {singleUser.myList.find((elem) => {
              if (elem._id === mov._id) {
                return true;
              }
            }) ? (
              <>
                <BsCheck2
                  id={"details_remove_btn" + mov._id}
                  className="details_add_btn details_btn"
                  onClick={() => {
                    setAddToList(false);
                    removeFromFav(user._id, mov, mov._id);
                  }}
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="1500"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                />
              </>
            ) : (
              <>
                {addToList ? (
                  <>
                    <BsCheck2
                      id={"details_remove_btn" + mov._id}
                      className="details_add_btn details_btn"
                      onClick={() => {
                        setAddToList(false);
                        removeFromFav(user._id, mov, mov._id);
                      }}
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay="1500"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out"
                    />
                  </>
                ) : (
                  <>
                    <Add
                      id={"details_add_btn" + mov._id}
                      className="details_add_btn details_btn"
                      onClick={() => {
                        addToFav(user._id, mov, mov._id);
                        // setAddToList(true);
                        // updateUser({ myList: more_detail }, id, dispatch);
                      }}
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay="1500"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out"
                    />
                  </>
                )}
              </>
            )}
            {/* <Link to="#">
              <Add
                className="details_add_btn details_btn"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="1500"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              />
            </Link> */}
            {singleUser.myLike.find((elem) => {
              if (elem._id === mov._id) {
                return true;
              }
            }) ? (
              <>
                <AiFillLike
                  className="details_like_btn details_btn"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="1600"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  onClick={() => {
                    removeFromLike(user._id, mov, mov._id);
                  }}
                />
              </>
            ) : (
              <>
                {addtoLike ? (
                  <>
                    <AiFillLike
                      className="details_like_btn details_btn"
                      onClick={() => {
                        removeFromLike(user._id, mov, mov._id);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <ThumbUpAltOutlined
                      className="details_like_btn details_btn"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay="1600"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out"
                      onClick={() => {
                        addToLike(user._id, mov, mov._id);
                      }}
                    />
                  </>
                )}
              </>
            )}
            {/* <Link to="#"> */}
            {/* <ThumbUpAltOutlined
              className="details_like_btn details_btn"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1600"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            /> */}
            {/* </Link> */}
            {singleUser.myDislike.find((elem) => {
              if (elem._id === mov._id) {
                return true;
              }
            }) ? (
              <>
                <AiFillDislike
                  className="details_dislike_btn details_btn"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="1700"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  onClick={() => {
                    removeFromDislike(user._id, mov, mov._id);
                  }}
                />
              </>
            ) : (
              <>
                {addtoDislike ? (
                  <>
                    <AiFillDislike
                      className="details_dislike_btn details_btn"
                      onClick={() => {
                        removeFromDislike(user._id, mov, mov._id);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <ThumbDownOutlined
                      className="details_dislike_btn details_btn"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay="1700"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out"
                      onClick={() => {
                        addToDislike(user._id, mov, mov._id);
                      }}
                    />
                  </>
                )}
              </>
            )}
            {/* <Link to="#">
              <ThumbDownOutlined
                className="details_dislike_btn details_btn"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="1700"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              />
            </Link> */}
            <Link to="#">
              <HiOutlineDownload
                className="details_dislike_btn details_btn"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="1800"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              />
            </Link>
          </div>

          {mov.type === "Series" && (
            <ListModalSeries
              mov={movies}
              more_detail={mov}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          )}

          <div className="more_content">
            <p
              data-aos="fade-right"
              data-aos-offset="40"
              data-aos-delay="1000"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              More Like This
            </p>
            <div className="more_content_cards">
              {movies
                // eslint-disable-next-line array-callback-return
                .filter((m) => {
                  if (
                    mov.genre
                      .toLowerCase()

                      .includes(m.genre.toLowerCase())
                  ) {
                    return m;
                  }
                })
                .map((item, index) => (
                  <motion.div
                    className="more_content_card"
                    onClick={() => setSelectedId(item._id)}
                    key={item._id}
                  >
                    <img
                      src={AppUrl.base_url + item.imgSm}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-offset="0"
                      data-aos-delay={index * 100}
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out"
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        <AnimatePresence exitBeforeEnter>
          {selectedId && (
            <>
              <motion.div
                className="blur_bg"
                onClick={() => {
                  setSelectedId(null);
                  //   setStartVideo(false);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
              ></motion.div>
              <motion.div
                className="more_card_main"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
                exit={{ y: "100vh" }}
              >
                <motion.div className="more_card">
                  <motion.div
                    className="more_card_img"
                    // initial={{ x: "100vw" }}
                    // animate={{ x: 0 }}
                    // transition={{
                    //   duration: 1.2,
                    //   type: "spring",
                    //   stiffness: 80,
                    // }}
                  >
                    <img src={AppUrl.base_url + single_mov.imgSm} alt="" />
                  </motion.div>
                  <motion.div
                    className="more_card_info"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 40,
                    }}
                  >
                    <h4 className="more_card_info_title">{single_mov.title}</h4>
                    <div className="more_card_info_other">
                      <p className="more_card_info_year">{single_mov.year}</p>
                      <p className="more_card_info_age">{single_mov.age}</p>
                      <p className="more_card_info_time">{single_mov.time}</p>
                    </div>
                    <p className="more_card_info_des">{single_mov.desc}</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="more_card_info_play_div"
                  initial={{ y: "100vh" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 40,
                  }}
                >
                  <Link
                    to={"/watch/" + single_mov._id}
                    className="more_card_info_play_btn"
                  >
                    <PlayArrow className="more_card_info_play_icon list_item_play_icon" />
                    Play
                  </Link>

                  <Link
                    to="!#"
                    className="more_card_info_play_btn"
                    onClick={(e) => {
                      setSelectedId(null);
                      gotodetail(e, single_mov._id);
                    }}
                  >
                    <InfoOutlined className="more_card_info_play_icon" />
                    Details
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Details;
