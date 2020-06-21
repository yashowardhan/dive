import { combineReducers } from "redux";
// import courses from "./courseReducer";
import suggestion from "./suggestionReducer";
// import authors from "./authorReducer";
// import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  //   courses,
  //   authors,
  //   apiCallsInProgress
  suggestion,
});

export default rootReducer;
