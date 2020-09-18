import { FETCH_LIKED_ARTICLES } from "../actions/fetchLikedArticles";


const likedArticlesReducer = (state = [], { type, payload }) => {
    switch (type) {
    case FETCH_LIKED_ARTICLES:
        return payload;
      default:
        return state;
    }
};
  
export default likedArticlesReducer;