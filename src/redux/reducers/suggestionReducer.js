import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function suggestionReducer(
  state = initialState.courses,
  action
) {
  switch (action.type) {
    case types.CREATE_SUGGESTION_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_SUGGESTION_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_SUGGESTION_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
}
