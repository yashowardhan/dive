import { FETCH_TOPICS } from "../actions/fetchTopics";

// Recieve type and payload from action and return payload.
// Use a switch since it's more readable.

const topicReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_TOPICS:
      return payload;
    default:
      return state;
  }
};

export default topicReducer;
