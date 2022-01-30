import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
//import { FiMoreHorizontal } from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import axios from "axios";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists } from "../../context/listContext/apiCalls";
import ListModalSeries from "../list/ListModalSeries";
import AppUrl from "../../classes/AppUrl";

export default function Featured({
  type,
  pic,
  title_pic,
  des,
  video,
  genre,
  cast,
  writer,
  director,
  age,
  time,
  year,
  index,
  selectTerm,
  setSelectTerm,
  movies,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [startVideo, setStartVideo] = useState(false);
  const [startHeroVideo, setStartHeroVideo] = useState(false);
  const [endHeroVideo, setEndHeroVideo] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const [volume, setVolume] = useState(false);
  const [volume_detail, setVolumeDetail] = useState(false);

  const { lists, dispatch: listDispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(listDispatch);
  }, [listDispatch]);

  const navigate = useNavigate();

  if (selectedId !== null) {
    setTimeout(() => {
      setStartVideo(true);
    }, 4000);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => setStartHeroVideo(false));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", () => setStartHeroVideo(false));
    };
  }, [y]);

  useEffect(() => {
    if (endHeroVideo === false) {
      setTimeout(() => {
        setStartHeroVideo(true);
      }, 3000);
    }

    // document
    //   .getElementById("hero_video")
    //   .addEventListener("ended", myHandler, false);
    // function myHandler(e) {
    //   setStartHeroVideo(false);
    // }
  }, [endHeroVideo]);

  const [mov, setMov] = useState([]);

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
        setMov(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
    return () => {
      setMov([]); // This worked for me
    };
  }, []);

  const offVolume = () => {
    setVolume(false);
  };

  const onVolume = () => {
    setVolume(true);
  };

  const offVolumeDetail = () => {
    setVolumeDetail(false);
  };

  const onVolumeDetail = () => {
    setVolumeDetail(true);
  };

  //const [movies, setMovies] = useState([]);
  //const [onemovie, setOneMovie] = useState([]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       const res = await axios.get("movies/", {
  //         headers: {
  //           token:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2M1MWJkZmYzMmVjNmVlNjNjMTk3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTIyNDU5NywiZXhwIjoxNjQxNjU2NTk3fQ.hSQAfsFOZ0nNhdZuoMrsWO2uooaILtyrEosDrt2vgE4",
  //         },
  //       });
  //       //console.log(res);
  //       setMovies(res.data[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMovies();
  // }, []);

  const playNowAnimate = () => {
    document.querySelector(".play").classList.add("animate__pulse");
  };

  const moreInfoAnimate = () => {
    document.querySelector(".more").classList.add("animate__pulse");
  };

  const playNowAnimateClose = () => {
    document.querySelector(".play").classList.remove("animate__pulse");
  };

  const moreInfoAnimateClose = () => {
    document.querySelector(".more").classList.remove("animate__pulse");
  };

  const startScroll = () => {
    document.querySelector("body").style.overflowY = "auto";
  };

  const stopScroll = () => {
    if (window.innerWidth > 990) {
      document.querySelector("body").style.overflow = "hidden";
    }
  };

  const watch_movie = (id) => {
    navigate("/watch/" + id);
    startScroll();
  };

  const changeSelect = (e) => {
    setSelectTerm(e.target.value);
    console.log(selectTerm);
  };

  const more_like = [
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVuAS5Lg_qyfVrk7EFFXbXFrz8UqPE3mnY36OlbtIQ9VUTfboRkMr_xRsS2A6E57Oj-Prs93Q0gk2ivR3_IxaiKF7zPBFMxxVHY.webp?r=897",
      des: "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.",
      year: "2014",
      age: "13+",
      time: "2h 21m",
      director: "Marc Webb",
      cast: "Andrew Garfield, Emma Stone",
      writer: "Roberto Orci",
      genre: "Suspenseful, Exciting",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095",
      des: "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.",
      year: "2021",
      age: "18+",
      time: "2 Seasons",
      director: "Lauren Schmidt Hissrich",
      cast: "Henry Cavill, Anya Chalotra",
      writer: "Lauren Schmidt Hissrich",
      genre: "Fantasy TV Shows, TV Shows Based on Books",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-1LCLK7T5DCx0eQXvqjHuMTOAm8AzDi3qy84LgIvpFjRihmb0gUw5LUWPqsl6W25F1jIMzCi6OFuEcym-I7_6J6uTDJwHnV7kW5qsLLb5ZMPwpCTgMz9Az8tXWfg.jpg?r=7de",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZLAQFmue4r5jLuazQz84LTKqWPXGrj2UHvKvOHdB0eSFPTX-ZGxc7xZS9euFyJj6iSB5u4hXp2nLLOiToUyT_PcEJlYqXYpgzfMHdcya7Ep5pG_lLXZNxtE2Rmg58I1NIgvaXMDPGrGwTlneYJL6STbE5xz3tlbWPO3bZ5v05G6.webp?r=454",
      des: "When Dhruv is unable to get out of a work commitment on Kavya’s 30th birthday, she spends the occasion in her own company, exploring and soul-searching.",
      year: "2021",
      age: "16+",
      time: "4 seasons",
      director: "Dhruv",
      cast: "Mithila Palkar, Dhruv Sehgal",
      writer: "Dhruv",
      genre: "Romantic TV Dramas, Romantic TV Comedies",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb12t1Hiq8L4MPDkW8mAZUqQGTuL7l6XSGJTr8-h7H88Xqr1jfXsS_PvdtvFnmhJo5-to8Ram3BuHbsEYH_U7rRxpTZG.webp?r=9d5",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrrwqIbQm8Q_uxH8cmIn16cVimzbvsz0ehOAmy91wrvmfgPzlM8ikCsvl2mZsN6uuQnYcVFlIJOE_fatuw8bjfMoB2UhYAj7Hk.webp?r=aef",
      des: "Reincarnated 30 years after being killed in a suspicious on-set fire, a small-time actor is determined to punish the person who ignited the blaze.",
      year: "2007",
      age: "16+",
      time: "2h 48m",
      director: "Farah Khan",
      cast: "Shah Rukh Khan, Deepika Padukone",
      writer: "Farah Khan",
      genre: "Emotional, Romantic, Comedy",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBmbY-sgZUJpNW-vdJt_V5cEwl7hWAebY7APIjeb2Xu7f9EydFEaXEa6Z8NO0lryqWL6uhSiy_X7kul2tmNf0zK0LHawWM71CddrJDxAs0Og5RW1aD904ReaAarjoHuK7_ZBxzraD_QQvDxMMXIuwCGrN2jVNvzZsnysD42imckOSjz6u5zxhas.jpg?r=f9b",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeqj3h6VrkDQaxLJTRt43PYyghdpOyyhYumNhqF5ot_ZOhFUEmD0FTcjtENgBmU3_B4J1bYgPhehejNWphntVJThFHX_HwWkHDFXx_osIUsbC5101TY1njMu2io0VbCQpLqaeCotANvMQWT18xxSD71P5w2pkjNAv0DeMQyVvEoF.webp?r=0e9",
      des: "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
      year: "2021",
      age: "18+",
      time: "1 Season",
      director: "Hwang Dong-hyuk",
      cast: "Lee Jung-jae, Park Hae-soo",
      writer: "Hwang Dong-hyuk",
      genre: "Thriller, Drama",
    },
    {
      pic: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzkkv7oCtXAsjyTApW0NF145ECSShki-GxjJ0tUGYNkvroBnoEwBRqt3RnkBRVl_97Ha3ckPLo4R3Gh7w8onh9H99OHgPJecBEez8cCm5G0dNP2hg1Zc7K0V0226w.jpg?r=71a",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title_pic:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeKYkBY6xRKlWoLXr6VDOpjqOtcwvgT2Q4pXi9DuUix4t6R89iWlmjr2v2kv9YMKfRStvJ8JEuu7LwP_ptUbX8glgWEFTNN90v4-eAUKXQd05vOLzW6_3miFiyyGnNmrlVW3ctVLOHQgPtta90cJmxmCRUBV8T8390JLDaHH8xu1.webp?r=814",
      des: "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
      year: "2021",
      age: "16+",
      time: "1 Season",
      director: "Nonso",
      cast: "Nonso Anozie, Christian Convery",
      writer: "Nonso",
      genre: "Quirky, Heart Felt",
    },
  ];

  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            {/* <span>{type === "movie" ? "Movies" : "Series"}</span> */}
            <select name="genre" id="genre" onChange={(e) => changeSelect(e)}>
              <option value={""}>
                {type === "movie" ? "Select a category" : "Select a category"}
              </option>
              {type === "movie"
                ? lists
                    // eslint-disable-next-line array-callback-return
                    .filter((i) => {
                      if (i.type === "Movies") {
                        return i;
                      }
                    })
                    .map((item) => (
                      <option value={item._id}>{item.title}</option>
                    ))
                : lists
                    // eslint-disable-next-line array-callback-return
                    .filter((i) => {
                      if (i.type === "Series") {
                        return i;
                      }
                    })
                    .map((item) => (
                      <option value={item._id}>{item.title}</option>
                    ))}
              {/* <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option> */}
            </select>
          </div>
        )}

        {startHeroVideo ? (
          <>
            <video
              src={AppUrl.base_url + movies.trailer}
              autoPlay={true}
              id="hero_video"
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
              onEnded={() => {
                setStartHeroVideo(false);
                setEndHeroVideo(true);
              }}
              muted={volume}
            />
          </>
        ) : (
          <>
            <img
              src={AppUrl.base_url + movies.img}
              alt=""
              className="hero_img"
            />
          </>
        )}

        <div
          className="volume"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {volume ? (
            <>
              <FiVolumeX
                className="featured_volume"
                onClick={() => offVolume()}
              />
              {/* <FiVolume2
                className="featured_volume"
                onClick={() => offVolume()}
              /> */}
            </>
          ) : (
            <>
              <FiVolume2
                className="featured_volume"
                onClick={() => onVolume()}
              />
              {/* <FiVolumeX
                className="featured_volume"
                onClick={() => onVolume()}
              /> */}
            </>
          )}
        </div>

        <div className="info">
          <img
            src={AppUrl.base_url + movies.imgTitle}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <span
            className="desc"
            data-aos="fade-up"
            data-aos-delay="550"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {movies.desc}
          </span>
          <div
            className="buttons"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Link
              to={"/watch/" + movies._id}
              style={{ textDecoration: "none" }}
            >
              <button
                className="play animate__animated"
                onMouseEnter={playNowAnimate}
                onMouseLeave={playNowAnimateClose}
              >
                <PlayArrow className="play_icon " />
                <span>Play</span>
              </button>
            </Link>
            <button
              className="more animate__animated"
              onMouseEnter={moreInfoAnimate}
              onMouseLeave={moreInfoAnimateClose}
              // layoutId={index}
              onClick={() => {
                setSelectedId(index);
                stopScroll();
              }}
            >
              <InfoOutlined className="info_icon" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {window.innerWidth <= 990 ? (
        <>
          <AnimatePresence exitBeforeEnter>
            {selectedId && (
              <>
                <motion.div
                  className="blur_bg"
                  onClick={() => {
                    setSelectedId(null);
                    setStartVideo(false);
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
                      <img src={AppUrl.base_url + movies.img} alt="" />
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
                      <h4 className="more_card_info_title">{movies.title}</h4>
                      <div className="more_card_info_other">
                        <p className="more_card_info_year">{movies.year}</p>
                        <p className="more_card_info_age">{movies.age}</p>
                        <p className="more_card_info_time">{movies.time}</p>
                      </div>
                      <p className="more_card_info_des">{movies.desc}</p>
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
                      to={"/watch/" + movies._id}
                      className="more_card_info_play_btn"
                    >
                      <PlayArrow className="more_card_info_play_icon " />
                      Play
                    </Link>

                    <Link
                      to={"/details/" + selectedId}
                      className="more_card_info_play_btn"
                    >
                      <InfoOutlined className="more_card_info_play_icon" />
                      Details
                    </Link>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <AnimatePresence exitBeforeEnter>
            {selectedId && (
              <>
                <motion.div
                  className="blur_bg"
                  onClick={() => {
                    setSelectedId(null);
                    setStartVideo(false);
                    startScroll();
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                ></motion.div>

                <motion.div
                  className="more_modal"
                  initial={{ y: "-100vh" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                  exit={{ y: "-100vh" }}
                  // layoutId={selectedId}
                >
                  {startVideo ? (
                    <>
                      <video
                        src={AppUrl.base_url + movies.trailer}
                        autoPlay={true}
                        loop
                        style={{
                          width: "55vw",
                          height: "28vw",
                          objectFit: "cover",
                        }}
                        muted={volume_detail}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={AppUrl.base_url + movies.img}
                        alt=""
                        className="more_modal_img"
                      />
                    </>
                  )}

                  <motion.img
                    src={AppUrl.base_url + movies.imgTitle}
                    alt=""
                    className="more_title_image"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    exit={{ y: 100, opacity: 0 }}
                  />

                  <motion.div
                    className="more_modal_icons"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    exit={{ y: 100, opacity: 0 }}
                  >
                    <Link
                      to={"/watch/" + movies._id}
                      onClick={() => startScroll()}
                    >
                      <PlayArrow className="more_modal_icon list_item_play_icon" />
                    </Link>
                    <Add className="more_modal_icon" />
                    <ThumbUpAltOutlined className="more_modal_icon" />
                    <ThumbDownOutlined className="more_modal_icon" />
                    <HiOutlineDownload className="more_modal_icon" />
                    {volume_detail ? (
                      <>
                        <FiVolumeX
                          className="more_modal_icon"
                          onClick={offVolumeDetail}
                        />
                      </>
                    ) : (
                      <>
                        <FiVolume2
                          className="more_modal_icon"
                          onClick={onVolumeDetail}
                        />
                      </>
                    )}

                    {/* <FiMoreHorizontal className="icon" /> */}
                  </motion.div>

                  <motion.div className="more_modal_cross">
                    <FaTimesCircle
                      className="more_modal_cross_icon"
                      onClick={() => {
                        setSelectedId(null);
                        setStartVideo(false);
                        startScroll();
                      }}
                    />
                  </motion.div>

                  <motion.div className="more_modal_info">
                    <motion.div
                      className="more_modal_info_left"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      exit={{ x: -100, opacity: 0 }}
                    >
                      <motion.div className="more_modal_itemInfoTop">
                        <motion.span>{movies.year}</motion.span>
                        <motion.span className="more_modal_limit">
                          {movies.age}
                        </motion.span>
                        <motion.span>{movies.time}</motion.span>
                      </motion.div>
                      <motion.div className="more_modal_iteminfo_des">
                        {movies.desc}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="more_modal_info_right"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      exit={{ x: 100, opacity: 0 }}
                    >
                      <motion.div className="more_modal_info_right_director">
                        <motion.p>
                          <motion.span>Director:</motion.span> {movies.director}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_cast">
                        <motion.p>
                          <motion.span>Cast:</motion.span> {movies.cast}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_writer">
                        <motion.p>
                          <motion.span>Writer:</motion.span> {movies.writer}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_genres">
                        <motion.p>
                          <motion.span>Genres:</motion.span> {movies.genre}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {movies.type === "Series" && (
                    <ListModalSeries
                      mov={movies}
                      more_detail={movies}
                      selectedId={selectedId}
                      setSelectedId={setSelectedId}
                    />
                  )}

                  <div className="more_like_div">
                    <motion.p
                      className="more_like_text"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      More Like This
                    </motion.p>
                    <motion.div
                      className="more_like_card_div"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {mov
                        // eslint-disable-next-line array-callback-return
                        .filter((m) => {
                          if (
                            movies.genre
                              .toLowerCase()

                              .includes(m.genre.toLowerCase())
                          ) {
                            return m;
                          }
                        })
                        .map((item, index) => (
                          <motion.div
                            key={item._id}
                            className="more_like_card"
                            onClick={() => watch_movie(item._id)}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              duration: 0.5,
                              type: "spring",
                              stiffness: 160,
                            }}
                          >
                            <div className="more_like_img_div">
                              <img
                                src={AppUrl.base_url + item.imgSm}
                                alt=""
                                className="more_like_img"
                              />
                              <Link to={"/watch/" + item._id}>
                                <PlayArrow className="more_like_play_btn list_item_play_icon" />
                              </Link>
                            </div>
                            <div className="more_like_info">
                              <div className="more_like_info_top">
                                <div>
                                  <span>{item.year}</span>
                                  <span className="more_like_limit">
                                    {item.age}
                                  </span>
                                  <span>{item.time}</span>
                                </div>
                                <Add className="more_like_add_icon" />
                              </div>
                              <div className="more_like_info_bottom">
                                {item.desc.substring(0, 142)}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
