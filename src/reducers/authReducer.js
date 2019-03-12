import { SIGN_IN } from "actions/types";

const initialState = {
  signedIn: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signedIn: action.payload };

    default:
      return state;
  }
};
