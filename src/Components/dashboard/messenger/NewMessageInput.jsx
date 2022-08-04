import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sendDirectMessage } from "../../../realtimeCommunication/socketConnection";

const MainContainer = styled(Box)({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  height: "44px",
  width: "98%",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
  outline: "none",
});

const NewMessageInput = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (!message.length) return;
    sendDirectMessage({
      receiverUserId: chosenChatDetails.id,
      content: message,
    });
    setMessage("");
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails?.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyUp={handleKeyPress}
      />
    </MainContainer>
  );
};

export default NewMessageInput;
