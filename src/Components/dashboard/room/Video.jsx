import React, { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const MainContainer = styled(Box)({
  height: "50%",
  width: "50%",
  borderRadius: "8px",
  backgroundColor: "black",
});

const VideoElement = styled("video")({
  width: "100%",
  height: "100%",
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <MainContainer>
      <VideoElement
        ref={videoRef}
        autoPlay
        muted={isLocalStream ? true : false}
      />
    </MainContainer>
  );
};

export default Video;
