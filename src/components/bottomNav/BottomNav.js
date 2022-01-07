import React from "react";
import "./bottomNav.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faList,
//   faReceipt,
//   faImage,
//   faCommentAlt,
// } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdMovieFilter, MdLocalMovies } from "react-icons/md";
import { RiMovie2Fill, RiMovieFill } from "react-icons/ri";
import { BsMusicNoteBeamed } from "react-icons/bs";

//import { motion } from 'framer-motion';

const BottomNav = () => {
  //   let nav = document.querySelector(".nav");
  //   if (nav !== null) {
  //     nav.querySelectorAll("li .bottom_nav_a").forEach((a, i) => {
  //       a.onclick = (e) => {
  //         if (a.classList.contains("nav-item-active")) return;
  //         nav
  //           .querySelector("li .bottom_nav_a.nav-item-active")
  //           .classList.remove("nav-item-active");

  //         a.classList.add("nav-item-active");

  //         let nav_indicator = nav.querySelector(".nav-indicator");
  //         nav_indicator.style.left = `calc(${i * 80 + 51}px - 45px)`;
  //       };
  //     });
  //   }

  function clickMenu() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_menu").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${0 * 18 + 5}vw - 0px)`;
    if (window.innerWidth >= 471 && window.innerWidth <= 990) {
      nav_indicator.style.left = `calc(${0 * 19.6 + 4}vw - 0px)`;
    }
  }

  function clickStories() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_stories").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");

    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${1 * 18 + 5}vw - 0px)`;
    if (window.innerWidth >= 471 && window.innerWidth <= 990) {
      nav_indicator.style.left = `calc(${1 * 19.6 + 4}vw - 0px)`;
    }
  }

  function clickHome() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_home").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${2 * 18 + 5}vw - 0px)`;
    if (window.innerWidth >= 471 && window.innerWidth <= 990) {
      nav_indicator.style.left = `calc(${2 * 19.6 + 4}vw - 0px)`;
    }
  }

  function clickContact() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_contact").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${3 * 18 + 5}vw - 0px)`;
    if (window.innerWidth >= 471 && window.innerWidth <= 990) {
      nav_indicator.style.left = `calc(${3 * 19.6 + 4}vw - 0px)`;
    }
  }

  function clickAboutUs() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_about_us").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${4 * 18 + 5}vw - 0px)`;
    if (window.innerWidth >= 471 && window.innerWidth <= 990) {
      nav_indicator.style.left = `calc(${4 * 19.6 + 4}vw - 0px)`;
    }
  }

  return (
    <>
      <ul className="nav">
        <span className="nav-indicator"></span>

        <li>
          <Link
            to="/movies"
            className="bottom_nav_a bottom_nav_menu"
            id="bottom_nav_menu"
            onClick={clickMenu}
          >
            <MdMovieFilter className="navbar_menu_icon" />
            <span className="title">Movies</span>
          </Link>
        </li>

        <li>
          <Link
            to="/series"
            className="bottom_nav_a bottom_nav_stories"
            onClick={clickStories}
          >
            <RiMovie2Fill className="navbar_stories_icon" />
            <span className="title">Series</span>
          </Link>
        </li>

        <li>
          <Link
            to="/browse"
            className="bottom_nav_a nav-item-active bottom_nav_home"
            id="bottom_nav_home"
            onClick={clickHome}
          >
            <AiFillHome className="navbar_home_icon" />
            <span className="title">Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/my-list"
            className="bottom_nav_a bottom_nav_contact"
            onClick={clickContact}
          >
            <MdLocalMovies className="navbar_contact_icon" />
            <span className="title">My List</span>
          </Link>
        </li>

        <li>
          <Link
            to="/music"
            className="bottom_nav_a bottom_nav_about_us"
            onClick={clickAboutUs}
          >
            <BsMusicNoteBeamed className="navbar_about_us_icon" />
            <span className="title">Music</span>
          </Link>
        </li>

        {/* <li>
          <a href=".">
            <FontAwesomeIcon className="navbar_title_icon" icon={faChair} />
            <span className="title">Book Table</span>
          </a>
        </li> */}
      </ul>
    </>
  );
};

export default BottomNav;
