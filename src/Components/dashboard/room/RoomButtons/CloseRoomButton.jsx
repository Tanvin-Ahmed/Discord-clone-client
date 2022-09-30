import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { leaveRoom } from "../../../../realtimeCommunication/roomHandler";
import { webRTCContext } from "../../../../Context/ContextWebRTC";

const CloseRoomButton = () => {
  const { setRemoteStreams, setLocalStream, setScreenSharingStream } =
    useContext(webRTCContext);

  const handleLeaveRoom = () => {
    leaveRoom(setRemoteStreams, setLocalStream, setScreenSharingStream);
  };

  return (
    <IconButton style={{ color: "white" }} onClick={handleLeaveRoom}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
