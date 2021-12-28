import React from "react";
//import ListItem from "../../components/listItem/ListItem";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./movies.scss";
import Footer from "../../components/footer/Footer";
import LazyLoad from "react-lazyload";

const Movies = () => {
  const pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR5n93_UPBpOPkJIyuzSCMhERS_O7ONE64IFI0qHG32uGoHMH4Ysfn-zLqbHm6tuZ_TCRinolz1_N604T8o2Uy97Ldau.webp?r=696";
  const title_pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcRgQpWkWM3asNXbectmEXTWz27r5vpRE7x_y1qf9Kxi9Wy2sQ3GNvEX3DkPd-kykTtvS7WJGdJ-Cwq_mq5KHPvOyNgmDU5GY5PlW-WTBLXHOADpGxxO3OMkyqZIjO8X5EZu7qSIP1VPO1KB7JlXVq7XIt7uxgbJd7QqQ7z-7rmkhg.webp?r=0c6";
  const des =
    "In 1980s Naples, young Fabietto pursues his love for football as family tragedy strikes, shaping his uncertain but promising future as a filmmaker.";
  const video =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        <Featured
          index={2}
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
        <List list_header={"Recently Added"} />
        <LazyLoad offset={50} once={true}>
          <List list_header={"Trending Now"} />
          <List list_header={"Indian Movies"} />
          <List list_header={"Comedy Movies"} />
        </LazyLoad>
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

export default Movies;
