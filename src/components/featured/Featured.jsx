import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import 'animate.css';

export default function Featured({ type }) {

    const playNowAnimate = () => {
        document.querySelector('.play').classList.add('animate__jello')
    }

    const moreInfoAnimate = () => {
        document.querySelector('.more').classList.add('animate__jello')
    }

    const playNowAnimateClose = () => {
        document.querySelector('.play').classList.remove('animate__jello')
    }

    const moreInfoAnimateClose = () => {
        document.querySelector('.more').classList.remove('animate__jello')
    }

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABalHHD1Gt_H5YZ_RyeJSkkOjRBvGtMI-6kXn0AGx00Z_boCVoE8KRaZJxIL36-r6mtXKPi262TkL997GVDFkApoPJn9z.webp?r=76a"
              alt=""
              className="hero_img"
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play animate__animated" onMouseEnter={playNowAnimate} onMouseLeave={playNowAnimateClose}>
            <PlayArrow className="play_icon" />
            <span>Play</span>
          </button>
          <button className="more animate__animated" onMouseEnter={moreInfoAnimate} onMouseLeave={moreInfoAnimateClose}>
            <InfoOutlined className="info_icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}