import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/browse" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
