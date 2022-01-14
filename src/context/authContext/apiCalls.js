import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.success("Signing in...");
    // setTimeout(() => {
    //   window.location.href = "/browse";
    // }, 3000);
  } catch (err) {
    dispatch(loginFailure());
    toast.error("Incorrect username or password");
  }
};
