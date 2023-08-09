import { configureStore } from "@reduxjs/toolkit";
import classListReducer from "./reducer/classListSlice";
import languageReducer from "./reducer/languageSlice";

export const store = configureStore({
  reducer: {
    classList: classListReducer,
    language: languageReducer,
  },
});
