import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import ReactNetflixPlayer from "react-netflix-player";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Watch() {
  // const location = useLocation();
  // const movies = location.movies;
  const dataNext = { title: "Texto a ser exibido", description: "Descrição" };
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth > 990) {
      document.querySelector(".back div svg").addEventListener("click", () => {
        navigate("/browse");
      });

      document.querySelector(".back div span").addEventListener("click", () => {
        navigate("/browse");
      });

      document
        .querySelector(".sc-dkPtyc header svg")
        .addEventListener("click", () => {
          navigate("/browse");
        });
    }
  }, []);

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
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          />
        </>
      ) : (
        <>
          <ReactNetflixPlayer
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            title="Inside Out"
            subTitle="Movie Description"
            titleMedia="Inside Out"
            extraInfoMedia=": Here and there"
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
