import { SIGN_IN, SIGN_OUT, FETCH_USER, SIGN_UP } from "./types";

import { history } from "utilis";
import { user } from "apis";

export const signUp = (id) => {
  history.push("/profile/settings", { id });
  return { type: SIGN_UP };
};

export const signIn = (response, redirectPage) => (dispatch) => {
  const { token, refreshToken, userData } = response.data.login;
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("userData", JSON.stringify(userData));

  dispatch({
    type: SIGN_IN,
    payload: true,
  });
  if (redirectPage === "/profile/settings") {
    return history.push("/profile/settings", { id: response.data.login.userData.id });
  }
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
