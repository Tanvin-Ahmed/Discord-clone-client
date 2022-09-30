import React, { useContext } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";
import { webRTCContext } from "../../../../Context/ContextWebRTC";
import { useSelector } from "react-redux";

const MainContainer = styled(Box)({
  height: "15%",
  width: "100%",
  backgroundColor: "#5865F2",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtons = () => {
  const { localStream, screenSharingStream, setScreenSharingStream } =
    useContext(webRTCContext);
  const { isUserJoinWithOnlyAudio } = useSelector((state) => state.room);
  return (
    <MainContainer>
      {!isUserJoinWithOnlyAudio && (
        <ScreenShareButton
          localStream={localStream}
          screenSharingStream={screenSharingStream}
          setScreenSharingStream={setScreenSharingStream}
        />
      )}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  );
};

export default RoomButtons;
