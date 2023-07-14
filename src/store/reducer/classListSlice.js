import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classList: [],
};

const classListSlice = createSlice({
  name: "classList",
  initialState,
  reducers: {
    setClassList: (state, action) => {
      state.classList = action.payload;
    },
    removeClass: (state, action) => {
      state.classList.splice(action.payload, 1);
    },
  },
});

export const { setClassList, removeClass } = classListSlice.actions;

export default classListSlice.reducer;
