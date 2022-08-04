import { setLocalStream } from "../app/actions/roomActions";
import { store } from "../app/store";

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  autio: true,
  video: { facingMode: "user" },
};

export const getLocalStreamPreview = (onlyAudio = false, callback) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callback();
    })
    .catch((err) => console.log("Can not get localStream: " + err));
};
