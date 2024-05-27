import { configureStore } from "@reduxjs/toolkit";
import textsSlice from "../slices/textsSlice";

const store = configureStore({
  reducer: { texts: textsSlice },
});

export default store;
