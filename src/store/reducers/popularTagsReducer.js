import { FETCH_ARTICLES } from "../actions/fetchArticles";
import { FETCH_ARTICLES_BUSINESS } from "../actions/fetchArticlesBusiness";
import { FETCH_ARTICLES_PRODUCT } from "../actions/fetchArticlesProduct"; 
import { FETCH_ARTICLES_TAGS } from "../actions/fetchArticlesTags";
import { FETCH_TAGS } from "../actions/fetchTags";
import { FETCH_POPULAR_TAGS } from "../actions/fetchPopularTags";
import { FETCH_PICK_OF_DAY } from "../actions/fetchPickOfTheDay";
// Recieve type and payload from action and return payload.
// Use a switch since it's more readable.

const popularTagsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POPULAR_TAGS:
      return payload;
    default:
      return state;
  }
};

export default popularTagsReducer;
