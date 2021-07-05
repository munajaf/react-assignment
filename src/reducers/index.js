import { combineReducers } from "redux";
import DefaultReducer from "./DefaultReducer";

const reducers = combineReducers({
  defaultData: DefaultReducer
})

export default reducers;

