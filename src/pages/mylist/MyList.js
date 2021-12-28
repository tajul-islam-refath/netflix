import React from "react";
//import ListItem from "../../components/listItem/ListItem";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./mylist.scss";
import Footer from "../../components/footer/Footer";
import LazyLoad from "react-lazyload";

const MyList = () => {
  const pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQS96h1QM7IhWjzaOOECOgvAXWfbZzj_quaAFhZc7_9wfJeh_WRyE0RihNoaN5NAiarwfaaFF_Y5w1XiUITsI1R_6ayV.webp?r=5ef";
  const title_pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbFdNS9Iu-t-VA2hwf_uWc8WNjFT-hSn5HzEZMiqVSxG-WuJMdL6pCOuFxAvCShH9hVn1BHpQK2KZpGApOJmiIEnDDMbg9DJI1A.webp?r=5b1";
  const des =
    "Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.";
  const video =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4";
  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        <Featured
          index={3}
          pic={pic}
          title_pic={title_pic}
          des={des}
          video={video}
          year={"2021"}
          age={"18+"}
          time={"1h 30m"}
          cast={"Ronald, Shreya"}
          director={"Ronald"}
          writer={"Ronald"}
          genre={"Action, Comedy"}
        />
        <List list_header={"TV Shows"} />
        <LazyLoad offset={50} once={true}>
          <List list_header={"Movies"} />
        </LazyLoad>
        {/* <List />
        <List /> */}
      </div>
      {/* <div className="mylist">
        <Navbar />

        <div className="mylist_main_container">
          <p>My List</p>
          <div className="mylist_container">
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
};

export default MyList;
