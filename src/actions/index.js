import { SIGN_IN, SIGN_OUT, FETCH_USER } from "./types";

import { history } from "utilis";
import { user } from "apis";

export const signIn = () => dispatch => {
  dispatch({
    type: SIGN_IN,
    payload: true
  });
  history.push("/profile");
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: false
  };
};

export const fetchUser = () => {
  const response = user.get();

  return {
    type: FETCH_USER,
    payload: response
  };
};
