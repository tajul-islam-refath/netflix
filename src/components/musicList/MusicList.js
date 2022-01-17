import React from "react";
import "./musicList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiPlay } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMore } from "react-icons/cg";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

const MusicList = ({
  header,
  header_below,
  marginTop,
  musicList,
  musicId,
  setMusicId,
  musicAudio,
  setMusicAudio,
}) => {
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

  const playMusic = (id, audio) => {
    setMusicId(id);
    setMusicAudio(audio);
    document.querySelector(".audio_player").play();
  };

  //const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <div className="music_list_div" style={{ marginTop: marginTop }}>
        <div className="music_list_header">
          <p>{header}</p>
          <p>{header_below}</p>
        </div>
        <div className="music_list_main">
          <Slider className="music_list_slider_main" {...settings1}>
            {musicList.map((item, index) => (
              <div
                className="music_list_slider_card"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={index * 150}
                data-aos-duration="500"
                // data-aos-easing="ease-in-out"
              >
                <img src={item.imgSm} alt="" />
                <div className="music_list_slider_card_info">
                  <p className="music_list_slider_card_name">{item.title}</p>
                  <p className="music_list_slider_card_artist">{item.cast}</p>
                </div>
                {/* <audio src="horse.mp3" type="audio/mpeg" controls /> */}

                <div className="red_shade"></div>
                <div className="red_shade_info">
                  <div className="red_shade_icons">
                    <AiOutlineHeart className="red_shade_heart_icon" />{" "}
                    <FiPlay
                      className="red_shade_play_icon"
                      onClick={() => playMusic(item.id, item.video)}
                    />
                    <CgMore className="red_shade_more_icon" />
                  </div>
                  <div className="red_shade_name_info">
                    <p className="red_shade_name">{item.title}</p>
                    <p className="red_shade_artist">{item.cast}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MusicList;
