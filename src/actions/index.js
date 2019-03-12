import { SIGN_IN, FETCH_USER } from "./types";

import history from "utilis/history";
import { user } from "apis";

export const signIn = () => dispatch => {
  dispatch({
    type: SIGN_IN,
    payload: true
  });
  history.push("/profile");
};

export const fetchUser = () => {
  const response = user.get();

  return {
    type: FETCH_USER,
    payload: response
  };
};
