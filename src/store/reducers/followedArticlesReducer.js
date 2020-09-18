import { FETCH_FOLLOWED_ARTICLES } from "../actions/fetchFollowedArticles";

const followedArticlesReducer = (state = [], { type, payload }) => {
    switch (type) {
      case FETCH_FOLLOWED_ARTICLES:
        return payload;
      default:
        return state;
    }
  };
  
  export default followedArticlesReducer;