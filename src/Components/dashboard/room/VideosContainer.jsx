import React, { useContext } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Video from "./Video";
import { webRTCContext } from "../../../Context/ContextWebRTC";

const MainContainer = styled(Box)({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = () => {
  const { localStream, remoteStreams, screenSharingStream } =
    useContext(webRTCContext);
  return (
    <MainContainer>
      <Video
        stream={screenSharingStream ? screenSharingStream : localStream}
        isLocalStream
      />
      {remoteStreams.map((stream, index) => (
        <Video key={index} stream={stream} />
      ))}
    </MainContainer>
  );
};

export default VideosContainer;
