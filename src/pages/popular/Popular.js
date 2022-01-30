import React, { useContext, useEffect, useState } from "react";
//import ListItem from "../../components/listItem/ListItem";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./popular.scss";
import Footer from "../../components/footer/Footer";
import LazyLoad from "react-lazyload";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists } from "../../context/listContext/apiCalls";
import axios from "axios";

const Popular = () => {
  const { lists, dispatch: listDispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(listDispatch);
  }, [listDispatch]);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/random", {
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

  const pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUg2egbEe8xG5Fod6IeBEbIlLRZIqvRBJjFOAjsPBfftu8b0QJfzEIv4D1D-u73OYyo85uWb_vpZ08CprgpwfWqShzAA-bfL6Vexl60VeG4o9gBU5A.webp?r=cb2";
  const title_pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSSs_2_CgAo98iwwhSL33YLjkruq9kR9mcgLBE3YxTACmKL-82xtt1vYaU8vRkvAv0ZoEMl8vwPzxHmPd2gAkFScOuabkeR_oCei19BxR5iGG9zee8Lj0WwrLAqSih9MZu8I8bkNpBs7xwme0BYqOwdcCP4PvnpeDe-TZ1VwT6Vr.webp?r=095";
  const des =
    "As a powerful mage joins the hunt for Ciri, she cuts a deal with Vesemir over his extraordinary discovery. Geralt explores the mystery of the monoliths.";
  const video =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4";
  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        {movies
          // eslint-disable-next-line array-callback-return
          .filter((i) => {
            if (i.type === "Series" || i.type === "Movie") {
              return i;
            }
          })
          .map((item) => (
            <Featured
              key={item._id}
              index={4}
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
              movies={item}
            />
          ))}
        {lists
          // eslint-disable-next-line array-callback-return
          .filter((i) => {
            if (i.type === "Popular") {
              return i;
            }
          })
          .map((item) => (
            <List key={item._id} list_header={item.title} list_id={item._id} />
          ))}
        {/* <List list_header={"New on Icinema"} />
        <LazyLoad offset={50} once={true}>
          <List list_header={"Coming This Week"} />
          <List list_header={"Coming Next Week"} />
          <List list_header={"Worth The Wait"} />
        </LazyLoad> */}
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

export default Popular;
