import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrencies",
  async (_, thunkAPI) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;

      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`
      );
      console.log("Symbols API response:", response.data);
      if (!response.data.result === "success") {
        return thunkAPI.rejectWithValue(response.data.error || "API error");
      }
      return response.data.supported_codes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    currencies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currencies = action.payload;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default currenciesSlice.reducer;
