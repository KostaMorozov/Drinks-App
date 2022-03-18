import { combineReducers } from "redux";
import DrinksReducer from "./DrinksReducer";

const reducers = combineReducers({
  cocktails: DrinksReducer,
});

export default reducers;
