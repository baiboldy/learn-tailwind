import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { todoApi } from "../services/todo.service";
import counteSlice from "./counte.slice";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubReducer } from "./github/github.slice";

export const store = configureStore({
  reducer: {
    counter: counteSlice,
    github: githubReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todoApi.middleware)
      .concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
