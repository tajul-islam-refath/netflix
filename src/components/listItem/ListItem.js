import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useRef } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import Watch from "../../pages/watch/Watch";
//import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AppUrl from "../../classes/AppUrl";

export default function ListItem({
  item_id,
  setSelectedId,
  info,
  setMoreDetail,
  marginBottom,
}) {
  const [isHovered, setIsHovered] = useState(false);
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
                      to={"/watch/" + item_id}
                      onClick={(e) => preventCardClick(e)}
                    >
                      <PlayArrow
                        className="icon list_item_play_icon"
                        style={{ color: "white" }}
                      />
                    </Link>
                    <Add
                      className="icon"
                      onClick={(e) => preventCardClick(e)}
                    />
                    <ThumbUpAltOutlined
                      className="icon"
                      onClick={(e) => preventCardClick(e)}
                    />
                    <ThumbDownOutlined
                      className="icon"
                      onClick={(e) => preventCardClick(e)}
                    />
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
