import React from "react";
import "./musicList.scss";
import { GrNext } from "react-icons/gr";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className="next_icon_div">
        <GrNext className="next_icon" onClick={onClick} />
      </div>
    </>
  );
};

export default NextArrow;
