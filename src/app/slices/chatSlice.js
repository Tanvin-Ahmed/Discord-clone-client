import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    chosenChatDetails: null,
    chatType: null,
  },
  reducers: {
    setChosenChatDetails: (state, action) => {
      state.chosenChatDetails = action.payload.chatDetails;
      state.chatType = action.payload.chatType;
      state.messages = [];
    },

    setMessage: (state, action) => {
      state.messages = action.payload;
    },
  },
});
