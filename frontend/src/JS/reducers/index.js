import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import reservReducer from "./reservReducer"
const rootReducers = combineReducers({ userReducer, alertReducer ,reservReducer});
export default rootReducers;
