import { createSlice } from "@reduxjs/toolkit";

export const friendsSlice = createSlice({
	name: "friends",
	initialState: {
		friends: [],
		pendingFriendsInvitations: [],
		onlineUsers: [],
		suggestedPeople: [],
	},
	reducers: {
		setFriends: (state, action) => {
			state.friends = action.payload;
		},
		setPendingFriendsInvitations: (state, action) => {
			state.pendingFriendsInvitations = action.payload;
		},
		setOnlineUsers: (state, action) => {
			state.onlineUsers = action.payload;
		},
		setSuggestedPeople: (state, action) => {
			state.suggestedPeople = action.payload;
		},
	},
});
