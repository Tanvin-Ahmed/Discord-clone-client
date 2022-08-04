import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { createNewRoom } from "../../../realtimeCommunication/roomHandler";
import { useSelector } from "react-redux";

const CreateRoomButton = () => {
  const { isUserInRoom } = useSelector((state) => state.room);
  const createNewRoomHandler = () => {
    createNewRoom();
  };

  return (
    <Box>
      <Button
        onClick={createNewRoomHandler}
        disabled={isUserInRoom}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "10px",
          color: "white",
          backgroundColor: "#5865F2",
        }}
      >
        <Add />
      </Button>
    </Box>
  );
};

export default CreateRoomButton;
