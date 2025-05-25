import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    entries: [],
  },
  reducers: {
    addToHistory(state, action) {
      state.entries.unshift(action.payload);
      if (state.entries.length > 10) {
        state.entries.pop();
      }
    },
    clearHistory(state) {
      state.entries = [];
    },
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;
