import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Avatar from "../../../shared/Avatar";

const MainContainer = styled(Box)({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled(Box)({
  width: "70px",
});

const MessageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled(Box)({
  color: "#DCDDDE",
});

const SameAuthorMessageContent = styled(Box)({
  color: "#DCDDDE",
  width: "97%",
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px",
});

const Message = ({ msg }) => {
  if (!msg?._id) {
    return (
      <Typography variant="h3" sx={{ color: "gray" }}>
        Loading...
      </Typography>
    );
  }

  const {
    content,
    sameAuthor,
    author: { username },
    date,
    sameDay,
  } = msg;

  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white" }}>
          {username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
