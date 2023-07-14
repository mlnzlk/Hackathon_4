import { configureStore } from "@reduxjs/toolkit";
import classListReducer from "./reducer/classListSlice";

export const store = configureStore({
  reducer: {
    classList: classListReducer,
  },
});
