import { UPDATE_POSTS } from "../actions/updatePosts";

const postlistReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_POSTS:
      return { payload };
    default:
      return state;
  }
};

export default postlistReducer;
