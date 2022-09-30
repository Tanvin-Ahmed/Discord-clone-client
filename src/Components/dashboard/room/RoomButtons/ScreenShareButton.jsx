import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { useSelector, useDispatch } from "react-redux";
import { setIsScreenSharingActive } from "../../../../app/actions/roomActions";
import { switchOutgoingTracks } from "../../../../realtimeCommunication/webRTCHendler";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
}) => {
  const dispatch = useDispatch();
  const { isScreenSharingActive } = useSelector((state) => state.room);

  const toggleScreenShare = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log("Error getting display media: " + error);
      }

      if (stream) {
        setScreenSharingStream(stream);
        dispatch(setIsScreenSharingActive(true));
        // switch outgoing vide tracks to screenSharingStream
        switchOutgoingTracks(stream);
      }
    } else {
      // switch outgoing vide tracks to localStream
      switchOutgoingTracks(localStream);

      screenSharingStream.getTracks().forEach((track) => track.stop());
      setScreenSharingStream(null);
      dispatch(setIsScreenSharingActive(false));
    }
  };

  return (
    <IconButton style={{ color: "white" }} onClick={toggleScreenShare}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
