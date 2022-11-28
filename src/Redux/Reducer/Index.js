import { combineReducers } from "redux";
import { fetchDetailReducer } from "./ReducerCreator";
const Reducer = combineReducers({ allDetails: fetchDetailReducer });
export default Reducer;
