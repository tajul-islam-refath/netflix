import axios from "axios";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  getSingleUserFailure,
  getSingleUserStart,
  getSingleUserSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

//get single user
export const getSingleUser = async (user, id, dispatch) => {
  dispatch(getSingleUserStart());
  try {
    const res = await axios.get("/users/find/" + id, user);
    dispatch(getSingleUserSuccess(res.data));
  } catch (err) {
    dispatch(getSingleUserFailure());
  }
};

//update
export const updateUser = async (user, id, dispatch) => {
  //dispatch(updateUserStart());
  try {
    const res = await axios.put("/users/" + id, user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    //dispatch(updateUserFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
