import { roomSlice } from "../slices/roomSlice";

const { actions: roomActions } = roomSlice;

export const setOpenRoom =
  (isUserRoomCreator = false, isUserInRoom = false) =>
  (dispatch) => {
    dispatch(roomActions.setOpenRoom({ isUserRoomCreator, isUserInRoom }));
  };

export const setRoomDetails = (roomDetails) => (dispatch) => {
  dispatch(roomActions.setRoomDetails(roomDetails));
};

export const setActiveRooms = (activeRooms) => (dispatch) => {
  dispatch(roomActions.setActiveRooms(activeRooms));
};

export const setLocalStream = (stream) => (dispatch) => {
  dispatch(roomActions.setLocalStream(stream));
};

export const setAudioOnly = (audioOnly) => (dispatch) => {
  dispatch(roomActions.setAudioOnly(audioOnly));
};
