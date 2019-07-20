import { SIGN_IN, SIGN_OUT } from "actions/types";

const initialState = {
  signedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signedIn: action.payload };

    case SIGN_OUT:
      return { ...state, signedIn: action.payload };

    default:
      return state;
  }
};

// box-shadow: 0 0 1px 1px rgba(20,23,28,0.1), 0 3px 1px 0 rgba(20,23,28,0.1);
