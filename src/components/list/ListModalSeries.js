import React from "react";
import { PlayArrow } from "@material-ui/icons";

const ListModalSeries = () => {
  return (
    <>
      <div className="episode_div">
        <div className="episode_header">
          <h4>Episodes</h4>
          <div className="episode_select_div">
            <select name="seasons" id="seasons">
              <option value="adventure">Season 1</option>
              <option value="comedy">Season 2</option>
              <option value="crime">Season 3</option>
              <option value="fantasy">Season 4</option>
              <option value="historical">Season 5</option>
              <option value="horror">Season 6</option>
              <option value="romance">Season 7</option>
              <option value="sci-fi">Season 8</option>
            </select>
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div className="episode_info">
            <p>{index + 1}</p>
            <div className="episode_info_img">
              <img
                src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUyF3kexjPto1IHIhDpmIYadqvYLEIQIyDx7IVyl7YbSziHb11WDdfFMtqIQeGfy_Se5qZjWh2uCamN9D7LXGgW8J7Ch2Ef5TUowkj9EnxLaCaN7TibUc-2ptLhBGf2i3WCD3a3cooyblg9koj8cWgpGR8DQkbNnGu1db1Fz7r9hSn3AJMZDFrgO3522AZ0N0QE2894mlkFZQkGjqlwT8pO5A.jpg?r=603"
                alt=""
              />
              <PlayArrow className="episode_info_play_btn list_item_play_icon" />
            </div>
            <div className="episode_info_des_div">
              <div className="episode_info_title">
                <h4>Episode 1</h4>
                <p>61m</p>
              </div>
              <div className="episode_info_des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium nesciunt nihil sapiente at, amet assumenda quae
                maxime suscipit...
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListModalSeries;
