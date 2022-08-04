import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineFriends,
} from "../app/actions/friendsActions";
import { store } from "../app/store";
import { updateDirectChatHistoryIfActive } from "../utils/chat";
import { newRoomCreated, updateActiveRooms } from "./roomHandler";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
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
