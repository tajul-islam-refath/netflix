import React, { useState } from "react";
import { PlayArrow } from "@material-ui/icons";
import AppUrl from "../../classes/AppUrl";
import { useNavigate } from "react-router-dom";

const ListModalSeries = ({ mov, more_detail, selectedId, setSelectedId }) => {
  const [season, setSeason] = useState(1);

  const navigate = useNavigate();

  const startScroll = () => {
    document.querySelector("body").style.overflowY = "auto";
  };

  const watch_movie = (id) => {
    navigate("/watch/" + id);
    startScroll();
  };

  return (
    <>
      <div className="episode_div">
        <div className="episode_header">
          <h4>Episodes</h4>
          <div className="episode_select_div">
            <select
              name="seasons"
              id="seasons"
              onChange={(e) => setSeason(parseInt(e.target.value))}
            >
              {Array.from(Array(parseInt(more_detail.totalSeason)), (e, i) => {
                return <option value={i + 1}>Season {i + 1}</option>;
              })}

              {/* <option value="comedy">Season 2</option>
              <option value="crime">Season 3</option>
              <option value="fantasy">Season 4</option>
              <option value="historical">Season 5</option>
              <option value="horror">Season 6</option>
              <option value="romance">Season 7</option>
              <option value="sci-fi">Season 8</option> */}
            </select>
          </div>
        </div>
        {mov

          // eslint-disable-next-line array-callback-return
          .filter((m) => {
            if (m.title === more_detail.title && season === m.season) {
              return m;
            }
          })
          .reverse()
          .map((item, index) => (
            <div
              className="episode_info"
              onClick={() => watch_movie(item._id)}
              key={item._id}
            >
              <p>{index + 1}</p>
              <div className="episode_info_img">
                <img src={AppUrl.base_url + item.imgSm} alt="" />
                <PlayArrow className="episode_info_play_btn list_item_play_icon" />
              </div>
              <div className="episode_info_des_div">
                <div className="episode_info_title">
                  <h4>Episode {item.episode}</h4>
                  <p>{item.time}</p>
                </div>
                <div className="episode_info_des">{item.desc}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListModalSeries;
