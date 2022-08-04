import { IconButton } from "@mui/material";
import React from "react";
import MicOnIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useState } from "react";

const MicButton = () => {
  const [enableMic, setEnableMic] = useState(true);

  const toggleMic = () => {
    setEnableMic((pre) => !pre);
  };

  return (
    <IconButton style={{ color: "white" }} onClick={toggleMic}>
      {enableMic ? <MicOnIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
