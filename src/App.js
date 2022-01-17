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
import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState, Suspense, lazy, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/preloader/Preloader";
import swal from "sweetalert";
import { AuthContext } from "./context/authContext/AuthContext";

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
const BillingDetails = lazy(() =>
  import("./pages/billingDetails/BillingDetails")
);
const ManagePaymentInfo = lazy(() =>
  import("./pages/manage-payment-info/ManagePaymentInfo")
);
const PaymentPicker = lazy(() =>
  import("./pages/payment-picker/PaymentPicker")
);
const ChangePlan = lazy(() => import("./pages/changePlan/ChangePlan"));
const Music = lazy(() => import("./pages/music/Music"));
const Privacy = lazy(() => import("./pages/privacy/Privacy"));
const Terms = lazy(() => import("./pages/terms/Terms"));
const Search = lazy(() => import("./pages/search/Search"));
const BlurScreen = lazy(() => import("./pages/blurscreen/BlurScreen"));
const OurStory = lazy(() => import("./pages/our-story/OurStory"));

const App = () => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  const [searchTerms, setSearchTerms] = useState("");

  const [searchPlaceHolder, setSearchPlaceHolder] = useState("");

  useEffect(() => {
    if (pathname === "/music") {
      setSearchPlaceHolder("Search by Music");
    } else if (pathname === "/search") {
      setSearchPlaceHolder(searchPlaceHolder);
    } else {
      setSearchPlaceHolder("Search by Movie/Series");
    }
  }, [pathname, searchPlaceHolder]);

  //const [location_success, setLocationSuccess] = useState(false);
  const [countryName, setCountryName] = useState("");

  const findMyState = () => {
    // const success = (position) => {
    //   const latitude = position.coords.latitude;
    //   const longitude = position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en`;

    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCountryName(data.countryName);

        // if (data.countryName !== "Bangladesh") {
        //   swal(
        //     "The contents are not accessible from " + data.countryName,
        //     "Sorry for the inconvenience!",
        //     "error"
        //   );
        // }
      });

    //   console.log(position);
    //   setLocationSuccess(true);
    // };

    // const error = () => {
    //   console.log("Error Occured");
    //   setLocationSuccess(false);
    // };

    // navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    findMyState();
  }, []);

  //const user = true;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop />
      {pathname !== "/login" ? (
        pathname !== "/" ? (
          <>
            {/* {user && (
              <> */}
            <Navbar
              searchTerms={searchTerms}
              setSearchTerms={setSearchTerms}
              searchPlaceHolder={searchPlaceHolder}
              setSearchPlaceHolder={setSearchPlaceHolder}
            />
            <BottomNav />
            {/* </>
            )} */}
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {/* {countryName === "Bangladesh" ? (
        <> */}
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route
            exact
            path="/browse"
            // element={user ? <Home /> : <Navigate to="/login" />}
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          {/* {user ? (
                <> */}
          <Route
            exact
            path="/watch/:id"
            element={user ? <Watch /> : <Navigate to="/login" />}
          />

          <Route
            exact
            path="/account"
            element={user ? <Account /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/my-list"
            element={user ? <MyList /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/series"
            element={user ? <Series /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/movies"
            element={user ? <Movies /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/popular"
            element={user ? <Popular /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/details/:id"
            element={user ? <Details /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/billing-details"
            element={user ? <BillingDetails /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/manage-payment-info"
            element={user ? <ManagePaymentInfo /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/payment-picker"
            element={user ? <PaymentPicker /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/change-plan"
            element={user ? <ChangePlan /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/music"
            element={user ? <Music /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/privacy"
            element={user ? <Privacy /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/terms"
            element={user ? <Terms /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/our-story"
            element={user ? <OurStory /> : <Navigate to="/login" />}
          />

          <Route
            exact
            path="/search"
            element={
              user ? (
                <Search
                  searchTerms={searchTerms}
                  setSearchTerms={setSearchTerms}
                  searchPlaceHolder={searchPlaceHolder}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* </>
              ) : (
                <>
                  <Route path="*" element={<Navigate to="/login" />} />
                </>
              )} */}

          <Route
            exact
            path="/login"
            // element={!user ? <Login /> : <Navigate to="/browse" />}
            element={!user ? <Login /> : <Navigate to="/browse" />}
          />

          <Route
            path="/"
            // element={!user ? <Register /> : <Navigate to="/browse" />}
            element={!user ? <Register /> : <Navigate to="/browse" />}
          />
        </Routes>
      </Suspense>
      {/* </>
      ) : (
        <>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route exact path="/browse" element={<BlurScreen />} />
              <Route exact path="/watch/:id" element={<BlurScreen />} />

              <Route exact path="/account" element={<BlurScreen />} />
              <Route exact path="/my-list" element={<BlurScreen />} />
              <Route exact path="/series" element={<BlurScreen />} />
              <Route exact path="/movies" element={<BlurScreen />} />
              <Route exact path="/popular" element={<BlurScreen />} />
              <Route exact path="/details/:id" element={<BlurScreen />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Register />} />
            </Routes>
          </Suspense>
        </>
      )} */}

      {pathname !== "/login" ? (
        pathname !== "/" ? (
          // <>{user && <Footer />}</>
          <Footer />
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
