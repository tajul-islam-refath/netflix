import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import ReactNetflixPlayer from "react-netflix-player";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

export default function Watch() {
  // const location = useLocation();
  // const movies = location.movies;
  const dataNext = { title: "Texto a ser exibido", description: "Descrição" };
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const last_url = pathname.substring(pathname.lastIndexOf("/") + 1);

  // useEffect(() => {
  //   if (window.innerWidth > 990) {
  //     document.querySelector(".back div svg").addEventListener("click", () => {
  //       navigate("/browse");
  //     });

  //     document.querySelector(".back div span").addEventListener("click", () => {
  //       navigate("/browse");
  //     });

  //     document
  //       .querySelector(".sc-dkPtyc header svg")
  //       .addEventListener("click", () => {
  //         navigate("/browse");
  //       });
  //   }
  // }, []);
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       const res = await axios.get("/movies/", {
  //         headers: {
  //           token:
  //             "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       console.log(res);
  //       setMovies(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMovies();
  //   return () => {
  //     setMovies([]); // This worked for me
  //   };
  // }, []);

  const [mov, setMov] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + last_url, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(res);
        setMov(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
    return () => {
      setMov([]); // This worked for me
    };
  }, [last_url]);

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      {window.innerWidth <= 990 ? (
        <>
          <video
            className="video"
            autoPlay={true}
            progress
            controls
            src={AppUrl.base_url + mov.video}
          />
        </>
      ) : (
        <>
          <ReactNetflixPlayer
            src={AppUrl.base_url + mov.video}
            title={mov.title}
            subTitle={mov.desc}
            titleMedia={mov.title}
            extraInfoMedia={mov.episode !== null && "Episode: " + mov.episode}
            playerLanguage="en"
            overlayEnabled={true}
            autoControllCloseEnabled={false}
            fullPlayer={true}
            backButton={true}
            autoPlay={true}
            playbackRateEnable={true}
            primaryColor={"red"}
            dataNext={dataNext}
          />
        </>
      )}
    </div>
  );
}
