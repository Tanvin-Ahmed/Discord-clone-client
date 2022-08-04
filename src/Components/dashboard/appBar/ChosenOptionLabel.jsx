import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ChosenOptionLabel = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);
  return (
    <Typography
      sx={{ color: "white", fontSize: "16px", fontWidth: "bold" }}
    >{`${
      chosenChatDetails?.name
        ? "Chosen conversation: " + chosenChatDetails.name
        : ""
    }`}</Typography>
  );
};

export default ChosenOptionLabel;
