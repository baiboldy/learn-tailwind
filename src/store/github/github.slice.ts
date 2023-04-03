import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk";

interface GithubState {
  favorities: string[];
}

const initialState: GithubState = {
  favorities: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorities.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorities));
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favorities = state.favorities.filter(
        (favo) => favo !== action.payload
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorities));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
