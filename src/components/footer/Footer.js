import React, { useEffect } from "react";
import "./footer.scss";
import { Link, useLocation } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/music") {
      document.querySelector(".footer_bottom_section").style.paddingBottom =
        "123px";
    } else {
      document.querySelector(".footer_bottom_section").style.paddingBottom =
        "0px";
    }
  }, [pathname]);

  const fbAnimate = () => {
    document
      .querySelector(".footer_first_column_social_media_fb")
      .classList.add("animate__pulse");
  };
  const fbAnimateClose = () => {
    document
      .querySelector(".footer_first_column_social_media_fb")
      .classList.remove("animate__pulse");
  };

  const twitterAnimate = () => {
    document
      .querySelector(".footer_first_column_social_media_twitter")
      .classList.add("animate__pulse");
  };
  const twitterAnimateClose = () => {
    document
      .querySelector(".footer_first_column_social_media_twitter")
      .classList.remove("animate__pulse");
  };

  const instaAnimate = () => {
    document
      .querySelector(".footer_first_column_social_media_instagram")
      .classList.add("animate__pulse");
  };
  const instaAnimateClose = () => {
    document
      .querySelector(".footer_first_column_social_media_instagram")
      .classList.remove("animate__pulse");
  };

  const pinterestAnimate = () => {
    document
      .querySelector(".footer_first_column_social_media_pinterest")
      .classList.add("animate__pulse");
  };
  const pinterestAnimateClose = () => {
    document
      .querySelector(".footer_first_column_social_media_pinterest")
      .classList.remove("animate__pulse");
  };

  const youtubeAnimate = () => {
    document
      .querySelector(".footer_first_column_social_media_youtube")
      .classList.add("animate__pulse");
  };
  const youtubeAnimateClose = () => {
    document
      .querySelector(".footer_first_column_social_media_youtube")
      .classList.remove("animate__pulse");
  };

  const homeAnimate = () => {
    document.querySelector(".footer_home").classList.add("animate__pulse");
  };
  const homeAnimateClose = () => {
    document.querySelector(".footer_home").classList.remove("animate__pulse");
  };

  const moviesAnimate = () => {
    document.querySelector(".footer_movies").classList.add("animate__pulse");
  };
  const moviesAnimateClose = () => {
    document.querySelector(".footer_movies").classList.remove("animate__pulse");
  };

  const musicAnimate = () => {
    document.querySelector(".footer_music").classList.add("animate__pulse");
  };
  const musicAnimateClose = () => {
    document.querySelector(".footer_music").classList.remove("animate__pulse");
  };

  const seriesAnimate = () => {
    document.querySelector(".footer_series").classList.add("animate__pulse");
  };
  const seriesAnimateClose = () => {
    document.querySelector(".footer_series").classList.remove("animate__pulse");
  };

  const popularAnimate = () => {
    document.querySelector(".footer_popular").classList.add("animate__pulse");
  };
  const popularAnimateClose = () => {
    document
      .querySelector(".footer_popular")
      .classList.remove("animate__pulse");
  };

  const mylistAnimate = () => {
    document.querySelector(".footer_mylist").classList.add("animate__pulse");
  };
  const mylistAnimateClose = () => {
    document.querySelector(".footer_mylist").classList.remove("animate__pulse");
  };

  const accountAnimate = () => {
    document.querySelector(".footer_account").classList.add("animate__pulse");
  };
  const accountAnimateClose = () => {
    document
      .querySelector(".footer_account")
      .classList.remove("animate__pulse");
  };

  const privacyAnimate = () => {
    document.querySelector(".footer_privacy").classList.add("animate__pulse");
  };
  const privacyAnimateClose = () => {
    document
      .querySelector(".footer_privacy")
      .classList.remove("animate__pulse");
  };

  const termsAnimate = () => {
    document.querySelector(".footer_terms").classList.add("animate__pulse");
  };
  const termsAnimateClose = () => {
    document.querySelector(".footer_terms").classList.remove("animate__pulse");
  };

  const storyAnimate = () => {
    document.querySelector(".footer_story").classList.add("animate__pulse");
  };
  const storyAnimateClose = () => {
    document.querySelector(".footer_story").classList.remove("animate__pulse");
  };
  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#24243bf7"
          fill-opacity="1"
          d="M0,128L1440,288L1440,320L0,320Z"
        ></path>
      </svg> */}
      <section className="footer_section">
        <div className="footer_section_inside container">
          <div
            className="footer_first_column"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="footer_first_column_logo_div">
              <Link to="/browse" className="navbar_logo footer_logo">
                <img
                  className="footer_first_column_logo"
                  src="images/icinema_logo.png"
                  alt="logo"
                />
                <span className="text_logo footer_text_logo">iCinema</span>
              </Link>
              {/* <Link to="/" className="footer_first_column_logo_text">
                Icinema
              </Link> */}
            </div>

            <div className="footer_first_column_location_div">
              All rights reserved by iCinema
            </div>

            {/* <div className="footer_first_column_phone_div"></div>

            <div className="footer_first_column_email_div"></div> */}

            <div className="footer_first_column_social_media_div">
              <a
                href="."
                className="footer_first_column_social_media_fb animate__animated"
                onMouseEnter={fbAnimate}
                onMouseLeave={fbAnimateClose}
              >
                {/* <i className="fa fa-facebook"></i> */}
                <BsFacebook />
              </a>
              <a
                href="."
                className="footer_first_column_social_media_twitter animate__animated"
                onMouseEnter={twitterAnimate}
                onMouseLeave={twitterAnimateClose}
              >
                {/* <i className="fa fa-twitter"></i> */}
                <BsTwitter />
              </a>
              <a
                href="."
                className="footer_first_column_social_media_instagram animate__animated"
                onMouseEnter={instaAnimate}
                onMouseLeave={instaAnimateClose}
              >
                {/* <i className="fa fa-instagram"></i> */}
                <BsInstagram />
              </a>

              <a
                href="."
                className="footer_first_column_social_media_pinterest animate__animated"
                onMouseEnter={pinterestAnimate}
                onMouseLeave={pinterestAnimateClose}
              >
                {/* <i className="fa fa-pinterest"></i> */}
                <BsPinterest />
              </a>

              <a
                href="."
                className="footer_first_column_social_media_youtube animate__animated"
                onMouseEnter={youtubeAnimate}
                onMouseLeave={youtubeAnimateClose}
              >
                {/* <i className="fa fa-pinterest"></i> */}
                <BsYoutube />
              </a>
            </div>
          </div>

          <div className="footer_menus_div">
            <div
              className="footer_second_column"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {/* <a href="." className="footer_second_column_service">
              Service
            </a> */}
              <Link
                to="/browse"
                className="footer_second_column_service_child animate__animated footer_home"
                onMouseEnter={homeAnimate}
                onMouseLeave={homeAnimateClose}
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="footer_second_column_service_child animate__animated footer_movies"
                onMouseEnter={moviesAnimate}
                onMouseLeave={moviesAnimateClose}
              >
                Movies
              </Link>

              <Link
                to="/music"
                className="footer_second_column_service_child animate__animated footer_music"
                onMouseEnter={musicAnimate}
                onMouseLeave={musicAnimateClose}
              >
                Music
              </Link>

              <Link
                to="/series"
                className="footer_second_column_service_child animate__animated footer_series"
                onMouseEnter={seriesAnimate}
                onMouseLeave={seriesAnimateClose}
              >
                Series
              </Link>
              {/* <Link
                to="/contact"
                className="footer_second_column_service_child"
              >
                Contact
              </Link> */}
              {/* <a href="." className="footer_second_column_service_child">
              Menu
            </a> */}
            </div>

            <div
              className="footer_second_column"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {/* <a href="." className="footer_second_column_service">
              Service
            </a> */}
              {/* <Link
                to="/bosphorus"
                className="footer_second_column_service_child"
              >
                Home
              </Link>
              <Link to="/menu" className="footer_second_column_service_child">
                Menu
              </Link> */}
              {/* <Link
                to="/series"
                className="footer_second_column_service_child animate__animated footer_series"
                onMouseEnter={seriesAnimate}
                onMouseLeave={seriesAnimateClose}
              >
                Series
              </Link> */}
              <Link
                to="/popular"
                className="footer_third_column_company_child animate__animated footer_popular"
                onMouseEnter={popularAnimate}
                onMouseLeave={popularAnimateClose}
              >
                New & Popular
              </Link>

              <Link
                to="/my-list"
                className="footer_third_column_company_child animate__animated footer_mylist"
                onMouseEnter={mylistAnimate}
                onMouseLeave={mylistAnimateClose}
              >
                My List
              </Link>

              <Link
                to="/account"
                className="footer_third_column_company_child animate__animated footer_account"
                onMouseEnter={accountAnimate}
                onMouseLeave={accountAnimateClose}
              >
                Account
              </Link>

              <Link
                to="/our-story"
                className="footer_third_column_company_child animate__animated footer_story"
                onMouseEnter={storyAnimate}
                onMouseLeave={storyAnimateClose}
              >
                Our Story
              </Link>
              {/* <a href="." className="footer_second_column_service_child">
              Menu
            </a> */}
            </div>

            <div
              className="footer_third_column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* <a href="." className="footer_third_column_company">
              Company
            </a> */}
              {/* <Link
                to="/account"
                className="footer_third_column_company_child animate__animated footer_account"
                onMouseEnter={accountAnimate}
                onMouseLeave={accountAnimateClose}
              >
                Account
              </Link> */}

              {/* <Link
                to="/our-story"
                className="footer_third_column_company_child animate__animated footer_story"
                onMouseEnter={storyAnimate}
                onMouseLeave={storyAnimateClose}
              >
                Our Story
              </Link> */}

              <Link
                to="/privacy"
                className="footer_third_column_company_child animate__animated footer_privacy"
                onMouseEnter={privacyAnimate}
                onMouseLeave={privacyAnimateClose}
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="footer_third_column_company_child animate__animated footer_terms"
                onMouseEnter={termsAnimate}
                onMouseLeave={termsAnimateClose}
              >
                Terms of Use
              </Link>

              {/* <a href="." className="footer_third_column_company_child">
              New users FAQ
            </a> */}
            </div>

            {/* <div className="footer_fourth_column">
            <a href="." className="footer_fourth_column_supports">
              Supports
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Help center
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Feedback
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Contact us
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Terms conditions
            </a>
          </div> */}

            {/* <div className="footer_fifth_column">
            <a href="." className="footer_fifth_column_resources">
              Resources
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              Open hours
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              Blogs
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              What's new
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              Sitemap
            </a>
          </div> */}
          </div>
        </div>
      </section>

      <section className="footer_bottom_section">
        <div className="footer_bottom_inside container">
          <div className="footer_bottom_left">
            <p className="footer_bottom_left_text">
              © 2021 iCinema - All rights reserved.
            </p>
          </div>
          {/* <div className="footer_bottom_right">
            <a href="." className="footer_bottom_right_privacy">
              Privacy
            </a>
            <a href="." className="footer_bottom_right_security">
              Security
            </a>
            <a href="." className="footer_bottom_right_terms">
              Terms
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Footer;
