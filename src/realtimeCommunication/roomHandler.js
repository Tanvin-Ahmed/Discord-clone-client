import {
  setActiveRooms,
  setOpenRoom,
  setRoomDetails,
} from "../app/actions/roomActions";
import { store } from "../app/store";
import * as socketConnection from "./socketConnection";
import { getLocalStreamPreview } from "./webRTCHendler";

export const createNewRoom = () => {
  const successCallback = () => {
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom();
  };
  const audioOnly = store.getState().room.audioOnly;
  getLocalStreamPreview(audioOnly, successCallback);
};

export const newRoomCreated = (roomDetails) => {
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (activeRooms) => {
  const friends = store.getState().friends.friends;
  const rooms = [];
  activeRooms.forEach((room) => {
    friends.forEach((friend) => {
      if (room.roomCreator.userId === friend._id) {
        rooms.push({ ...room, creatorUsername: friend.username });
      }
    });
  });
  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallback = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    socketConnection.joinRoom({ roomId });
  };
  const audioOnly = store.getState().room.audioOnly;
  getLocalStreamPreview(audioOnly, successCallback);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setOpenRoom(false, false));
  store.dispatch(setRoomDetails(null));
};
