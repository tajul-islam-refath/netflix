import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import Footer from "../../components/footer/Footer";
import LazyLoad from "react-lazyload";

const Home = () => {
  const pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQiIBJXiMiiUS9zi_1pBO1NF-kBzmpZfw2IkNs_Uh6cWYQestVnV4Wy7vQDXdFHdoPjQp4JNFCySFpoU6yEeBSOh8JM5.webp?r=46a";
  const title_pic =
    "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYpqZvBwvi3-B0lFPP03cIsbLezXq4S8cby2lgSoDOUPjLulJnN2YKGPACzjKoq4OOkQJwOcPj_c2CWQLPDghw5OiRpWsnkC2SaP.webp?r=e3b";
  const des =
    "In 1981 Gotham City, a struggling, mentally ill comic battles to be seen. His life takes a dark, gut-wrenching turn after he lashes back at attackers.";
  const video =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4";

  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        <Featured
          index={1}
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
          genre={"Action, Scary"}
        />
        <List list_header={"Continue Watching"} />
        <LazyLoad offset={50} once={true}>
          <List list_header={"Action Movies"} />
          <List list_header={"Horror Movies"} />
          <List list_header={"Family Movies"} />
          <List list_header={"K-Dramas"} />
          <List list_header={"Anime"} />
          <List list_header={"Super Natural Soaps"} />
          <List list_header={"Recently Added"} />
        </LazyLoad>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
