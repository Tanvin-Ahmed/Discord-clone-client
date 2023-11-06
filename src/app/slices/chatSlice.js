import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    chosenChatDetails: null,
    chatType: null,
    loading: false,
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
    toggleChatLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },
});
