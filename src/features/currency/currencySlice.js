import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchConversion = createAsyncThunk(
  "currency/fetchConversion",
  async ({ from, to, amount }, thunkAPI) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;

      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
      );

      const rates = response.data.conversion_rates;
      const targetValue = rates[to];

      if (!targetValue) {
        return thunkAPI.rejectWithValue("Выбранная валюта недоступна");
      }
      console.log(response.data.result);
      return targetValue * amount;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    amount: 1,
    from: "USD",
    to: "EUR",
    result: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setTo(state, action) {
      state.from = action.payload;
    },
    setFrom(state, action) {
      state.to = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversion.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchConversion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = action.payload;
      })
      .addCase(fetchConversion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setAmount, setFrom, setTo } = currencySlice.actions;

export default currencySlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchConversion = createAsyncThunk(
//   "currency/FetchConversion",
//   async ({ from, to, amount }, thunkAPI) => {
//     try {
//       const API_KEY = import.meta.env.VITE_API_KEY;

//       const response = await axios.get(
//         `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
//       );

//       const rates = response.data.conversion_rates;
//       const targetValue = rates[to];

//       if (!targetValue) {
//         return thunkAPI.rejectWithValue("Выбранная валюта недоступна");
//       }

//       return targetValue * amount;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const currencySlice = createSlice({
//   name: "currency",
//   initialState: {
//     amount: 1,
//     from: "USD",
//     to: "EUR",
//     result: null,
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     setAmount(state, action) {
//       state.amount = action.payload;
//     },
//     setFrom(state, action) {
//       state.from = action.payload;
//     },
//     setTo(state, action) {
//       state.to = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchConversion.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchConversion.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.result = action.payload;
//       })
//       .addCase(fetchConversion.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export const { setAmount, setFrom, setTo } = currencySlice.actions;

// export default currencySlice.reducer;
