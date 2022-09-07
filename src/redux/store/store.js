import { configureStore } from "@reduxjs/toolkit";
import exchange from "../slices/exchangeSlice";
const store = configureStore({
  reducer: {
    exchange : exchange,

  },
});

export default store;
