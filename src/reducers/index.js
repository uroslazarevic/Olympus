import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import socketReducer from "./socketReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  socketData: socketReducer,
});

export default rootReducer;
