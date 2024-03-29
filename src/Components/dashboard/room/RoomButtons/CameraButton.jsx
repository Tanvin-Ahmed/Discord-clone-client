import { IconButton } from "@mui/material";
import React from "react";
import VideoCamOnIcon from "@mui/icons-material/Videocam";
import VideoCamOffIcon from "@mui/icons-material/VideocamOff";
import { useState } from "react";

const CameraButton = ({ localStream }) => {
  const [enableCamera, setEnableCamera] = useState(true);

  const toggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !enableCamera;
    setEnableCamera((pre) => !pre);
  };

  return (
    <IconButton style={{ color: "white" }} onClick={toggleCamera}>
      {enableCamera ? <VideoCamOnIcon /> : <VideoCamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
