import { chatSlice } from "../slices/chatSlice";

export const ChatType = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

const { actions: chatActions } = chatSlice;

export const setChosenChatDetails = (chatDetails, type) => (dispatch) => {
  dispatch(chatActions.setChosenChatDetails({ chatDetails, chatType: type }));
};

export const setMessage = (message) => (dispatch) => {
  dispatch(chatActions.setMessage(message));
};

export const toggleChatLoading = () => (dispatch) => {
  dispatch(chatActions.toggleChatLoading());
};
