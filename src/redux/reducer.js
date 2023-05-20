import { combineReducers } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweets/tweetsSlice";
// import { filterReducer } from "./filter.js/filterSlice";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  //   filter: filterReducer,
});
