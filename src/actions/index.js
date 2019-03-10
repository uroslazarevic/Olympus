import { SIGN_IN } from "./types";
import history from "utilis/history";

export const signIn = () => dispatch => {
  dispatch({
    type: SIGN_IN,
    payload: true
  });
  history.push("/profile");
};
