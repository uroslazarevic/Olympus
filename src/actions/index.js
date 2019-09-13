import { SIGN_IN, SIGN_OUT, FETCH_USER } from "./types";

import { history } from "utilis";
import { user } from "apis";

export const signUp = (data) => async (dispatch) => {
  console.log("signUp data", data);
};

export const signIn = (response) => (dispatch) => {
  const { token, refreshToken, userData } = response.data.login;
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("userData", JSON.stringify(userData));

  dispatch({
    type: SIGN_IN,
    payload: true,
  });
  history.push("/profile");
};

export const signOut = () => {
  localStorage.clear();
  history.push("/");

  return {
    type: SIGN_OUT,
    payload: false,
  };
};

export const fetchUser = () => {
  const response = user.get();

  return {
    type: FETCH_USER,
    payload: response,
  };
};
