import { FETCH_USER } from "actions/types";

import mainInfo from "data/mainInfo";

const initialState = {
  basicInfo: {},
  mainInfo
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, basicInfo: action.payload.data.results[0] };

    default:
      return state;
  }
};
