import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Video from "./Video";

const MainContainer = styled(Box)({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = () => {
  const { localStream } = useSelector((state) => state.room);
  return (
    <MainContainer>
      <Video stream={localStream} isLocalStream />
    </MainContainer>
  );
};

export default VideosContainer;
