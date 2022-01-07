import React from "react";
//import ListItem from "../../components/listItem/ListItem";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./series.scss";
import Footer from "../../components/footer/Footer";
import LazyLoad from "react-lazyload";

const Series = () => {
  const pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU3wfmKprNm4uMUtAXzo9_wdj5BGUCFf89ZLzqV4gfgIxPySCtWQ3WNdQ73P2JfosOibLyt_f_oobDFURBe5vxGKfOTr.webp?r=60e";
  const title_pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWD1ZWdi8Sy9zxHKOxxWQ3uqIc6ch5-P35Kk8cjm823l9TtGv5g8K5JJ3_G_O-JEprJfJ975HcjiHVk9Z-J_TL42AunMz9JM2BSf.webp?r=430";
  const des =
    "This 21st-century edition of animated adventures charts the exploits of Peter Parker, who becomes Spider-Man as a result of a radioactive spider bite.";
  const video =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4";

  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        <Featured
          index={5}
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
          type={"series"}
        />
        <List list_header={"Korean TV Shows"} />
        <LazyLoad offset={50} once={true}>
          <List list_header={"Award-winning TV Shows"} />
          <List list_header={"Family TV Shows"} />
          <List list_header={"Indian TV Shows"} />
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

export default Series;
