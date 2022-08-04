import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Messages from "./messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../../realtimeCommunication/socketConnection";

const Wrapper = styled(Box)({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({ receiverUserId: chosenChatDetails.id });
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
