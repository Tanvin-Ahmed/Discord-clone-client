import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStreams: [],
    audioOnly: false,
    screenSharingStream: null,
    isScreenSharingActive: false,
  },
  reducers: {
    setOpenRoom: (state, action) => {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },
    setRoomDetails: (state, action) => {
      state.roomDetails = action.payload;
    },
    setActiveRooms: (state, action) => {
      state.activeRooms = action.payload;
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setAudioOnly: (state, action) => {
      state.audioOnly = action.payload;
    },
  },
});
