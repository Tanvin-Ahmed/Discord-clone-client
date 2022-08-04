import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import MessagesHeader from "./MessagesHeader";
import { useSelector } from "react-redux";
import Message from "./Message";
import DateSeparator from "./DateSeparator";

const MainContainer = styled(Box)({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertTimeHumanReadable = (date, formate) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return formate.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};

const Messages = () => {
  const { chosenChatDetails, messages } = useSelector((state) => state.chat);

  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.length > 0 ? (
        messages.map((message, index) => {
          const msg = { ...message };
          msg.sameAuthor =
            index > 0 && msg.author._id === messages[index - 1].author._id;

          msg.sameDay =
            index > 0 &&
            convertTimeHumanReadable(new Date(msg.updatedAt), "dd/mm/yy") ===
              convertTimeHumanReadable(
                new Date(messages[index - 1].updatedAt),
                "dd/mm/yy"
              );

          msg.date = convertTimeHumanReadable(
            new Date(msg.updatedAt),
            "dd/mm/yy"
          );

          return (
            <Box key={msg._id} width="97%">
              {(!msg.sameDay || index === 0) && (
                <DateSeparator
                  date={convertTimeHumanReadable(
                    new Date(msg.updatedAt),
                    "dd/mm/yy"
                  )}
                />
              )}
              <Message msg={msg} />
            </Box>
          );
        })
      ) : (
        <h5>Loading....</h5>
      )}
    </MainContainer>
  );
};

export default Messages;
