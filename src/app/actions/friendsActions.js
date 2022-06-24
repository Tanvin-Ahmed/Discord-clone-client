import { friendsSlice } from "../slices/friendsSlice";
import { alertSlice } from "../slices/alertSlice";
import axios from "../../utils/api";
import { setAlertMessage } from "./alertActions";
import { authError } from "../../utils/authErrorHandler";

const { actions: friendsAction } = friendsSlice;
const { actions: alertAction } = alertSlice;

export const setSuggestPeople = name => async dispatch => {
	try {
		const { data } = await axios.get(`friend-invitation/search/${name}`);

		if (!data.length) {
			dispatch(friendsAction.setSuggestedPeople([]));
			return dispatch(alertAction.setAlertMessage("No people found"));
		}

		dispatch(friendsAction.setSuggestedPeople(data));
	} catch (error) {
		authError(error);
		dispatch(friendsAction.setSuggestedPeople([]));
		dispatch(
			alertAction.setAlertMessage(error.response.data.message || error.message)
		);
	}
};

export const sendFriendInvitation =
	(data, closeDialogHandler) => async dispatch => {
		try {
			await axios.post("/friend-invitation/invite", data);
			dispatch(setAlertMessage("Invitation has been sent!"));
		} catch (error) {
			dispatch(setAlertMessage(error.response.data.message || error.message));
			closeDialogHandler();
			authError(error);
		}
	};

export const setPendingFriendsInvitations = invitations => dispatch => {
	dispatch(friendsAction.setPendingFriendsInvitations(invitations));
};

export const acceptFriendInvitation = data => async dispatch => {
	try {
		await axios.post("/friend-invitation/accept-invitation", data);
		dispatch(
			setAlertMessage(`You accept friend invitation of ${data.username}`)
		);
	} catch (error) {
		authError(error);
		dispatch(setAlertMessage(error.response.data.message || error.message));
	}
};

export const rejectFriendInvitation = data => async dispatch => {
	try {
		await axios.post("/friend-invitation/reject-invitation", data);
		dispatch(
			setAlertMessage(`You reject friend invitation of ${data.username}`)
		);
	} catch (error) {
		authError(error);
		dispatch(setAlertMessage(error.response.data.message || error.message));
	}
};

export const setFriends = friends => dispatch => {
	dispatch(friendsAction.setFriends(friends));
};

export const setOnlineFriends = onlineUsers => dispatch => {
	dispatch(friendsAction.setOnlineUsers(onlineUsers));
};
