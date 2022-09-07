import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchExchangeAction = createAsyncThunk(
  "exchange/Rates",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const {base,quote} = payload
// const quote = "AUD"
    try {
      const { data } = await axios.get(
        `https://v6.exchangerate-api.com/v6/aa37c769904a76ff4303f70e/pair/${base}/${quote}`
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);


const exchangeSlices = createSlice({
  name: "exchange",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchExchangeAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchExchangeAction.fulfilled, (state, action) => {
      state.rate = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchExchangeAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.rate = undefined;
    });
   
  },
});

export default exchangeSlices.reducer;
