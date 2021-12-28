import "./App.scss";
//import Home from "./pages/home/Home";
//import Register from "./pages/register/Register";
//import Watch from "./pages/watch/Watch";
//import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
///import Account from "./pages/account/Account";
//import MyList from "./pages/mylist/MyList";
//import Series from "./pages/series/Series";
//import Movies from "./pages/movies/Movies";
//import Popular from "./pages/popular/Popular";
import BottomNav from "./components/bottomNav/BottomNav";
//import Details from "./pages/details/Details";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./functions/ScrollToTop";
import { useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/preloader/Preloader";

const Home = lazy(() => import("./pages/home/Home"));
const Register = lazy(() => import("./pages/register/Register"));
const Watch = lazy(() => import("./pages/watch/Watch"));
const Login = lazy(() => import("./pages/login/Login"));
const Account = lazy(() => import("./pages/account/Account"));
const MyList = lazy(() => import("./pages/mylist/MyList"));
const Series = lazy(() => import("./pages/series/Series"));
const Movies = lazy(() => import("./pages/movies/Movies"));
const Popular = lazy(() => import("./pages/popular/Popular"));
const Details = lazy(() => import("./pages/details/Details"));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop />
      {pathname !== "/login" ? (
        pathname !== "/" ? (
          <>
            <Navbar />
            <BottomNav />
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/browse" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Suspense>

      {pathname !== "/login" ? (
        pathname !== "/" ? (
          <>
            <Footer />
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
};

export default App;
