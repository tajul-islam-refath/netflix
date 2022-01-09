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
import { useEffect, useState, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/preloader/Preloader";
import swal from "sweetalert";

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
const BlurScreen = lazy(() => import("./pages/blurscreen/BlurScreen"));
const OurStory = lazy(() => import("./pages/our-story/OurStory"));

const App = () => {
  const { pathname } = useLocation();

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
            <Navbar />
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
            element={<Home />}
          />
          {/* {user ? (
                <> */}
          <Route exact path="/watch/:id" element={<Watch />} />

          <Route exact path="/account" element={<Account />} />
          <Route exact path="/my-list" element={<MyList />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/popular" element={<Popular />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/billing-details" element={<BillingDetails />} />
          <Route
            exact
            path="/manage-payment-info"
            element={<ManagePaymentInfo />}
          />
          <Route exact path="/payment-picker" element={<PaymentPicker />} />
          <Route exact path="/change-plan" element={<ChangePlan />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/our-story" element={<OurStory />} />
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
            element={<Login />}
          />

          <Route
            path="/"
            // element={!user ? <Register /> : <Navigate to="/browse" />}
            element={<Register />}
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
