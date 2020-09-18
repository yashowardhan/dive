import { FETCH_BOOKMARKED_ARTICLES } from "../actions/fetchBookmarkedArticles";

const bookmarkedArticlesReducer = (state = [], { type, payload }) => {
    switch (type) {
      case FETCH_BOOKMARKED_ARTICLES:
        return payload;
      default:
        return state;
    }
  };
  
  export default bookmarkedArticlesReducer;