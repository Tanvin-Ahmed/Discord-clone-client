import { Button, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { webRTCContext } from "../../../Context/ContextWebRTC";
import { joinRoom } from "../../../realtimeCommunication/roomHandler";
import Avatar from "../../shared/Avatar";

const ActiveRoomButton = ({
  roomId,
  creatorUsername,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const { setLocalStream } = useContext(webRTCContext);
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      joinRoom(roomId, setLocalStream);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3 || isUserInRoom;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;
  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
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
          disabled={activeRoomButtonDisabled}
          onClick={handleJoinActiveRoom}
        >
          <Avatar username={creatorUsername} />
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
