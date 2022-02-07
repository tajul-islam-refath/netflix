import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { useState, useRef, useContext } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import Watch from "../../pages/watch/Watch";
//import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AppUrl from "../../classes/AppUrl";
import axios from "axios";
import { UserContext } from "../../context/userContext/UserContext";

export default function ListItem({
  item_id,
  setSelectedId,
  info,
  setMoreDetail,
  marginBottom,
  singleUser,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const { user } = useContext(UserContext);

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
        "/movies/like/" + info._id,
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
        "/movies/removedislike/" + info._id,
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
        "/movies/removelike/" + info._id,
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
        "/movies/dislike/" + info._id,
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
        "/movies/removelike/" + info._id,
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
        "/movies/removedislike/" + info._id,
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

  const item = useRef();
  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  // let genre_list = JSON.stringify(info.genre).split(",");

  const preventCardClick = (e) => {
    e.stopPropagation();
  };

  const openModal = () => {
    setSelectedId(item_id);
    setMoreDetail(info);

    document.querySelector("body").style.overflow = "hidden";
  };

  const openModalMbl = () => {
    setSelectedId(item_id);
    setMoreDetail(info);
  };

  return (
    <>
      {window.innerWidth <= 990 ? (
        <>
          {/* <LazyLoad offset={50} height={200} once={true} scroll={true}> */}
          {/* <LazyLoadImage */}
          <motion.img
            src={AppUrl.base_url + info.img}
            alt=""
            className="list_item_img"
            effect="blur"
            onClick={() => openModalMbl()}
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay={item_id * 150}
            data-aos-duration="500"
            // data-aos-easing="ease-in-out"
          />

          {/* </LazyLoad> */}
        </>
      ) : (
        <>
          <div className="list_item_images_duplicate"></div>
          <motion.div
            className="listItem"
            // style={{ left: isHovered && index * (225 + 5) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={item}
            onClick={() => openModal()}
            style={{ marginBottom: `${marginBottom}` }}
          >
            {/* <LazyLoad
              offset={50}
              height={200}
              once={true}
              scroll={true}
              overflow={true}
            > */}
            {/* <LazyLoadImage */}
            <img
              src={AppUrl.base_url + info.img}
              alt=""
              // effect="blur"
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-delay={item_id * 150}
              data-aos-duration="500"
              // data-aos-easing="ease-in-out"
              className="list_item_images"
            />
            {/* </LazyLoad> */}
            {isHovered && (
              <>
                <video
                  src={AppUrl.base_url + info.trailer}
                  autoPlay={true}
                  loop
                />
                <div className="itemInfo">
                  <div className="icons">
                    <Link
                      to={"/watch/" + info._id}
                      onClick={(e) => preventCardClick(e)}
                    >
                      <PlayArrow
                        className="icon list_item_play_icon"
                        style={{ color: "white" }}
                      />
                    </Link>

                    {singleUser.myList.find((elem) => {
                      if (elem._id === info._id) {
                        return true;
                      }
                    }) ? (
                      <>
                        <BsCheck2
                          id={"icon_remove_list" + info._id}
                          className="icon"
                          onClick={(e) => {
                            setAddToList(false);
                            removeFromFav(user._id, info, info._id);
                            preventCardClick(e);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        {addToList ? (
                          <>
                            <BsCheck2
                              id={"icon_remove_list" + info._id}
                              className="icon"
                              onClick={(e) => {
                                setAddToList(false);
                                removeFromFav(user._id, info, info._id);
                                preventCardClick(e);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <Add
                              id={"icon_list" + info._id}
                              className="icon"
                              onClick={(e) => {
                                addToFav(user._id, info, info._id);
                                preventCardClick(e);
                              }}
                            />
                          </>
                        )}
                      </>
                    )}

                    {/* <Add
                      className="icon"
                      onClick={(e) => preventCardClick(e)}
                    /> */}

                    {singleUser.myLike.find((elem) => {
                      if (elem._id === info._id) {
                        return true;
                      }
                    }) ? (
                      <>
                        <AiFillLike
                          className="icon"
                          onClick={(e) => {
                            removeFromLike(user._id, info, info._id);
                            preventCardClick(e);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        {addtoLike ? (
                          <>
                            <AiFillLike
                              className="icon"
                              onClick={(e) => {
                                removeFromLike(user._id, info, info._id);
                                preventCardClick(e);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <ThumbUpAltOutlined
                              className="icon"
                              onClick={(e) => {
                                addToLike(user._id, info, info._id);
                                preventCardClick(e);
                              }}
                            />
                          </>
                        )}
                      </>
                    )}

                    {/* <ThumbUpAltOutlined
                      className="icon"
                      onClick={(e) => preventCardClick(e)}
                    /> */}

                    {singleUser.myDislike.find((elem) => {
                      if (elem._id === info._id) {
                        return true;
                      }
                    }) ? (
                      <>
                        <AiFillDislike
                          className="icon"
                          onClick={(e) => {
                            removeFromDislike(user._id, info, info._id);
                            preventCardClick(e);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        {addtoDislike ? (
                          <>
                            <AiFillDislike
                              className="icon"
                              onClick={(e) => {
                                removeFromDislike(user._id, info, info._id);
                                preventCardClick(e);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <ThumbDownOutlined
                              className="icon"
                              onClick={(e) => {
                                addToDislike(user._id, info, info._id);
                                preventCardClick(e);
                              }}
                            />
                          </>
                        )}
                      </>
                    )}

                    {/* <ThumbDownOutlined
                      className="icon"
                      onClick={(e) => preventCardClick(e)}
                    /> */}
                    <FiMoreHorizontal
                      className="icon"
                      // layoutId={index}
                      onClick={() => openModal()}
                    />
                  </div>
                  <div className="itemInfoTop">
                    <span>{info.time}</span>
                    <span className="limit">{info.age}+</span>
                    {/* <span>1999</span> */}
                  </div>
                  {/* <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div> */}
                  <div className="genre">
                    {/* {JSON.stringify(info.genre)
                  .split(",")
                  .map((item, index) => (
                    <span>
                      {item} <span>•</span>
                    </span>
                  ))} */}
                    <span>{info.genre}</span>
                    {/* <span>•</span> <span>Drama</span>{" "}
                <span>•</span> <span>Horror</span> */}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}

      {/* <Watch style={{ display: "none" }} video={info.video} /> */}

      {/* <div className="more_modal">
        <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      </div> */}
    </>
  );
}
