import {
  setActiveRooms,
  setIsUserJoinWithOnlyAudio,
  setOpenRoom,
  setRoomDetails,
} from "../app/actions/roomActions";
import { store } from "../app/store";
import * as socketConnection from "./socketConnection";
import { closeAllConnection, getLocalStreamPreview } from "./webRTCHendler";
import _ from "lodash";

export const createNewRoom = (setLocalStream) => {
  const successCallback = () => {
    store.dispatch(setOpenRoom(true, true));

    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsUserJoinWithOnlyAudio(audioOnly));

    socketConnection.createNewRoom();
  };
  const audioOnly = store.getState().room.audioOnly;
  getLocalStreamPreview(audioOnly, setLocalStream, successCallback);
};

export const newRoomCreated = (roomDetails) => {
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (activeRooms) => {
  let friends = store.getState().friends.friends;
  friends = _.cloneDeep(friends);
  const userId = store.getState().auth.userDetails?._id;

  const rooms = [];
  activeRooms.forEach((room) => {
    const isRoomCreatedByMe = room.roomCreator.userId === userId;

    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creatorUsername: "Me" });
    } else {
      friends.forEach((friend) => {
        if (room.roomCreator.userId === friend._id) {
          rooms.push({ ...room, creatorUsername: friend.username });
        }
      });
    }
  });
  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId, setLocalStream) => {
  const successCallback = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));

    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsUserJoinWithOnlyAudio(audioOnly));

    socketConnection.joinRoom({ roomId });
  };
  const audioOnly = store.getState().room.audioOnly;
  getLocalStreamPreview(audioOnly, setLocalStream, successCallback);
};

export const leaveRoom = (
  setRemoteStreams,
  setLocalStream,
  setScreenSharingStream
) => {
  const roomId = store.getState().room.roomDetails.roomId;

  // stop all stream tracks
  setLocalStream((pre) => {
    if (pre) {
      pre.getTracks().forEach((track) => track.stop());
    }
    return null;
  });

  setScreenSharingStream((pre) => {
    if (pre) {
      pre.getTracks().forEach((track) => track.stop());
    }
    return null;
  });

  closeAllConnection(setRemoteStreams);

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setOpenRoom(false, false));
  store.dispatch(setRoomDetails(null));
};
