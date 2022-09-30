import Peer from "simple-peer";
import { signalPeerData } from "./socketConnection";

const getConfig = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO: use turn server credentials
  } else {
    //  using only stun server
    return {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
};

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  autio: true,
  video: { facingMode: "user" },
};

export const getLocalStreamPreview = (
  onlyAudio = false,
  setLocalStream,
  callback
) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      setLocalStream(stream);
      callback();
    })
    .catch((err) => console.log("Can not get localStream: " + err));
};

let peers = {};

export const prepareNewPeerConnection = (
  connUserSocketId,
  initiator,
  setLocalStream,
  setRemoteStreams
) => {
  setLocalStream((localStream) => {
    peers[connUserSocketId] = new Peer({
      initiator: initiator,
      config: getConfig(),
      stream: localStream,
    });
    return localStream;
  });

  // if (initiator) {
  //   console.log("Prepare new peer connection as initiator");
  // } else {
  //   console.log("Prepare new peer connection as not initiator");
  // }

  peers[connUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connUserSocketId,
    };

    // pass signal data to other users
    signalPeerData(signalData);
  });

  peers[connUserSocketId].on("stream", (remoteStream) => {
    // set new remote stream to our state
    remoteStream.connUserSocketId = connUserSocketId;
    setRemoteStreams((pre) => [...pre, remoteStream]);
  });
};

export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

export const closeAllConnection = (setRemoteStreams) => {
  Object.entries(peers).forEach((object) => {
    const connUserSocketId = object[0];
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
  });
  setRemoteStreams([]);
};

export const handleParticipantLeftRoom = (
  connUserSocketId,
  setRemoteStreams
) => {
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
    setRemoteStreams((pre) => {
      return pre.filter(
        (stream) => stream.connUserSocketId !== connUserSocketId
      );
    });
  }
};

export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
