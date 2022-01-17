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
              iCinema is passionate about spreading the joy of watching movies
              and listening to music among people of different ages and tastes.
              You can get the best of entertainment with iCinema. What’s so
              special about iCinema is that we give you the best of both worlds-
              movies and music- all in one place. We provide a wide range of
              great films, music, and series to watch online without limits. All
              you need to do is take our subscription plan to access the movies,
              music, and series. Enjoy unlimited entertainment.
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
              Do you love to binge-watch movies online? Are you looking for
              websites where you can watch movies online? Watching movies online
              at home has become the latest trend. It’s cheaper, convenient, and
              trendy! iCinema has brought all genres of movies and series for
              you to choose from- Action, Horror, Family, etc. So, if you are
              looking for a series or film to watch online in HD quality, you
              will definitely find it here. Unlimited number of iconic and
              award-winning movies of all genres A massive library of all the
              latest, phenomenal and classic series-e.g. Korean TV shows,
              Award-winning TV shows, Family TV shows, Indian TV shows, Super
              Natural Soaps, Anime, etc. Watch high-quality movies and series
              anywhere and on any device. Providing you downloadable video
              content. Enjoy ad-free videos.
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
              Music is a great tool to help you relax and even work better. It
              can be used as a motivator or as a way to de-stress yourself
              before going to bed. The best thing about music is that there is
              so much variety available, and to help you choose what to listen
              to, iCinema provides thousands and thousands of great music-
              English, Hindi, K-pop, Bangla, you name it! iCinema has got it all
              covered-songs to listen to when sad, songs to listen to when mad,
              songs to listen to when you miss someone, etc. Just put on your
              headphones and get lost in the fascinating world of music with us.
              A broad collection of satisfying music of all tastes. Providing
              you downloadable music content. Enjoy ad-free music
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
