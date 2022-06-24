import io from "socket.io-client";
import {
	setPendingFriendsInvitations,
	setFriends,
	setOnlineFriends,
} from "../app/actions/friendsActions";
import { store } from "../app/store";

let socket = null;

export const connectWithSocketServer = userDetails => {
	const { token } = userDetails;
	socket = io("http://localhost:4000", {
		auth: {
			token,
		},
	});

	socket.on("connect", () => {
		console.log("successfully connected with the socket server");
	});

	socket.on("friends-invitations", data => {
		const { pendingInvitations } = data;
		store.dispatch(setPendingFriendsInvitations(pendingInvitations));
	});

	socket.on("friend-list", data => {
		const { friends } = data;
		store.dispatch(setFriends(friends));
	});

	socket.on("online-users", data => {
		const { onlineUsers } = data;
		store.dispatch(setOnlineFriends(onlineUsers));
	});
};
