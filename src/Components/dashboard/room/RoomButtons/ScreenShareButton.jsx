import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [enableScreenShare, setEnableScreenShare] = useState(false);

  const toggleScreenShare = () => {
    setEnableScreenShare((pre) => !pre);
  };

  return (
    <IconButton style={{ color: "white" }} onClick={toggleScreenShare}>
      {enableScreenShare ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
