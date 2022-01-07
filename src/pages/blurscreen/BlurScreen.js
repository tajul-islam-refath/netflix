import React from "react";
import "./blurscreen.scss";

const BlurScreen = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <>
      <div className="blur_screen_div">
        {array.map((item, index) => (
          <div
            className="blur_screen_card blur_screen_card_skeleton"
            data-aos="zoom-in"
            data-aos-delay={(index + 1) * 100}
          ></div>
        ))}
      </div>
    </>
  );
};

export default BlurScreen;
