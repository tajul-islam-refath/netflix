import React, { useState } from "react";
import AppUrl from "../../classes/AppUrl";
import { FiPlay, FiPause } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiDislikeLine, RiDislikeFill } from "react-icons/ri";
import axios from "axios";

const ListMusicSearch = ({
  item,
  index,
  singleUser,
  audioPlayer,
  user_id,
  musicAudio,
  setMusicAudio,
}) => {
  const [playicon, setPlayicon] = useState(false);
  //const [addToList, setAddToList] = useState(false);
  const [addtoLike, setAddtoLike] = useState(false);
  const [addtoDislike, setAddtoDislike] = useState(false);

  //like
  const addToLike = async (id, myLike, myLikeId) => {
    setAddtoLike(true);
    setAddtoDislike(false);

    try {
      const res = await axios.put(
        "/users/addmylike/" + id,
        { movie_id: myLikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/like/" + myLikeId,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/users/removemydislike/" + id,
        { movie_id: myLikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removedislike/" + myLikeId,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromLike = async (id, myLike, myLikeId) => {
    setAddtoLike(false);

    try {
      const res = await axios.put(
        "/users/removemylike/" + id,
        { movie_id: myLikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removelike/" + myLikeId,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    console.log(id, myLikeId);
  };

  //dislike
  const addToDislike = async (id, myDislike, myDislikeId) => {
    setAddtoDislike(true);
    setAddtoLike(false);

    try {
      const res = await axios.put(
        "/users/addmydislike/" + id,
        { movie_id: myDislikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/dislike/" + myDislikeId,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/users/removemylike/" + id,
        { movie_id: myDislikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removelike/" + myDislikeId,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromDislike = async (id, myDislike, myDislikeId) => {
    setAddtoDislike(false);

    try {
      const res = await axios.put(
        "/users/removemydislike/" + id,
        { movie_id: myDislikeId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.put(
        "/movies/removedislike/" + myDislikeId,
        { user_id: singleUser._id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const playMusic = (id, audio, img) => {
    // setMusicId(id);
    //setMusicAudio(audio);
    // setPlayicon(!playicon);
    // document.querySelector("#audioPlayer" + id).play();
    // musicAll
    //   .filter((mu) => {
    //     if (mu._id !== id) {
    //       return mu;
    //     }
    //   })
    //   .map((i) => setPauseIcon(false));

    //document.querySelector("#audioPlayer" + id).play();
    var playPromise = document.querySelector("#audioPlayer" + id).play();
    //audioPlayer.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlayicon(!playicon);
          // setPlay(!playicon);
          // setMusicImg(AppUrl.base_url + img);
          document.querySelector("#audioPlayer" + id).play();
          //audioPlayer.current.play();
          //console.log(musicAudio);
          // Automatic playback started!
          // Show playing UI.
          // We can now safely pause video.

          //audioPlayer.current.pause();
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
          document.querySelector("#audioPlayer" + id).pause();
          //audioPlayer.current.pause();
        });
    }
    //console.log(musicAudio);
  };

  const pauseMusic = (id, audio, img) => {
    setPlayicon(!playicon);
    // setPlay(!playicon);
    // setMusicImg(AppUrl.base_url + img);
    //document.querySelector("#audioPlayer" + id).pause();
    document.querySelector("#audioPlayer" + id).pause();
    //audioPlayer.current.pause();
  };

  return (
    <>
      <div
        className="music_list_slider_card"
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-delay={index * 150}
        data-aos-duration="500"
        // data-aos-easing="ease-in-out"
      >
        <audio
          id={"audioPlayer" + item._id}
          src={AppUrl.base_url + item.video}
          preload="metadata"
          ref={audioPlayer}
          className="audio_player"
          style={{ display: "hidden" }}
        />
        <img src={AppUrl.base_url + item.imgSm} alt="" />
        <div className="music_list_slider_card_info">
          <p className="music_list_slider_card_name">{item.title}</p>
          <p className="music_list_slider_card_artist">{item.cast}</p>
        </div>
        {/* <audio src="horse.mp3" type="audio/mpeg" controls /> */}

        <div className="red_shade"></div>
        <div className="red_shade_info">
          <div className="red_shade_icons">
            {singleUser.myLike.find((elem) => {
              if (elem.movie_id === item._id) {
                return true;
              }
            }) ? (
              <>
                <AiFillHeart
                  className="red_shade_heart_icon"
                  onClick={() => {
                    removeFromLike(user_id, item, item._id);
                  }}
                />
              </>
            ) : (
              <>
                {addtoLike ? (
                  <>
                    <AiFillHeart
                      className="red_shade_heart_icon"
                      onClick={() => {
                        removeFromLike(user_id, item, item._id);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineHeart
                      className="red_shade_heart_icon"
                      onClick={() => {
                        addToLike(user_id, item, item._id);
                      }}
                    />
                  </>
                )}
              </>
            )}
            {/* <AiOutlineHeart className="red_shade_heart_icon" />{" "} */}
            {playicon ? (
              <>
                <FiPause
                  className="red_shade_play_icon"
                  onClick={() =>
                    pauseMusic(
                      item._id,
                      AppUrl.base_url + item.video,
                      item.imgSm
                    )
                  }
                />
              </>
            ) : (
              <>
                <FiPlay
                  className="red_shade_play_icon"
                  onClick={() =>
                    playMusic(
                      item._id,
                      AppUrl.base_url + item.video,
                      item.imgSm
                    )
                  }
                />
              </>
            )}
            {/* <FiPlay
                                    className="red_shade_play_icon"
                                    //   onClick={() => playMusic(item.id, item.video)}
                                  /> */}
            {/* <CgMore className="red_shade_more_icon" /> */}
            {singleUser.myDislike.find((elem) => {
              if (elem.movie_id === item._id) {
                return true;
              }
            }) ? (
              <div>
                <RiDislikeFill
                  className="red_shade_more_icon"
                  onClick={() => {
                    removeFromDislike(user_id, item, item._id);
                  }}
                />
              </div>
            ) : (
              <>
                {addtoDislike ? (
                  <>
                    <RiDislikeFill
                      className="red_shade_more_icon"
                      onClick={() => {
                        removeFromDislike(user_id, item, item._id);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <RiDislikeLine
                      className="red_shade_more_icon"
                      onClick={() => {
                        addToDislike(user_id, item, item._id);
                      }}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <div className="red_shade_name_info">
            <p className="red_shade_name">{item.title}</p>
            <p className="red_shade_artist">{item.cast}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMusicSearch;
