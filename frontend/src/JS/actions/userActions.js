import {
  DELETE_USER,
  EDIT_USER,
  FAIL,
  GET_CURRENT,
  GET_USERS,
  LOADING,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from "../actionTypes/userAcTypes";
import axios from "axios";
import { alertErrors } from "./alertActions";
import AlertErrors from "../../components/alertErrors/AlertErrors";

/******************************-------Register Action-------***********************/

export const registerUser = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  console.log(newUser);
  try {
    const res = await axios.post("/api/user/register", newUser);

    console.log(newUser);

    dispatch({ type: SIGNUP, payload: res.data });
    navigate("/profile");
    dispatch(AlertErrors((res.data.msg, "success")));
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alertErrors(el.msg, "error"));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

/*******************************--------Login Action---------************************/

export const LoginUser = (user, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alertErrors(el.msg, "error"));
    });

    dispatch({ type: FAIL, payload: error.response.data });
  }
};
/***************************************----get_Current Action*************************************/
export const getCurrent = () => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("/api/user/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
    // console.log("aaaaaa", res.data);
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
/************************************-----get users----************************************** */
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/user/getusers");
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
/*********************LOGOUT************************** */
export const logout = () => {
  return { type: LOGOUT };
};

/****************edit***************** */
export const EditUser = (id, updatedUser) => async (dispatch) => {
  dispatch({ type: LOADING });

  try {
    await axios.put(`/api/user/putuser/${id}`, updatedUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await axios.delete(`/api/user/deleteuser/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
