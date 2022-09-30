import React, { createContext, useState } from "react";

export const webRTCContext = createContext();

const ContextWebRTC = ({ children }) => {
  const [localStream, setLocalStream] = useState(null);
  const [screenSharingStream, setScreenSharingStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);

  // console.log("localStream: ", localStream);
  // console.log("remoteStreams: ", remoteStreams);

  return (
    <webRTCContext.Provider
      value={{
        localStream,
        setLocalStream,
        remoteStreams,
        setRemoteStreams,
        screenSharingStream,
        setScreenSharingStream,
      }}
    >
      {children}
    </webRTCContext.Provider>
  );
};

export default ContextWebRTC;
