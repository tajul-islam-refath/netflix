import React from "react";
import "./musicHero.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const MusicHero = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
  };
  return (
    <>
      <div className="music_hero_div">
        <Slider className="music_hero_slider_main" {...settings}>
          <div className="music_hero_slider_img_div">
            <img
              src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQS96h1QM7IhWjzaOOECOgvAXWfbZzj_quaAFhZc7_9wfJeh_WRyE0RihNoaN5NAiarwfaaFF_Y5w1XiUITsI1R_6ayV.webp?r=5ef"
              alt=""
            />
            <div className="music_hero_slider_info_div">
              <h4
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Cold Play
              </h4>
              <p
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                cum libero maxime, consequatur reprehenderit, reiciendis
                repellendus ipsam quasi iste dolorem blanditiis autem quia dicta
                ducimus aliquid enim. Maxime, obcaecati corrupti!
              </p>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                <Link to="#" className="music_hero_slider_button">
                  <PlayArrow className="music_hero_play_icon " />
                  <span>Play</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="music_hero_slider_img_div">
            <img
              src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQiIBJXiMiiUS9zi_1pBO1NF-kBzmpZfw2IkNs_Uh6cWYQestVnV4Wy7vQDXdFHdoPjQp4JNFCySFpoU6yEeBSOh8JM5.webp?r=46a"
              alt=""
            />
            <div className="music_hero_slider_info_div">
              <h4
                data-aos="fade-left"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                Beatbox
              </h4>
              <p
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                cum libero maxime, consequatur reprehenderit, reiciendis
                repellendus ipsam quasi iste dolorem blanditiis autem quia dicta
                ducimus aliquid enim. Maxime, obcaecati corrupti!
              </p>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                <Link to="#" className="music_hero_slider_button">
                  <PlayArrow className="music_hero_play_icon " />
                  <span>Play</span>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
        <div className="music_hero_shade"></div>
      </div>
    </>
  );
};

export default MusicHero;
