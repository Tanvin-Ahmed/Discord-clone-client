import { combineReducers } from "@reduxjs/toolkit";
import { alertSlice } from "./slices/alertSlice";
import { chatSlice } from "./slices/chatSlice";
import { friendsSlice } from "./slices/friendsSlice";
import { roomSlice } from "./slices/roomSlice";
import { authSlice } from "./slices/userSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  alert: alertSlice.reducer,
  friends: friendsSlice.reducer,
  chat: chatSlice.reducer,
  room: roomSlice.reducer,
});
