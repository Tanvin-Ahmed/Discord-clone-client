import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useState } from "react";
import ResizeRoomButton from "./ResizeRoomButton";
import RoomButtons from "./RoomButtons/RoomButtons";
import VideosContainer from "./VideosContainer";

const MainContainer = styled(Box)({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const fullScreenRoomStyles = {
  width: "100%",
  height: "100vh",
};

const minimizedRoomStyles = {
  bottom: "0px",
  right: "0px",
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized((pre) => !pre);
  };
  return (
    <MainContainer
      style={isRoomMinimized ? minimizedRoomStyles : fullScreenRoomStyles}
    >
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizeHandler}
      />
    </MainContainer>
  );
};

export default Room;
