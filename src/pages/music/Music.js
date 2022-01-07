import React, { useState } from "react";
import MusicHero from "../../components/musicHero/MusicHero";
import MusicList from "../../components/musicList/MusicList";
import MusicPlayer from "../../components/musicPlayer/MusicPlayer";
import "./music.scss";

const Music = () => {
  return (
    <>
      <div className="music_div">
        <MusicHero />
        <MusicList
          marginTop={"-50px"}
          header={"New Releases For You"}
          header_below={"Enjoy some new awesome music"}
        />
        <MusicList
          marginTop={"50px"}
          header={"My List"}
          header_below={"Enjoy some new awesome music"}
        />
        <MusicList
          marginTop={"50px"}
          header={"Recommended For You"}
          header_below={"Enjoy some new awesome music"}
        />
        <MusicPlayer />
      </div>
    </>
  );
};

export default Music;
