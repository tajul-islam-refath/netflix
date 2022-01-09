import React from "react";
import AboutUs from "../../components/about-us/AboutUs";
import ContactUs from "../../components/contact-us/ContactUs";
import "./our-story.scss";

const OurStory = () => {
  return (
    <>
      <div className="our_story">
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
};

export default OurStory;
