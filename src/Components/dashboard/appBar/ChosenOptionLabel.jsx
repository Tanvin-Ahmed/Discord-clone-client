import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ChosenOptionLabel = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);
  const { name } = chosenChatDetails;
  return (
    <Typography
      sx={{ color: "white", fontSize: "16px", fontWidth: "bold" }}
    >{`${name ? "Chosen conversation: " + name : ""}`}</Typography>
  );
};

export default ChosenOptionLabel;
