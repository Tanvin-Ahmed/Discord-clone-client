import { setMessage } from "../app/actions/chatActions";
import { store } from "../app/store";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find id of user from token and id from active conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?._id;

  if (receiverId && userId) {
    const userInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      messages,
      userInConversation,
    });
  }
};

const updateChatHistoryIfSameConversationActive = (data) => {
  const { participants, messages, userInConversation } = data;

  const result = participants.every((participantId) =>
    userInConversation.includes(participantId)
  );

  if (result) {
    store.dispatch(setMessage(messages));
  }
};
