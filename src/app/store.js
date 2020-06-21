import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import rootReducer from "../redux/reducers/index";

export default configureStore({
  reducer: {
    //counter: counterReducer,
    rootReducer,
  },
});
