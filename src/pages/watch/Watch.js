import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import ReactNetflixPlayer from "react-netflix-player";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Watch() {
  const dataNext = { title: "Texto a ser exibido", description: "Descrição" };
  const navigate = useNavigate();
  useEffect(() => {
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
  }, []);

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      {/* <video
        className="video"
        autoPlay={true}
        progress
        controls
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      /> */}
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
    </div>
  );
}
