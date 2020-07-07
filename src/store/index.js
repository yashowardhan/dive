import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import postlistReducer from "./reducers/postlistReducer";
import userReducer from "./reducers/userReducer";
import articleReducer from "./reducers/articlelistReducer";
import topicReducer from "./reducers/topicReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

//Combine our reducers and change property names
const allReducers = combineReducers({
  articles: articleReducer,
  topics: topicReducer,
  posts: postlistReducer,
  users: userReducer,
});

//Create initial State.
const initialState = {
  articles: [],
  topics: [],
  users: [],
  posts: { name: "TERMINATOR 2" },
};
//Create out store and set our reducers, state, and middleware.
const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
