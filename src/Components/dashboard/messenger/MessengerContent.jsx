import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Messages from "./messages/Messages";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled(Box)({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    // TODO: fetch chat history of specific user from server
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
