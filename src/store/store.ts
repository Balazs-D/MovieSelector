import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "../AppSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

// const persistConfig = {
//   key: "movie",
//   storage,
// };
//
// const reducers = combineReducers({ moviesSlice: moviesSlice.reducer });
//
// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: { moviesSlice: moviesSlice.reducer },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
