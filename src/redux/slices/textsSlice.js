import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};
const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    setTexts: (state, action) => {
      state.texts = action.payload;
    },
  },
});

export const { setTexts } = textsSlice.actions;
export default textsSlice.reducer;
