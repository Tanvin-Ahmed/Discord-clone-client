import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import MessagesHeader from "./MessagesHeader";
import { useSelector } from "react-redux";
import { DUMMY_MESSAGES } from "./DUMMY_MESSAGES";
import Message from "./Message";

const MainContainer = styled(Box)({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Messages = () => {
  const { chosenChatDetails, messages } = useSelector((state) => state.chat);
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {DUMMY_MESSAGES.map((msg) => (
        <Message key={msg._id} msg={msg} />
      ))}
    </MainContainer>
  );
};

export default Messages;
