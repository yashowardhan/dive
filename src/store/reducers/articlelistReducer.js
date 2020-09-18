import { FETCH_ARTICLES } from "../actions/fetchArticles";
import { FETCH_ARTICLES_BUSINESS } from "../actions/fetchArticlesBusiness";
import { FETCH_ARTICLES_PRODUCT } from "../actions/fetchArticlesProduct"; 
import { FETCH_ARTICLES_TAGS } from "../actions/fetchArticlesTags";
import { FETCH_BOOKMARKED_ARTICLES } from "../actions/fetchBookmarkedArticles";
import { FETCH_LIKED_ARTICLES } from "../actions/fetchLikedArticles";
import { FETCH_FOLLOWED_ARTICLES } from "../actions/fetchFollowedArticles";

// Recieve type and payload from action and return payload.
// Use a switch since it's more readable.

const articleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES:
      return payload;
    case FETCH_ARTICLES_BUSINESS:
      return payload;
    case FETCH_ARTICLES_PRODUCT:
      return payload;
    case FETCH_ARTICLES_TAGS:
      return payload;
    case FETCH_BOOKMARKED_ARTICLES:
      return payload;
    case FETCH_LIKED_ARTICLES:
      return payload;
    case FETCH_FOLLOWED_ARTICLES:
      return payload;
    default:
      return state;
  }
};

export default articleReducer;
