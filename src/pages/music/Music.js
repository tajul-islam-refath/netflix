import React, { useContext, useState, useEffect, useRef } from "react";
import MusicHero from "../../components/musicHero/MusicHero";
import MusicList from "../../components/musicList/MusicList";
import MusicPlayer from "../../components/musicPlayer/MusicPlayer";
import { getLists } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import "./music.scss";
import axios from "axios";

const Music = ({ singleUser }) => {
  const audioPlayer = useRef(); //   reference to our audio component

  const { lists, dispatch: listDispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(listDispatch);
  }, [listDispatch]);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(res);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
    return () => {
      setMovies([]); // This worked for me
    };
  }, []);

  const musicList = [
    {
      id: "1",
      title: "Let me drive",
      img: "https://cdn.pixabay.com/photo/2021/12/30/18/07/grey-heron-6904390_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2021/12/30/18/07/grey-heron-6904390_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
    },
    {
      id: "2",
      title: "Good bye",
      img: "https://cdn.pixabay.com/photo/2016/03/29/03/12/girl-1287375_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2016/03/29/03/12/girl-1287375_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    },
    {
      id: "3",
      title: "Sunshine",
      img: "https://cdn.pixabay.com/photo/2022/01/03/05/45/sunset-6911736_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2022/01/03/05/45/sunset-6911736_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
    },
    {
      id: "4",
      title: "Win the game",
      img: "https://cdn.pixabay.com/photo/2021/12/06/14/43/stars-6850515_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2021/12/06/14/43/stars-6850515_960_720.jpg",
      cast: "Rahman",
      video: "",
    },
    {
      id: "5",
      title: "Let there be carnage",
      img: "https://cdn.pixabay.com/photo/2022/01/02/04/37/animal-6909429_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2022/01/02/04/37/animal-6909429_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
    },
    {
      id: "6",
      title: "Maroon",
      img: "https://cdn.pixabay.com/photo/2021/11/16/18/10/nature-6801719_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2021/11/16/18/10/nature-6801719_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
    },
    {
      id: "7",
      title: "Lovely scene",
      img: "https://cdn.pixabay.com/photo/2020/02/06/18/43/santorini-4825173_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2020/02/06/18/43/santorini-4825173_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg",
    },
    {
      id: "8",
      title: "Youngstar",
      img: "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
    },
    {
      id: "9",
      title: "Beauty and beast",
      img: "https://cdn.pixabay.com/photo/2021/12/28/14/30/bird-6899457_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2021/12/28/14/30/bird-6899457_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg",
    },
    {
      id: "10",
      title: "Hollow dreams",
      img: "https://cdn.pixabay.com/photo/2021/11/28/15/31/cathedral-6830531_960_720.jpg",
      imgSm:
        "https://cdn.pixabay.com/photo/2021/11/28/15/31/cathedral-6830531_960_720.jpg",
      cast: "Rahman",
      video:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a",
    },
  ];

  const [playMusicId, setPlayMusicId] = useState(null);
  const [playMusicAudio, setPlayMusicAudio] = useState("");
  return (
    <>
      <div className="music_div">
        <MusicHero musics={movies} />

        {lists
          // eslint-disable-next-line array-callback-return
          .filter((i) => {
            if (i.type === "Music") {
              return i;
            }
          })
          .map((item) => (
            <MusicList
              key={item._id}
              marginTop={"-50px"}
              header={item.title}
              header_below={"Enjoy some new awesome music"}
              // eslint-disable-next-line array-callback-return
              musicList={movies.filter((m) => {
                if (m.type === "Music" && m.category === item._id) {
                  return m;
                }
              })}
              musicId={playMusicId}
              setMusicId={setPlayMusicId}
              musicAudio={playMusicAudio}
              setMusicAudio={setPlayMusicAudio}
              singleUser={singleUser}
              audioPlayer={audioPlayer}
              musicAll={movies.filter((m) => {
                if (m.type === "Music") {
                  return m;
                }
              })}
            />
          ))}

        {/* <MusicList
          marginTop={"-50px"}
          header={"New Releases For You"}
          header_below={"Enjoy some new awesome music"}
          musicList={musicList}
          musicId={playMusicId}
          setMusicId={setPlayMusicId}
          musicAudio={playMusicAudio}
          setMusicAudio={setPlayMusicAudio}
        />
        <MusicList
          marginTop={"50px"}
          header={"My List"}
          header_below={"Enjoy some new awesome music"}
          musicList={musicList}
          musicId={playMusicId}
          setMusicId={setPlayMusicId}
          musicAudio={playMusicAudio}
          setMusicAudio={setPlayMusicAudio}
        />
        <MusicList
          marginTop={"50px"}
          header={"Recommended For You"}
          header_below={"Enjoy some new awesome music"}
          musicList={musicList}
          musicId={playMusicId}
          setMusicId={setPlayMusicId}
          musicAudio={playMusicAudio}
          setMusicAudio={setPlayMusicAudio}
        /> */}
        <MusicPlayer
          // eslint-disable-next-line array-callback-return
          musicList={movies.filter((m) => {
            if (m.type === "Music") {
              return m;
            }
          })}
          musicId={playMusicId}
          setMusicId={setPlayMusicId}
          musicAudio={playMusicAudio}
          setMusicAudio={setPlayMusicAudio}
          audioPlayer={audioPlayer}
        />
      </div>
    </>
  );
};

export default Music;
