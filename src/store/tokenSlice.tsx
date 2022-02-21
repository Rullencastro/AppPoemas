import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: String = "";

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<String>) => {
      return action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
