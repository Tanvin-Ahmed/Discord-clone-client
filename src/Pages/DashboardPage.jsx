import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Sidebar from "../Components/dashboard/sidebar/Sidebar";
import FriendSidebar from "../Components/dashboard/friendSidebar/FriendSidebar";
import Messenger from "../Components/dashboard/messenger/Messenger";
import AppBar from "../Components/dashboard/appBar/AppBar";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshToken } from "../app/actions/userActions";
import Room from "../Components/dashboard/room/Room";
import { useContext } from "react";
import { webRTCContext } from "../Context/ContextWebRTC";

const Wrapper = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashboardPage = () => {
  const { setLocalStream, setRemoteStreams } = useContext(webRTCContext);
  const { isUserInRoom } = useSelector((state) => state.room);

  const socketConnRef = useRef(false);

  useEffect(() => {
    if (socketConnRef.current === true) {
      connectWithSocketServer(setLocalStream, setRemoteStreams);
    }
    return () => {
      socketConnRef.current = true;
    };
  }, [setLocalStream, setRemoteStreams]);

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
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

export default DashboardPage;
