import React from "react";
import "./about-us.scss";
import AboutUsSvg from "./AboutUsSvg";
import AboutUsMusicSvg from "./AboutUsMusicSvg";

const AboutUs = () => {
  return (
    <>
      <div className="about_us">
        <h4
          className="about_us_our_story_text"
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="500"
        >
          Our Story
        </h4>

        <div className="about_us_main">
          <div
            className="about_us_left"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad omnis
              dignissimos, quas molestias vero quam nulla consequuntur,
              architecto consectetur ipsa, corrupti blanditiis eveniet! Dolores
              id nobis neque magnam fugiat provident! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Ad omnis dignissimos, quas
              molestias vero quam nulla consequuntur, architecto consectetur
              ipsa, corrupti blanditiis eveniet! Dolores id nobis neque magnam
              fugiat provident!
            </p>
          </div>
          {/* <div className="about_us_right">
            <AboutUsSvg />
          </div> */}
        </div>

        <h4
          className="about_us_services_text"
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="500"
        >
          Services
        </h4>

        <div className="about_us_services1">
          <div
            className="about_us_services1_left"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <AboutUsSvg />
          </div>
          <div
            className="about_us_services1_right"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <h4>Video Content</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo
              nostrum beatae repudiandae recusandae fugit, odit error eveniet
              rem obcaecati alias magni deserunt vel perferendis ab tempore.
              Ducimus, amet esse?
            </p>
          </div>
        </div>

        <div className="about_us_services2">
          <div
            className="about_us_services2_left"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <h4>Music Content</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo
              nostrum beatae repudiandae recusandae fugit, odit error eveniet
              rem obcaecati alias magni deserunt vel perferendis ab tempore.
              Ducimus, amet esse?
            </p>
          </div>
          <div
            className="about_us_services2_right"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <AboutUsMusicSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
