import { combineReducers } from "redux";
import { loginReducer } from "./reducers/login.reducer";

const rootReducer = combineReducers({
  loginReducers: loginReducer
});

export default rootReducer;
