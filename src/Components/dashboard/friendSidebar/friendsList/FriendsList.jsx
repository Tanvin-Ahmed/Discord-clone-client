import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import FriendsListItem from "./FriendsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled(Box)({
	flexGrow: 1,
	width: "100%",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
	const friendList = friends.map(f => {
		const userIsOnline = onlineUsers.find(user => user.userId === f._id);
		return {
			...f,
			isOnline: userIsOnline ? true : false,
		};
	});
	return friendList;
};

const FriendsList = () => {
	const { friends, onlineUsers } = useSelector(state => state.friends);
	const friendList = checkOnlineUsers(friends, onlineUsers);

	if (!friendList.length) return null;
	return (
		<MainContainer>
			{friendList.map(friend => (
				<FriendsListItem
					key={friend._id}
					id={friend._id}
					username={friend.username}
					isOnline={friend.isOnline}
				/>
			))}
		</MainContainer>
	);
};

export default FriendsList;
