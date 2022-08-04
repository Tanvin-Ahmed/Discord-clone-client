import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { leaveRoom } from "../../../../realtimeCommunication/roomHandler";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    leaveRoom();
  };

  return (
    <IconButton style={{ color: "white" }} onClick={handleLeaveRoom}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
