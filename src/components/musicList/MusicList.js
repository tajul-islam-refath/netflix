import React, { useContext, useState } from "react";
import "./musicList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiPlay } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiDislikeLine, RiDislikeFill } from "react-icons/ri";
import { CgMore } from "react-icons/cg";
import { HiOutlineDownload } from "react-icons/hi";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import AppUrl from "../../classes/AppUrl";
import { UserContext } from "../../context/userContext/UserContext";
import axios from "axios";
import MusicListItem from "./MusicListItem";

const MusicList = ({
  header,
  header_below,
  marginTop,
  musicList,
  musicId,
  setMusicId,
  musicAudio,
  setMusicAudio,
  singleUser,
  audioPlayer,
  musicAll,
  isPlaying,
  setPlay,
  musicImg,
  setMusicImg,
}) => {
  const [pauseIcon, setPauseIcon] = useState(false);
  var settings1 = {
    // dots: true,
    // centerMode: true,
    infinite: true,

    speed: 1000,

    slidesToShow: 6,
    slidesToScroll: 6,
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
          // dots: true,
        },
      },
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
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

  //const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <div className="music_list_div" style={{ marginTop: marginTop }}>
        <div className="music_list_header">
          <p>{header}</p>
          {/* <p>{header_below}</p> */}
        </div>
        <div className="music_list_main">
          <Slider className="music_list_slider_main" {...settings1}>
            {musicList.map((item, index) => (
              <MusicListItem
                key={item._id}
                item={item}
                index={index}
                singleUser={singleUser}
                setMusicId={setMusicId}
                musicAudio={musicAudio}
                setMusicAudio={setMusicAudio}
                audioPlayer={audioPlayer}
                musicList={musicList}
                musicAll={musicAll}
                pauseIcon={pauseIcon}
                setPauseIcon={setPauseIcon}
                isPlaying={isPlaying}
                setPlay={setPlay}
                musicImg={musicImg}
                setMusicImg={setMusicImg}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MusicList;
