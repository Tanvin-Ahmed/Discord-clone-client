import React from "react";
import { styled } from "@mui/system";
import { Box, IconButton } from "@mui/material";
import CloseFullScreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled(Box)({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: "white" }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullScreenIcon />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
