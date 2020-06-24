import { FETCH_ARTICLES } from "../actions/fetchArticles";

// Recieve type and payload from action and return payload.
// Use a switch since it's more readable.

const articleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES:
      return payload;
    default:
      return state;
  }
};

export default articleReducer;
