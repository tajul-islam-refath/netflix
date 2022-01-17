import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState, useEffect, Suspense, lazy } from "react";
//import ListItem from "../listItem/ListItem";
import { FiPlay } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMore } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listSearch.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  InfoOutlined,
} from "@material-ui/icons";
//import { FiMoreHorizontal } from "react-icons/fi";
import { FaTimesCircle } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";
import ListModal from "./ListModal";
import PrevArrow from "../musicList/PrevArrow";
import NextArrow from "../musicList/NextArrow";

const ListItem = lazy(() => import("../listItem/ListItem"));

export default function ListSearch({
  list_header,
  list,
  searchTerms,
  setSearchTerms,
  searchPlaceHolder,
}) {
  const [isMoved, setIsMoved] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const [selectedId, setSelectedId] = useState(null);
  const [startVideo, setStartVideo] = useState(false);
  const [more_detail, setMoreDetail] = useState(null);

  //const [volume_detail, setVolumeDetail] = useState(false);

  //const navigate = useNavigate();

  // useEffect(() => {
  //   setMoreDetail(cw.find((item) => item.id === selectedId));
  // }, []);

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  if (selectedId !== null) {
    setTimeout(() => {
      setStartVideo(true);
    }, 4000);
  }

  // const offVolumeDetail = () => {
  //   setVolumeDetail(false);
  // };

  // const onVolumeDetail = () => {
  //   setVolumeDetail(true);
  // };

  const openScroll = () => {
    document.querySelector("body").style.overflowY = "auto";
  };

  const listRef = useRef();

  //   const handleClick = (direction) => {
  //     setIsMoved(true);
  //     setIsMovedRight(true);
  //     let distance = listRef.current.getBoundingClientRect().x - 50;
  //     if (direction === "left" && slideNumber > 0) {
  //       setSlideNumber(slideNumber - 1);
  //       listRef.current.style.transform = `translateX(${230 + distance}px)`;
  //     }
  //     if (direction === "right" && slideNumber < 10 - clickLimit) {
  //       setSlideNumber(slideNumber + 1);
  //       listRef.current.style.transform = `translateX(${-230 + distance}px)`;
  //     }
  //     if (direction === "left" && slideNumber === 1) {
  //       setIsMoved(false);
  //     }
  //     if (direction === "right" && slideNumber === 4) {
  //       setIsMovedRight(false);
  //     }
  //   };

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
      setMovies([]);
    };
  }, []);

  var settings1 = {
    // dots: true,
    // centerMode: true,
    //   infinite: true,

    speed: 1000,
    infinite: movies.length > 6,
    // centerMode: true,
    // centerPadding: "0px",
    // rows: 1,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    lazyload: true,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // const watch_movie = () => {
  //   navigate("/watch/" + 1);
  //   openScroll();
  // };

  // useEffect(() => {

  // }, []);

  // let one_movie = "";
  // one_movie = onemovie.map((item) => item);

  return (
    <>
      <h4 className="searched_content_text">
        {searchPlaceHolder === "Search by Music"
          ? "Searched Music"
          : "Searched Movies/Series"}
      </h4>

      <div className="list_searched">
        <span className="listTitle">{list_header}</span>
        <div className="wrapper">
          {/* <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          /> */}
          {window.innerWidth <= 990 ? (
            <>
              {searchPlaceHolder !== "Search by Music" ? (
                <>
                  <motion.div className="main_div">
                    <div className="center_div">
                      {movies // eslint-disable-next-line array-callback-return
                        .filter((val) => {
                          if (val.type !== "Music") {
                            if (searchTerms === "") {
                              return val;
                            } else if (
                              val.title
                                .toLowerCase()
                                .includes(searchTerms.toLocaleLowerCase())
                            ) {
                              return val;
                            } else if (
                              val.type
                                .toLowerCase()
                                .includes(searchTerms.toLocaleLowerCase())
                            ) {
                              return val;
                            } else if (
                              val.year
                                .toLowerCase()
                                .includes(searchTerms.toLocaleLowerCase())
                            ) {
                              return val;
                            } else if (
                              val.genre
                                .toLowerCase()
                                .includes(searchTerms.toLocaleLowerCase())
                            ) {
                              return val;
                            } else if (
                              val.createdAt
                                .toLowerCase()
                                .includes(searchTerms.toLocaleLowerCase())
                            ) {
                              return val;
                            }
                            //return val;
                          }
                          // else {
                          //   return null;
                          // }
                        })
                        .map((item, index) => (
                          <Suspense fallback={<div></div>} key={item._id}>
                            {/* <LazyLoad
                        offset={50}
                        height={200}
                        once={true}
                        scroll={true}
                        
                      > */}
                            <ListItem
                              item_id={item._id}
                              setSelectedId={setSelectedId}
                              info={item}
                              setMoreDetail={setMoreDetail}
                            />
                            {/* </LazyLoad> */}
                          </Suspense>
                        ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="music_list_div1">
                    <div className="music_list_main">
                      <div className="music_list_slider_main">
                        {movies
                          // eslint-disable-next-line array-callback-return
                          .filter((val) => {
                            if (val.type === "Music") {
                              if (searchTerms === "") {
                                return val;
                              } else if (
                                val.title
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.type
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.year
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.genre
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.createdAt
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              }
                              //return val;
                            }
                            // else {
                            //   return null;
                            // }
                          })
                          .map((item, index) => (
                            <div
                              className="music_list_slider_card"
                              data-aos="zoom-in"
                              data-aos-offset="100"
                              data-aos-delay={index * 150}
                              data-aos-duration="500"
                              // data-aos-easing="ease-in-out"
                              key={item._id}
                            >
                              <img src={AppUrl.base_url + item.imgSm} alt="" />
                              <div className="music_list_slider_card_info">
                                <p className="music_list_slider_card_name">
                                  {item.title}
                                </p>
                                <p className="music_list_slider_card_artist">
                                  {item.cast}
                                </p>
                              </div>
                              {/* <audio src="horse.mp3" type="audio/mpeg" controls /> */}

                              <div className="red_shade"></div>
                              <div className="red_shade_info">
                                <div className="red_shade_icons">
                                  <AiOutlineHeart className="red_shade_heart_icon" />{" "}
                                  <FiPlay
                                    className="red_shade_play_icon"
                                    //   onClick={() => playMusic(item.id, item.video)}
                                  />
                                  <CgMore className="red_shade_more_icon" />
                                </div>
                                <div className="red_shade_name_info">
                                  <p className="red_shade_name">{item.title}</p>
                                  <p className="red_shade_artist">
                                    {item.cast}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {searchPlaceHolder !== "Search by Music" ? (
                <>
                  <div className="container" ref={listRef}>
                    {movies
                      // eslint-disable-next-line array-callback-return
                      .filter((val) => {
                        if (val.type !== "Music") {
                          if (searchTerms === "") {
                            return val;
                          } else if (
                            val.title
                              .toLowerCase()
                              .includes(searchTerms.toLocaleLowerCase())
                          ) {
                            return val;
                          } else if (
                            val.type
                              .toLowerCase()
                              .includes(searchTerms.toLocaleLowerCase())
                          ) {
                            return val;
                          } else if (
                            val.year
                              .toLowerCase()
                              .includes(searchTerms.toLocaleLowerCase())
                          ) {
                            return val;
                          } else if (
                            val.genre
                              .toLowerCase()
                              .includes(searchTerms.toLocaleLowerCase())
                          ) {
                            return val;
                          } else if (
                            val.createdAt
                              .toLowerCase()
                              .includes(searchTerms.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                          //return val;
                        }
                        // else {
                        //   return null;
                        // }
                      })
                      .map((item, index) => (
                        <Suspense fallback={<div></div>} key={item._id}>
                          <LazyLoad
                            offset={50}
                            height={200}
                            once={true}
                            scroll={true}
                          >
                            <ListItem
                              item_id={item._id}
                              setSelectedId={setSelectedId}
                              info={item}
                              setMoreDetail={setMoreDetail}
                              marginBottom={"20px"}
                            />
                          </LazyLoad>
                        </Suspense>
                      ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="music_list_div1">
                    <div className="music_list_main">
                      <div className="music_list_slider_main">
                        {movies
                          // eslint-disable-next-line array-callback-return
                          .filter((val) => {
                            if (val.type === "Music") {
                              if (searchTerms === "") {
                                return val;
                              } else if (
                                val.title
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.type
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.year
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.genre
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              } else if (
                                val.createdAt
                                  .toLowerCase()
                                  .includes(searchTerms.toLocaleLowerCase())
                              ) {
                                return val;
                              }
                              //return val;
                            }
                            // else {
                            //   return null;
                            // }
                          })
                          .map((item, index) => (
                            <div
                              className="music_list_slider_card"
                              data-aos="zoom-in"
                              data-aos-offset="100"
                              data-aos-delay={index * 150}
                              data-aos-duration="500"
                              // data-aos-easing="ease-in-out"
                              key={item._id}
                            >
                              <img src={AppUrl.base_url + item.imgSm} alt="" />
                              <div className="music_list_slider_card_info">
                                <p className="music_list_slider_card_name">
                                  {item.title}
                                </p>
                                <p className="music_list_slider_card_artist">
                                  {item.cast}
                                </p>
                              </div>
                              {/* <audio src="horse.mp3" type="audio/mpeg" controls /> */}

                              <div className="red_shade"></div>
                              <div className="red_shade_info">
                                <div className="red_shade_icons">
                                  <AiOutlineHeart className="red_shade_heart_icon" />{" "}
                                  <FiPlay
                                    className="red_shade_play_icon"
                                    //   onClick={() => playMusic(item.id, item.video)}
                                  />
                                  <CgMore className="red_shade_more_icon" />
                                </div>
                                <div className="red_shade_name_info">
                                  <p className="red_shade_name">{item.title}</p>
                                  <p className="red_shade_artist">
                                    {item.cast}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {/* <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
            style={{ display: !isMovedRight && "none" }}
          /> */}
        </div>
      </div>

      <ListModal
        key={selectedId}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        more_detail={more_detail}
        startVideo={startVideo}
        setStartVideo={setStartVideo}
        openScroll={openScroll}
      />
    </>
  );
}
