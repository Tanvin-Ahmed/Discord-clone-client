import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Sidebar from "../Components/dashboard/sidebar/Sidebar";
import FriendSidebar from "../Components/dashboard/friendSidebar/FriendSidebar";
import Messenger from "../Components/dashboard/messenger/Messenger";
import AppBar from "../Components/dashboard/appBar/AppBar";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshToken } from "../app/actions/userActions";

const Wrapper = styled(Box)({
	width: "100%",
	height: "100vh",
	display: "flex",
});

const DashboardPage = () => {
	const dispatch = useDispatch();
	const { userDetails } = useSelector(state => state.auth);

	useEffect(() => {
		if (!userDetails?.token) return;
		connectWithSocketServer(userDetails);
	}, [userDetails]);

	// useEffect(() => {
	// 	if (!userDetails?.token || !dispatch) return;
	// 	dispatch(getRefreshToken(userDetails));
	// }, [userDetails, dispatch]);

	return (
		<Wrapper>
			<Sidebar />
			<FriendSidebar />
			<Messenger />
			<AppBar />
		</Wrapper>
	);
};

export default DashboardPage;
