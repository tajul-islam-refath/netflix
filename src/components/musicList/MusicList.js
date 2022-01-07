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

const MusicList = ({ header, header_below, marginTop }) => {
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

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <div className="music_list_div" style={{ marginTop: marginTop }}>
        <div className="music_list_header">
          <p>{header}</p>
          <p>{header_below}</p>
        </div>
        <div className="music_list_main">
          <Slider className="music_list_slider_main" {...settings1}>
            {array.map((item, index) => (
              <div
                className="music_list_slider_card"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={index * 150}
                data-aos-duration="500"
                // data-aos-easing="ease-in-out"
              >
                <img
                  src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX6QPuU2wUKTrISH7UkthsTD4mTPRpfGIojVGAfhTtmlwB_K-b-yujeN1zgpW0txJLLNWCDMCSPBP8qwhmFVX5jn32FM.webp?r=d57"
                  alt=""
                />
                <div className="music_list_slider_card_info">
                  <p className="music_list_slider_card_name">Rihaa</p>
                  <p className="music_list_slider_card_artist">Arijit Singh</p>
                </div>
                <div className="red_shade"></div>
                <div className="red_shade_info">
                  <div className="red_shade_icons">
                    <AiOutlineHeart className="red_shade_heart_icon" />{" "}
                    <FiPlay className="red_shade_play_icon" />
                    <CgMore className="red_shade_more_icon" />
                  </div>
                  <div className="red_shade_name_info">
                    <p className="red_shade_name">Rihaa</p>
                    <p className="red_shade_artist">Arijit Singh</p>
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
