import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import postlistReducer from "./reducers/postlistReducer";
import userReducer from "./reducers/userReducer";
import articleReducer from "./reducers/articlelistReducer";
import followedArticlesReducer from "./reducers/followedArticlesReducer";
import likedArticlesReducer from "./reducers/likedArticlesReducer";
import bookmarkedArticlesReducer from "./reducers/bookmarkedArticlesReducer";
import tagsReducer from "./reducers/tagsReducer";
import popularTagsReducer from "./reducers/popularTagsReducer";
import pickOfDayReducer from "./reducers/pickOfDayReducer";
import topicReducer from "./reducers/topicReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

//Combine our reducers and change property names
const allReducers = combineReducers({
  articles: articleReducer,
  topics: topicReducer,
  posts: postlistReducer,
  users: userReducer,
  followedArticles: followedArticlesReducer,
  bookmarkedArticles: bookmarkedArticlesReducer,
  likedArticles: likedArticlesReducer,
  tags: tagsReducer,
  popularTags: popularTagsReducer,
  pickOfDay: pickOfDayReducer,
});

//Create initial State.
const initialState = {
  articles: [],
  topics: [],
  users: [],
  tags: [],
  popularTags: [],
  pickOfDay: {},
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
