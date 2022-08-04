import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";

const MainContainer = styled(Box)({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const Sidebar = () => {
  const { activeRooms, isUserInRoom } = useSelector((state) => state.room);
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          key={room.roomId}
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </MainContainer>
  );
};

export default Sidebar;
