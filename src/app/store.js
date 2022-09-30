import { configureStore } from "@reduxjs/toolkit";
import { getUserInfo } from "../hooks/auth";
import { rootReducer } from "./rootReducer";

const preloadedState = {
  auth: { userDetails: getUserInfo() },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
