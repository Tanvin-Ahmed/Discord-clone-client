import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineFriends,
} from "../app/actions/friendsActions";
import { store } from "../app/store";
import { updateDirectChatHistoryIfActive } from "../utils/chat";
import { newRoomCreated, updateActiveRooms } from "./roomHandler";
import {
  handleParticipantLeftRoom,
  handleSignalingData,
  prepareNewPeerConnection,
} from "./webRTCHendler";

let socket = null;

export const connectWithSocketServer = (setLocalStream, setRemoteStreams) => {
  const userDetails = store.getState().auth.userDetails;

  if (!userDetails.token) return;

  const { token } = userDetails;
  socket = io("http://localhost:4000", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("successfully connected with the socket server");
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("friend-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineFriends(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("room-create", (data) => {
    const { roomDetails } = data;
    newRoomCreated(roomDetails);
  });

  socket.on("active-rooms", (data) => {
    const { activeRooms } = data;
    updateActiveRooms(activeRooms);
  });

  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    prepareNewPeerConnection(
      connUserSocketId,
      false,
      setLocalStream,
      setRemoteStreams
    );

    socket.emit("conn-init", { connUserSocketId });
  });

  socket.on("conn-init", (data) => {
    const { connUserSocketId } = data;
    prepareNewPeerConnection(
      connUserSocketId,
      true,
      setLocalStream,
      setRemoteStreams
    );
  });

  socket.on("room-participant-left", (data) => {
    const { connUserSocketId } = data;
    handleParticipantLeftRoom(connUserSocketId, setRemoteStreams);
  });

  socket.on("conn-signal", (data) => {
    handleSignalingData(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("room-create");
};

export const joinRoom = (data) => {
  socket.emit("room-join", data);
};

export const leaveRoom = (data) => {
  socket.emit("room-leave", data);
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};
