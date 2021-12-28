import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
//import { FiMoreHorizontal } from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";

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
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [startVideo, setStartVideo] = useState(false);
  const [startHeroVideo, setStartHeroVideo] = useState(false);
  const [endHeroVideo, setEndHeroVideo] = useState(false);
  const [y, setY] = useState(window.scrollY);

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

  const watch_movie = () => {
    navigate("/watch/" + 1);
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
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}

        {startHeroVideo ? (
          <>
            <video
              src={video}
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
            />
          </>
        ) : (
          <>
            <img src={pic} alt="" className="hero_img" />
          </>
        )}

        <div className="info">
          <img
            src={title_pic}
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
            {des}
          </span>
          <div
            className="buttons"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Link to="/watch/1" style={{ textDecoration: "none" }}>
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
              layoutId={index}
              onClick={() => setSelectedId(index)}
            >
              <InfoOutlined className="info_icon" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {window.innerWidth <= 768 ? (
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
                      <img src={pic} alt="" />
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
                      <h4 className="more_card_info_title">
                        Spiderman: Homecoming
                      </h4>
                      <div className="more_card_info_other">
                        <p className="more_card_info_year">{year}</p>
                        <p className="more_card_info_age">{age}</p>
                        <p className="more_card_info_time">{time}</p>
                      </div>
                      <p className="more_card_info_des">{des}</p>
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
                      to={"/watch/" + selectedId}
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
                        src={video}
                        autoPlay={true}
                        loop
                        style={{
                          width: "55vw",
                          height: "28vw",
                          objectFit: "cover",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <img src={pic} alt="" className="more_modal_img" />
                    </>
                  )}

                  <motion.img
                    src={title_pic}
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
                    <Link to={"/watch/" + selectedId}>
                      <PlayArrow className="more_modal_icon list_item_play_icon" />
                    </Link>
                    <Add className="more_modal_icon" />
                    <ThumbUpAltOutlined className="more_modal_icon" />
                    <ThumbDownOutlined className="more_modal_icon" />
                    {/* <FiMoreHorizontal className="icon" /> */}
                  </motion.div>

                  <motion.div className="more_modal_cross">
                    <FaTimesCircle
                      className="more_modal_cross_icon"
                      onClick={() => {
                        setSelectedId(null);
                        setStartVideo(false);
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
                        <motion.span>{year}</motion.span>
                        <motion.span className="more_modal_limit">
                          {age}
                        </motion.span>
                        <motion.span>{time}</motion.span>
                      </motion.div>
                      <motion.div className="more_modal_iteminfo_des">
                        {des}
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
                          <motion.span>Director:</motion.span> {director}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_cast">
                        <motion.p>
                          <motion.span>Cast:</motion.span> {cast}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_writer">
                        <motion.p>
                          <motion.span>Writer:</motion.span> {writer}
                        </motion.p>
                      </motion.div>
                      <motion.div className="more_modal_info_right_genres">
                        <motion.p>
                          <motion.span>Genres:</motion.span> {genre}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>

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
                      {more_like.map((item, index) => (
                        <motion.div
                          className="more_like_card"
                          onClick={() => watch_movie()}
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
                              src={item.pic}
                              alt=""
                              className="more_like_img"
                            />
                            <Link to={"/watch/" + selectedId}>
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
                              {item.des}
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
