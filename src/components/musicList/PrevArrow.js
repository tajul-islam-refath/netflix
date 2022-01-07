import React from "react";
import "./musicList.scss";
import { GrPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <div className="prev_icon_div">
        <GrPrevious className="prev_icon" onClick={onClick} />
      </div>
    </>
  );
};

export default PrevArrow;
