import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IPoem {
  title: string;
  content: string;
  url: string;
  poet: {
    name: string;
    url: string;
  };
}

type PoemState = {
  poems: IPoem[];
};

const initialState: PoemState = {
  poems: [],
};

export const poemSlice = createSlice({
  name: "poems",
  initialState,
  reducers: {
    addPoem: (state, action: PayloadAction<IPoem>) => {
      state.poems.push(action.payload);
    },
    setPoems: (state, action) => {
      state.poems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPoems } = poemSlice.actions;
export default poemSlice.reducer;

export const fetchPoems = createAsyncThunk(
  "poems/fetchPoems",
  async (arg, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const token = state.token;
    const response = await fetch("/api/poems/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    thunkAPI.dispatch(setPoems(responseJson));
  }
);
