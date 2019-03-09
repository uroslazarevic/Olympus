import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer
  // searchedTerms: SearchedTerms
});

export default rootReducer;
